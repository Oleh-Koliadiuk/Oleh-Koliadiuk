const isCorrect1 = true;
const isCorrect2 = false;
const isCorrect3 = true;

const score = isCorrect1 + isCorrect2 + isCorrect3; // 1 + 0 + 1 = 2

// Primtive - Number
const obj1 = {
  value: 10,
  [Symbol.toPrimitive](hint) {
    return this.value;
  },
};

const obj2 = {
  value: 15,
  [Symbol.toPrimitive](hint) {
    return this.value;
  },
};

alert(obj1 + obj2);

const gameCharacter = {
  strength: 23,
  agility: 15,
  intelligence: 15,
};

const { strength, agility, intelligence } = gameCharacter;
alert(strength + agility + intelligence);

// Primitive - String
const obj = {
  name: "Henry",
  surname: "Taylor",

  // method - get
  get allName() {
    return this.name + this.surname;
  },
};

alert(obj.allName);
