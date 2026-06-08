class BankAccount {
  #balance = 100;

  withdraw(amount) {
    this.#balance -= amount;
  }
}

// Initializing test data objects
let userEmpty = {};
let userNull = null;
let userGuest = {};
let counter = 0; // Tracks if short-circuit execution occurs

let userAlex = {
  name: "Alex",
  age: 14,
};

let userAdmin = {
  admin() {
    alert("I'm an admin.");
  },
};

let user1 = {
  firstName: "Ivan",
};

let dynamicKey = "firstName";
let city = {};

let collection = {
  property: null,
};

// Checking properties using the old ternary operator approach
alert(userEmpty.address ? userEmpty.address.street : undefined);

// Checking deeply nested properties using the old logical AND (&&) approach
alert(
  userEmpty.address && userEmpty.address.street && userEmpty.address.street.name
);

// Clean and modern property checking using optional chaining (?.)
alert(userEmpty?.address?.street);

// Bad DOM practice: redundant selection slows down execution
let htmlBad = document.querySelector(".elem")
  ? document.querySelector(".elem").innerHTML
  : null;

// Good DOM practice: quick and safe innerHTML reading in a single step
let htmlGood = document.querySelector(".elem")?.innerHTML ?? null;

// Providing a fallback value if the left expression evaluates to null or undefined
alert(city?.address ?? "City not specified");

// Assigning default values using standard if statements
if (!userAlex.city) {
  userAlex.city = "Kyiv";
}

if (!collection.property) {
  collection.property = "Kyiv";
}

// Checking null objects safely returns undefined instead of crashing
alert(userNull?.address);
alert(userNull?.address.street);

// Short-circuiting: evaluation stops immediately, so counter++ never runs
userNull?.sayHi(counter++);
alert(counter); // Returns 0

// Executing optional methods safely without throwing errors
userAdmin.admin?.();
userGuest.admin?.(); // Does nothing because the method is missing

// Reading properties dynamically using bracket notation
alert(user1?.[dynamicKey]);

// Safely deleting an object property if it exists
delete userNull?.name;

// Invalid syntax: optional chaining is strictly read-only and cannot assign data
// userNull?.name = 'Ivan'; // SyntaxError: Invalid left-hand side in assignment
