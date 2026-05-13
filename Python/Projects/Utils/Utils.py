import os, datetime
def clear():
    os.system('cls' if os.name == 'nt' else 'clear')

def header(text):
    print("-" * 30)
    print(text.center(30))
    print("-" * 30)

def pause():
    input("\nPress Enter to continue...")
