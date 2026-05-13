import datetime
import json
import webbrowser
import time
import os
import random
import string
import msvcrt 

class OfficeLock:
    def __init__(self):
        self.__admin_file = 'admins.json'
        self.__user_file = 'users.json'
        self.__secret_code = "PYTHON13"
        
        self.prefixes = ["Void", "Archive", "Opium", "Nomad", "Static", "Phantom", "Silence", "Shadow"]
        self.suffixes = ["Root", "User", "X", "Operator", "Ghost", "Vibe", "Link", "Core"]

        default_admins = {
            'Oleg': {'pass': '2902'},
            'Gemini': {'pass': '2643'}
        }
        
        self.admins = self.load_data(self.__admin_file, default_admins)
        self.users = self.load_data(self.__user_file, {})

    def load_data(self, filename, default_data):
        try:
            with open(filename, 'r', encoding='utf-8') as file:
                data = json.load(file)
                return data if isinstance(data, dict) else default_data
        except:
            return default_data

    def save_users(self):
        with open(self.__user_file, 'w', encoding='utf-8') as f:
            json.dump(self.users, f, indent=4)

    def get_masked_input(self, prompt="Password: "):
        print(prompt, end='', flush=True)
        password = ""
        while True:
            char = msvcrt.getch()
            if char in [b'\r', b'\n']: 
                print()
                break
            elif char == b'\x08': 
                if len(password) > 0:
                    password = password[:-1]
                    print('\b \b', end='', flush=True)
            else:
                try:
                    password += char.decode('utf-8')
                    print('*', end='', flush=True)
                except:
                    pass
        return password

    def clear_screen(self):
        os.system('cls' if os.name == 'nt' else 'clear')

    def log_event(self, message):
        with open("logs.txt", "a", encoding="utf-8") as f:
            f.write(f"{datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')} - {message}\n")

    def authenticate_admin(self):
        print("--- Admin Verification ---")
        admin_name = input("Admin Name: ")
        if admin_name not in self.admins:
            print("Access Denied: Not an admin.")
            time.sleep(2)
            return None
        
        admin_pwd = self.get_masked_input("Admin Password: ")
        if admin_pwd == str(self.admins[admin_name]['pass']):
            return admin_name
        
        print("Access Denied: Wrong Password!")
        time.sleep(2)
        return None

    def stealth_mode(self):
        self.clear_screen()
        columns = os.get_terminal_size().columns
        lines = os.get_terminal_size().lines
        
        header = "SYSTEM STATUS: ENCRYPTED / IDLE"
        instruction = "Press [ENTER] to restore session"
        
        padding_top = lines // 2
        print("\n" * padding_top)
        print(header.center(columns))
        print(instruction.center(columns))
        print("\n" * (lines - padding_top - 4))
        input()

    def generate_identity_web(self):
        self.clear_screen()
        rows = ""
        for _ in range(10):
            nickname = f"{random.choice(self.prefixes)}_{random.choice(self.suffixes)}{random.randint(10, 99)}"
            password = ''.join(random.choices(string.ascii_letters + string.digits, k=12))
            rows += f"<tr><td>{nickname}</td><td>{password}</td></tr>"

        html_content = f"""
        <html><head><style>
            body {{ background-color: #222222; color: #ffffff; font-family: 'Segoe UI', sans-serif; display: flex; justify-content: center; padding-top: 50px; }}
            .container {{ width: 600px; background: #2c2c2c; padding: 30px; border-radius: 10px; border: 1px solid #444444; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }}
            h2 {{ text-align: center; color: #bbbbbb; text-transform: uppercase; letter-spacing: 2px; }}
            table {{ width: 100%; border-collapse: collapse; margin-top: 20px; }}
            th, td {{ padding: 12px; text-align: left; border-bottom: 1px solid #444444; }}
            td {{ font-family: 'Consolas', monospace; color: #eeeeee; }}
        </style></head><body><div class="container"><h2>Shadow Identities</h2><table><tr><th>Nickname</th><th>Password</th></tr>{rows}</table></div></body></html>
        """
        with open("identity.html", "w", encoding="utf-8") as f:
            f.write(html_content)
        webbrowser.open(f"file://{os.path.abspath('identity.html')}")
        time.sleep(1)

    def delete_user(self):
        self.clear_screen()
        admin = self.authenticate_admin()
        if not admin: return
        name = input("Enter username to delete: ")
        if name in self.users:
            del self.users[name]
            self.save_users()
            print(f"User {name} deleted.")
            self.log_event(f"ADMIN_ACTION: Admin {admin} deleted user {name}")
        else:
            print("User not found.")
        time.sleep(1)

    def view_logs(self):
        self.clear_screen()
        admin = self.authenticate_admin()
        if not admin: return
        print(f"--- SYSTEM LOGS (Viewer: {admin}) ---")
        try:
            with open("logs.txt", "r", encoding="utf-8") as f:
                print(f.read())
        except FileNotFoundError:
            print("No logs yet.")
        input("\nPress Enter...")

    def internal_menu(self, user):
        while True:
            self.clear_screen()
            print(f"--- Welcome, {user} ---")
            print("1. Generate Identity (Web Site)")
            print("2. Stealth Mode")
            print("0. Logout")
            choice = input("\nAction: ")
            if choice == "1": self.generate_identity_web()
            elif choice == "2": self.stealth_mode()
            elif choice == "0": break

    def open_door(self):
        self.clear_screen()
        sys_pwd = self.get_masked_input('System Code: ')
        if sys_pwd != self.__secret_code:
            print("Wrong System Code!")
            time.sleep(2)
            return
        
        name = input('Name: ')
        for attempt in range(1, 4):
            pwd = self.get_masked_input("Password: ")
            user_data = self.admins.get(name) or self.users.get(name)

            if isinstance(user_data, dict) and pwd == str(user_data.get('pass')):
                self.log_event(f"login: {name}")
                self.internal_menu(name)
                self.log_event(f"logout: {name}")
                return
            
            if attempt == 1: print("Wrong Password! 2nd attempt:")
            elif attempt == 2: print("Wrong Password! 3rd attempt:")
            else:
                print("Access Denied. Wait 10 seconds...")
                time.sleep(10)
        
    def register_user(self):
        self.clear_screen()
        print("--- Registration ---")
        name = input("New Username: ")
        if name in self.admins or name in self.users:
            print("User already exists!")
            time.sleep(1)
            return
        pwd = self.get_masked_input("Password: ")
        self.users[name] = {'pass': pwd}
        self.save_users()
        print("Done. You can now login.")
        time.sleep(1)

lock = OfficeLock()
while True:
    lock.clear_screen()
    print("--- MAIN MENU ---")
    print("1. Login")
    print("2. Register User")
    print("3. Delete User")
    print("4. View Logs")
    print("5. Exit")
    choice = input("\n> ")
    if choice == "1": lock.open_door()
    elif choice == "2": lock.register_user()
    elif choice == "3": lock.delete_user()
    elif choice == "4": lock.view_logs()
    elif choice == "5": break