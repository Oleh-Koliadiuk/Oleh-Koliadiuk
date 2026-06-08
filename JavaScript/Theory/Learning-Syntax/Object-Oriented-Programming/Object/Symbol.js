const id = Symbol("id");
const secretKey = Symbol("secret");

const user = {
  name: "Alex",
  email: "alex@example.com",
  [id]: 1001,
  [secretKey]: "hidden_password_123",
};

console.log(user.name);
console.log(user.email);

console.log(user[id]);
console.log(user[secretKey]);

const keys = Object.keys(user);
console.log(keys);

const symbols = Object.getOwnPropertySymbols(user);
console.log(symbols);

const myId = Symbol("id");
console.log(myId.toString());
console.log(myId.description);

const userTest = {
  name: "Alex",
  age: 12,
  [id]: 123,
};

for (let key in userTest) {
  console.log(key);
}

console.log(`Direct access: ${userTest[id]}`);

let user3 = {
  [id]: 123,
};

let clone = Object.assign({}, user3);
console.log(clone[id]);

let id4 = Symbol.for("id");
let idAgain = Symbol.for("id");

console.log(id4 === idAgain);

let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

console.log(Symbol.keyFor(sym));
console.log(Symbol.keyFor(sym2));
