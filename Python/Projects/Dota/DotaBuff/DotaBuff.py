import time, sys, os, webbrowser

heroes = {
    "Visage": {
        "attr": "Intelligence",
        "roles": ["Support", "Nuker", "Durable", "Pusher"],
        "winrate": "53.2%",
        "complexity": 3
    },
    "Meepo": {
        "attr": "Agility",
        "roles": ["Carry", "Escape", "Nuker", "Pusher"],
        "winrate": "51.8%",
        "complexity": 3
    },
    "Broodmother": {
        "attr": "Agility",
        "roles": ["Carry", "Pusher", "Escape", "Nuker"],
        "winrate": "48.5%",
        "complexity": 3
    },
    "Shadow Fiend": {
        "attr": "Agility",
        "roles": ["Carry", "Nuker"],
        "winrate": "49.1%",
        "complexity": 2
    },
    "Anti-Mage": {
        "attr": "Agility",
        "roles": ["Carry", "Escape", "Nuker"],
        "winrate": "50.4%",
        "complexity": 1
    },
    "Invoker": {
        "attr": "Universal",
        "roles": ["Nuker", "Disabler", "Escape", "Pusher"],
        "winrate": "48.9%",
        "complexity": 3
    },
    "Axe": {
        "attr": "Strength",
        "roles": ["Initiator", "Durable", "Disabler", "Jungler"],
        "winrate": "51.5%",
        "complexity": 1
    },
    "Pudge": {
        "attr": "Strength",
        "roles": ["Disabler", "Initiator", "Durable", "Nuker"],
        "winrate": "50.8%",
        "complexity": 2
    },
    "Beastmaster": {
        "attr": "Strength",
        "roles": ["Initiator", "Durable", "Disabler", "Jungler"],
        "winrate": "49.7%",
        "complexity": 2
    },
    "Phantom-Lancer": {
        "attr": "Agility",
        "roles": ["Carry", "Escape", "Nuker"],
        "winrate": "47.3%",
        "complexity": 2
    }
}

def clear():
    os.system('cls' if os.name == 'nt' else 'clear')

def save_to_log(hero, found, dotabuff):
    with open("history.txt", "a", encoding="utf-8") as f:
        timestamp = time.strftime("%Y-%m-%d %H:%M:%S")
        f.write(f"\nSearched hero: {hero}\n")
        f.write(f"Hero found in database: {found}\n")
        if hero in heroes:
            for key, value in heroes[hero].items():
                f.write(f"\t{key}: {value}\n")
        else:
            f.write(f"\tdata: N/A\n")
        f.write(f"Visited Dotabuff: {dotabuff}\n")   
        f.write(f"Checked at: {timestamp}\n")

clear()
print("Welcome to the Dota 2 Hero Database!\n")

while True:
    hero_name = input("Whats name of your hero?:\n ")

    if hero_name.lower() == "exit":
        save_to_log("EXIT", "N/A", "N/A")
        sys.exit("\nYou found a secret exit! See you next time!")

    if hero_name in heroes:
        time.sleep(1)
        print("\nSearching for hero information...")
        time.sleep(3)
        
        print(f"\n--- Hero Information ---")
        print(f"Name: {hero_name}")
        print(f"Primary Attribute: {heroes[hero_name]['attr']}")
        print(f"Roles: {', '.join(heroes[hero_name]['roles'])}")
        print(f"Win Rate: {heroes[hero_name]['winrate']}")
        print(f"Complexity: {heroes[hero_name]['complexity']}/3")
        
        time.sleep(3)
        answer = input("\nDo you want to check this hero on dotabuff? (Y/N): \n")
        
        visited_db = "No"
        if answer.lower() == "y":
            visited_db = "Yes"
            url = f"https://www.dotabuff.com/heroes/{hero_name.replace(' ', '-').lower()}"
            webbrowser.open(url)
        
        save_to_log(hero_name, "Yes", visited_db)
        time.sleep(1)

        cont = input("\nDo you want to check another hero? (Y/N): \n")
        if cont.lower() == "y":
            clear()
            continue
        else:
            print("\nSee you next time!")
            break
    else:
        time.sleep(1)
        print("\nSearching for hero information...")
        time.sleep(3)
        print("\nHero not found in the database.")
        save_to_log(hero_name, "No", "No")
        time.sleep(2)
        clear()
