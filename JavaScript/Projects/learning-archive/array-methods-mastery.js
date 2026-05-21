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

// Destructuring with a rest parameter
const { monitor: screen, ...others } = PCsetup; 

// Output: Working on: 180Hz Gaming Screen
console.log(`Working on: ${screen}`); 

// Output: { keyboard: 'Mechanical RGB', mouse: 'Logitech G', gpu: 'RTX 4060' }
console.log(others); 
