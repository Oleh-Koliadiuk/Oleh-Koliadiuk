/**
 * SECTION: JAVASCRIPT ARRAY METHODS
 * Practice: Cleaning data, filtering strings, and math
 */

// Data Cleaning
const players = [" shadow fiend ", " meepo ", " abaddon"];
const CleanPlayers = players.map(name => name.trim().toUpperCase());

// String Filtering (Brands)
const Brands = ["Carhartt", "Levis", "Nike"];
const shortBrands = Brands.filter(str => str.length < 5);

// Destructuring Practice
const PCsetup = {
    monitor: "180Hz Gaming Screen",
    keyboard: "Mechanical RGB",
    mouse: "Logitech G",
    gpu: "RTX 4060"
};

const { monitor: screen, ...others } = PCsetup;
console.log(`Working on: ${screen}`);