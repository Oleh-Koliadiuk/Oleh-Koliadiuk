import datetime
import json
import getpass
import webbrowser
import time
import os

class OfficeLock:
    secret_code = "PYTHON13"
    office_name = "Office Gemini"

    def __init__(self):
        self.admin_file = 'admins.json'
        self.user_file = 'users.json'
        
        default_admins = {
            'Oleg': {'pass': '2902', 'url': 'https://github.com/'},
            'Gemini': {'pass': '2643', 'url': 'https://docs.python.org/'}
        }
        
        self.admins = self.load_data(self.admin_file, default_admins)
        self.users = self.load_data(self.user_file, {})

    def load_data(self, filename, default_data):
        try:
            with open(filename, 'r', encoding='utf-8') as file:
                return json.load(file)
        except (FileNotFoundError, json.JSONDecodeError):
            with open(filename, 'w', encoding='utf-8') as file:
                json.dump(default_data, file, indent=4)
            return default_data

    def save_users(self):
        with open(self.user_file, 'w', encoding='utf-8') as f:
            json.dump(self.users, f, indent=4)

    def clear_screen(self):
        os.system('cls' if os.name == 'nt' else 'clear')

    def register_user(self):
        self.clear_screen()
        print("--- Public Registration ---")
        new_name = input("Enter your name: ")
        
        if new_name in self.admins or new_name in self.users:
            print("Error: Name already taken!")
            time.sleep(2)
            return

        new_pass = getpass.getpass(f"Create password for {new_name}: ")
        new_url = input("Enter your personal landing page (URL or path): ")
        
        if not new_url:
            new_url = 'https://www.google.com'

        self.users[new_name] = {'pass': new_pass, 'url': new_url}
        self.save_users()
        print(f"User {new_name} added successfully!")
        time.sleep(2)

    def delete_user(self):
        self.clear_screen()
        print("--- Admin Access Required ---")
        admin_name = input("Admin Name: ")
        if admin_name in self.admins:
            admin_pwd = getpass.getpass("Admin Password: ")
            if admin_pwd == str(self.admins[admin_name]['pass']):
                target = input("Enter username to delete: ")
                if target in self.users:
                    del self.users[target]
                    self.save_users()
                    print(f"User {target} deleted.")
                else:
                    print("User not found!")
            else:
                print("Wrong Admin Password!")
        else:
            print("Access Denied!")
        time.sleep(2)

    def view_logs(self):
        self.clear_screen()
        print("--- Admin Access Required to View Logs ---")
        admin_name = input("Admin Name: ")
        if admin_name in self.admins:
            admin_pwd = getpass.getpass("Admin Password: ")
            if admin_pwd == str(self.admins[admin_name]['pass']):
                self.clear_screen()
                print("--- SYSTEM LOGS ---")
                try:
                    with open("logs.txt", "r", encoding="utf-8") as f:
                        lines = f.readlines()
                        if not lines:
                            print("No logs found.")
                        else:
                            for line in lines[-10:]:
                                print(line.strip())
                except FileNotFoundError:
                    print("Log file does not exist yet.")
                
                input("\nPress Enter to return to menu...")
            else:
                print("Wrong Password!")
                time.sleep(2)
        else:
            print("Access Denied!")
            time.sleep(2)

    def open_door(self):
        self.clear_screen()
        attempts = 3
        while attempts > 0:
            sys_pwd = getpass.getpass('System Password: ')
            if sys_pwd == self.secret_code:
                name = input('Name: ')
                pwd = getpass.getpass("Personal Code: ")
                
                target_user = None
                if name in self.admins:
                    target_user = self.admins[name]
                elif name in self.users:
                    target_user = self.users[name]

                if target_user and pwd == str(target_user['pass']):
                    self.clear_screen()
                    print(f'Access Granted! Welcome, {name}!')
                    
                    log_msg = f"{name} entered at {datetime.datetime.now()}\n"
                    with open("logs.txt", "a", encoding="utf-8") as f:
                        f.write(log_msg)
                    
                    webbrowser.open(target_user['url'])
                    return
                else:
                    print("Invalid credentials!")
                    attempts -= 1
                    time.sleep(1)
                    continue
            else:
                attempts -= 1
                print(f'Wrong! Left: {attempts}')
            
            if attempts == 0:
                print('\nLOCKED (15s)')
                time.sleep(15)
                attempts = 3

lock = OfficeLock()

while True:
    lock.clear_screen()
    print(f"=== {lock.office_name} ===")
    print("1. Login\n2. Register\n3. Delete User (Admin Only)\n4. View Logs (Admin Only)\n5. Exit")
    choice = input("\nAction: ")

    if choice == "1": lock.open_door()
    elif choice == "2": lock.register_user()
    elif choice == "3": lock.delete_user()
    elif choice == "4": lock.view_logs()
    elif choice == "5": break