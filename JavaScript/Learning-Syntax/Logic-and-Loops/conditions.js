const userName = "Oleh Koliadiuk";
const gpuModel = "RTX 4050";
const isGamingLaptop = true;

// Checking if hardware is suitable for Dota 2
if (gpuModel.includes("40") && isGamingLaptop) {
    console.log(`${userName} can play with 180Hz refresh rate.`);
} else {
    console.log("Check hardware requirements for high FPS.");
}

// Ternary operator for quick city check
const residence = "Rivne";
const isLocal = residence === "Rivne" ? "Lives in Ukraine" : "Remote user";
console.log(`${userName} status: ${isLocal}`);