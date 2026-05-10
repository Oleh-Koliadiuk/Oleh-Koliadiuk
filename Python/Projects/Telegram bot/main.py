import asyncio
import logging
import os
import time
from aiogram import Bot, Dispatcher, types, F
from aiogram.filters import CommandStart, Command
from aiogram.types import FSInputFile
from dotenv import load_dotenv
from cachetools import TTLCache
from downloader import get_video_info


load_dotenv()
API_TOKEN = os.getenv("BOT_TOKEN")
logging.basicConfig(level=logging.INFO)

bot = Bot(token=API_TOKEN) 
dp = Dispatcher()

download_cooldown = TTLCache(maxsize=10_000, ttl=600)
cooldown_finish_time = {}

@dp.message(CommandStart())
@dp.message(Command("help"))
async def command_start_handler(message: types.Message):
    photo_path = "photo_2026-04-24_12-32-27.jpg" 
    caption_text = (
        "**Loader Assistant**\n\n"
        "I am an automated media retrieval system specialized exclusively for **TikTok** content. "
        "To proceed, provide a valid TikTok URL for processing.\n\n"
        "**Operational Restrictions:**\n"
        "To maintain system integrity and prevent rate-limiting, a mandatory cooldown of **10 minutes** is required between successful operations.\n\n"
        "Any requests made before the cooldown period has elapsed or from unsupported platforms will be automatically disregarded."

    )

    if os.path.exists(photo_path):
        photo = FSInputFile(photo_path)
        await message.answer_photo(photo=photo, caption=caption_text, parse_mode="Markdown")
    else:
        await message.answer(caption_text, parse_mode="Markdown")

@dp.message()
async def tiktok_message_handler(message: types.Message):
    if message.text and "tiktok.com" in message.text:
        user_id = message.from_user.id
        
        if user_id in download_cooldown:
            finish_time = cooldown_finish_time.get(user_id, 0)
            remaining = int(finish_time - time.time())
            
            if remaining > 0:
                minutes, seconds = remaining // 60, remaining % 60
                cooldown_photo_path = "photo_2026-04-24_15-53-17.jpg" 
                cooldown_text = (
                    "**System access restriction**\n\n"
                    "**Status:** Cooldown Protocol Active\n"
                    "**Reason:** Attempt Threshold Exceeded\n\n"
                    "To preserve system integrity and prevent platform rate-limiting, "
                    "a mandatory 10-minute wait interval is required between successful operations. "
                    "Your access to the media retrieval core has been temporarily suspended.\n\n"
                    f"**Please resubmit request in:** `[ {minutes}m : {seconds}s ]` \n\n"
                    "*(Counter active for specific user)*"

                )

                if os.path.exists(cooldown_photo_path):
                    await message.answer_photo(photo=FSInputFile(cooldown_photo_path), caption=cooldown_text, parse_mode="Markdown")
                else:
                    await message.answer(cooldown_text, parse_mode="Markdown")
                return

        processing_msg = await message.answer("Start Downloading...")
        
        try:
            video_file_path = get_video_info(message.text)
            
            if video_file_path and os.path.exists(video_file_path):
                download_cooldown[user_id] = True
                cooldown_finish_time[user_id] = time.time() + 600
                
                video_file = FSInputFile(video_file_path)
                await message.answer_video(video=video_file, caption="Downloaded by @DowyeBot")
                
                os.remove(video_file_path)
            else:
                await message.answer("Error: Operation failed. Could not retrieve video data.")
        
        except Exception as error:
            logging.error(f"Error: {error}")
            await message.answer("An unexpected system error occurred.")
        
        finally:
            try:
                await processing_msg.delete()
            except:
                pass
    else:
        if message.text and not message.text.startswith('/'):
            await message.answer("Invalid request. Please provide a valid TikTok URL.")

async def main():
    logging.info("Bot is starting...")
    await dp.start_polling(bot)

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except (KeyboardInterrupt, SystemExit):
        logging.info("Bot stopped")