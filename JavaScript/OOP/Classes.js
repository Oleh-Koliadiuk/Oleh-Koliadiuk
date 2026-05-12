class Hero {
    constructor(name, health, damage) {
        this.name = name;
        this.maxHealth = health;
        this.damage = damage;
        this.level = 1;
        this.inventory = [];
    }

    attack(target) {
        console.log(`⚔️ ${this.name} attacks ${target.name}`);
        target.takeDamage(this.damage); 
    }

    heal(amount) {
        this.health += amount;
        if (this.health > this.maxHealth) {
            this.health = this.maxHealth;
        }
        console.log(`✨ ${this.name} healed by ${amount}! Current HP: ${this.health}`);
    }

    displayStats() {
        console.log(`Hero: ${this.name} | HP: ${this.health}/${this.maxHealth} | Damage: ${this.damage}`);
    }

    buyItem(item) {
        this.inventory.push(item);
        console.log(`${this.name} bought ${item}!`); 
    }

    takeDamage(amount) {
        this.health -= amount;
        if (this.health < 0) this.health = 0;
        console.log(`🛡️ ${this.name} got ${amount} damage! Remaining: ${this.health} HP`);

        if (this.health === 0) {
            console.log(`💀 ${this.name} has been slain!`);
        }
    }
}

const Visage = new Hero("Visage", 810, 56);
const Meepo = new Hero("Meepo", 780, 52);

Visage.attack(Meepo);
Meepo.heal(20);