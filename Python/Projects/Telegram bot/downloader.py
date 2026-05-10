import yt_dlp
import os
import uuid
import random
import requests
from datetime import datetime, timedelta

LOG_FILE = "downloads.log"

USER_AGENTS = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edg/122.0.0.0",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_2_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3.1 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Linux; Android 14; SM-S911B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.64 Mobile Safari/537.36",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
]

def update_agents_silently():
    url = "https://raw.githubusercontent.com/tamimibrahim17/List-of-user-agents/master/Chrome.txt"
    try:
        r = requests.get(url, timeout=5)
        if r.status_code == 200:
            new_agents = [line.strip() for line in r.text.splitlines() if len(line) > 50]
            if new_agents:
                for ua in new_agents:
                    if ua not in USER_AGENTS:
                        USER_AGENTS.append(ua)
    except:
        pass

def manage_logs():
    if os.path.exists(LOG_FILE):
        file_creation_time = os.path.getctime(LOG_FILE)
        if datetime.now() - datetime.fromtimestamp(file_creation_time) > timedelta(days=7):
            try:
                os.remove(LOG_FILE)
            except:
                pass

def log_download(url, status, filename=""):
    time_str = datetime.now().strftime("%d-%m %H:%M:%S")
    
    entry = (
        f"{time_str}:\n"
        f"    file: {filename}\n"
        f"    URL: {url}\n"
        f"{'-' * 40}\n"
    )
    
    try:
        with open(LOG_FILE, "a", encoding="utf-8") as f:
            f.write(entry)
    except Exception as e:
        print(f"Error: {e}")

update_agents_silently()
manage_logs()

def get_video_info(url):
    unique_id = uuid.uuid4().hex[:8]
    unique_filename = f"bolt_{unique_id}.mp4"
    
    ydl_opts = {
        'format': 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best',
        'outtmpl': unique_filename,
        'cookiefile': 'cookies.txt',
        'nocheckcertificate': True,
        'quiet': True,
        'no_warnings': True,
        'headers': {
            'User-Agent': random.choice(USER_AGENTS),
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
            'Accept-Language': 'uk-UA,uk;q=0.9,en-US;q=0.8,en;q=0.7',
            'Referer': 'https://www.tiktok.com/',
        },
    }
    
    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])
            
            if os.path.exists(unique_filename):
                log_download(url, "SUCCESS", unique_filename)
                return unique_filename
            else:
                for file in os.listdir('.'):
                    if f"bolt_{unique_id}" in file:
                        log_download(url, "SUCCESS_ALT", file)
                        return file
                log_download(url, "FAILED", "No file found")
                return None
    except Exception as e:
        log_download(url, "ERROR", str(e)[:30])
        return None