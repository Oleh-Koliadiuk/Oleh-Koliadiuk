import asyncio
import os
import json
import logging
from aiogram import Bot, Dispatcher, types, F
from aiogram.filters import Command
from aiogram.utils.keyboard import ReplyKeyboardBuilder


API_TOKEN = '8688249657:AAEarmF-lSEOnmS4WRAm_soNQ_c4FlAStWU'

logging.basicConfig(level=logging.INFO)

bot = Bot(token=API_TOKEN)
dp = Dispatcher()
DATA_FILE = 'stats_db.json'


def load_data():
    if not os.path.exists(DATA_FILE): 
        with open(DATA_FILE, 'w') as f: json.dump([], f)
        return []
    try:
        with open(DATA_FILE, 'r') as f: return json.load(f)
    except: return []

def save_data(data):
    with open(DATA_FILE, 'w') as f: json.dump(data, f, indent=4)


@dp.message(Command("start"))
async def start(message: types.Message):
    builder = ReplyKeyboardBuilder()
    builder.button(text="Add Match")
    builder.button(text="View report")
    builder.button(text="Help")
    markup = builder.as_markup(resize_keyboard=True)
    await message.answer("XenonIT is ready", reply_markup=markup)

@dp.message(F.text == "View report")
async def show(message: types.Message):
    data = load_data()
    if not data:
        await message.answer("Database is currently empty.")
    else:
        await message.answer(f"Statistics: You have recorded {len(data)} matches.")

@dp.message(F.text == "Add Match")
async def show_add_instruction(message: types.Message):
    await message.answer(
        "To add a match, use the command format:\n\n"
        "`/add Hero GPM KDA W/L`\n\n"
        "Example: `/add Visage 850 12/2/8 W`",
        parse_mode="Markdown"
    )

@dp.message(Command("add"))
async def add_match(message: types.Message):
    try:
        args = message.text.split()[1:] 
        
        if len(args) < 4:
            await message.answer("Format: /add Hero GPM KDA W/L\nExample: /add Sven 935 22/5/7 L")
            return

        new_match = {
            "hero": args[0],
            "gpm": args[1],
            "kda": args[2],
            "res": args[3].upper()
        }

        data = load_data()
        data.append(new_match)
        save_data(data)
        
        await message.answer(f" Match Recorded!\nHero: {args[0]}\nResult: {args[3].upper()}")
    except Exception as e:
        await message.answer(f" Error saving data: {e}")

@dp.message(F.text == "Help")
async def help_cmd(message: types.Message):
    await message.answer("This bot tracks your Dota 2 performance and engineering tasks.")

async def main():

    await bot.delete_webhook(drop_pending_updates=True)
    await dp.start_polling(bot)

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("Bot turned off.")