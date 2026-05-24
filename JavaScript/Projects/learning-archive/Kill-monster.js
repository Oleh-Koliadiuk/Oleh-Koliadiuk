const hero = {
    xp: 0,
    
    killMonster() {
        this.xp += 10;
        return this; 
    },

    completeQuest() {
        this.xp += 50;
        return this;
    },

    showStats() {
        console.log(`Xp: ${this.xp}`);
        return this;
    }
}