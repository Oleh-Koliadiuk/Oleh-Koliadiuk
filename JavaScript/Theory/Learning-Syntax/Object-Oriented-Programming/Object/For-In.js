const numericObject = {
  a: 1,
  b: 2,
  c: 3,
};

for (const key in numericObject) {
  if (Object.hasOwn(numericObject, key)) {
    numericObject[key] = numericObject[key] * 2;
  }
}

console.log("1. Mutated object:", numericObject);

// Prototype Chain Inheritance Example
const animalPrototype = {
  legs: 4,
  eat() {
    console.log("Eating...");
  },
};

const dog = Object.create(animalPrototype);
dog.name = "Rex";
dog.breed = "German Shepherd";

// Unsafe loop: iterates over both own and inherited properties
console.log("\nUnsafe for...in (includes prototype):");
for (const key in dog) {
  console.log(`Key: ${key}, Value: ${dog[key]}`);
}

// Safe loop: filters out inherited properties
console.log("\nSafe for...in (own properties only):");
for (const key in dog) {
  if (Object.hasOwn(dog, key)) {
    console.log(`Own property: ${key} = ${dog[key]}`);
  }
}

// Modern Alternatives (Avoiding for...in)
const user = {
  id: 101,
  username: "js_dev",
  role: "admin",
};

console.log("\nUsing Object.keys():");
Object.keys(user).forEach((key) => {
  console.log(key);
});

console.log("\nUsing Object.entries() (Immutability):");
const updatedUser = Object.fromEntries(
  Object.entries(user).map(([key, value]) => {
    return [key, typeof value === "string" ? value.toUpperCase() : value];
  })
);

console.log("New transformed object:", updatedUser);
console.log("Original object:", user);
