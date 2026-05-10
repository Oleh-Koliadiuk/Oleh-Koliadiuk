// Learning: Objects, Methods, and Data Processing


const DotaAccount = {
    nickname: "Oleg",
    stats: { mmr: 1500, wins: 890 },
    topHeroes: ["Visage", "Meepo", "BeastMaster"],

    addWin() {
        this.stats.wins++;
        console.log(`New win added! Total wins: ${this.stats.wins}`);
    }
};

// Player Analytics
const matches = [
    { hero: "Visage", score: 15, win: true },
    { hero: "BroodMother", score: 20, win: true },
    { hero: "Meepo", score: 25, win: true },
    { hero: "Visage", score: 12, win: true }
];

// Calculate total score for won Visage matches
const visageScore = matches
    .filter(item => item.hero === "Visage" && item.win === true)
    .map(item => item.score)
    .reduce((acc, curr) => acc + curr, 0);

console.log(`Visage total score: ${visageScore}`);

// GPM & Kills Calculations
const GoldPerMinute = [600, 708, 985, 798, 802, 902, 678, 560];
const totalGpm = GoldPerMinute.reduce((sum, current) => sum + current, 0);
