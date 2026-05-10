const streetwearBrands = ["Rick Owens", "Vetements", "Yohji Yamamoto", "ERD"];

console.log("--- My Style Guide ---");

// Classic loop to list brands
for (let i = 0; i < streetwearBrands.length; i++) {
    console.log(`Brand #${i + 1}: ${streetwearBrands[i]}`);
}

// Modern 'for...of' loop for inventory check
const gameInventory = ["Aghanim's Shard", "Blink Dagger", "Black King Bar"];
for (const item of gameInventory) {
    console.log(`Inventory Check: ${item} is ready.`);
}
