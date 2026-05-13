 # car
import os, time
Characteristics = {
    "Distance": None,
    "fuel_consumed": None
     }
def clear():
     os.system('cls' if os.name == 'nt' else 'clear')
clear()
while True:     
    input_distance = input("Enter the distance traveled (km): ")
    time.sleep(1)
    input_fuel = input("Enter the amount of fuel consumed (liters): ")
    time.sleep(1)
    try:
        Characteristics["Distance"] = float(input_distance)
        Characteristics["fuel_consumed"] = float(input_fuel)
        break
    except ValueError:
        print("Invalid input. Please enter numeric values for distance and fuel consumed.")
    if Characteristics["Distance"] > 0:
        fuel_efficiency = Characteristics["fuel_consumed"] / Characteristics["Distance"] * 100
        print(f"Fuel efficiency: {fuel_efficiency:.2f} liters per 100 km")

# Dota
heroes = {
    "Visage": "Visage",
    "Meepo": "Meepo",
    "BroodMother": "BroodMother"
}
heroes["Visage"] = "Visage (Master Tier)"
def clear():
    os.system('cls' if os.name == 'nt' else 'clear')
clear()
while True:
    try:
        time.sleep(1)
        input_time = int(input("How many time you can play?:\n"))

        if input_time < 30:
            print(f"Your choice: {heroes['Visage']}")
            break
        elif input_time >= 30 and input_time <= 40:
            print(f"Your choice: {heroes['Meepo']}")
            break
        else:
            print(f"Your choice: {heroes['BroodMother']}")
            break

    except ValueError:
            print("Only numbers.")



