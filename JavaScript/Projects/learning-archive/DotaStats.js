// Dataset: Recent matches
const matchHistory = [
    { hero: "Visage", result: "win", score: 25, duration: 35 },
    { hero: "Meepo", result: "win", score: 18, duration: 40 },
    { hero: "Visage", result: "loss", score: 12, duration: 45 },
    { hero: "BroodMother", result: "win", score: 22, duration: 30 },
    { hero: "Visage", result: "win", score: 30, duration: 28 }
]

const getHeroStats = (matches, heroName) => {
    const heroMatches = matches.filter(m => m.hero === heroName);

    const totalScore = heroMatches.reduce((acc, m) => acc + m.score, 0);

    const wins = heroMatches.filter(m => m.result === "win").length;
    const winRate = ((wins / heroMatches.length) * 100).toFixed(1);

    return {
        hero: heroName,
        totalGames: heroMatches.length,
        averageScore: (totalScore / heroMatches.length).toFixed(1),
        winRate: winRate + "%"
    };
};

const visageStats = getHeroStats(matchHistory, "Visage");
console.log("--- My Hero Analytics ---");
console.log(visageStats);