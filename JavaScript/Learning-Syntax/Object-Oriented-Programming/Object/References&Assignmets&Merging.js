// References & Cloning
let masterUser = { name: "Oleg" };
let adminReference = masterUser;

let baseUser = { name: "Oleg" };
let realClone = { ...baseUser };
realClone.name = "Bro";

console.log(baseUser.name);  // Output: "Oleg"
console.log(realClone.name); // Output: "Bro"

// Notation & Utilities
const dynamicObj = {};
const dynamicKey = "DynamicKey"; 
dynamicObj[dynamicKey] = "admin";

const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source); // target is now { a: 1, b: 2, c: 3}

const original = { x: 10 };
const updated = { ...original, y: 20 };
console.log(updated); // { x: 10, y: 20}
