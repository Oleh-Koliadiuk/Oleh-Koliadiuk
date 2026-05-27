function Calculator() {
  this.a = 0;
  this.b = 0;

  this.read = function() {
    this.a = Number(prompt("a?", 0));
    this.b = Number(prompt("b?", 0));
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());


function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    let input = prompt('+?', 0);
    if (input === null) return;
    
    this.value += +input;
  };
}

let accumulator = new Accumulator(0);
accumulator.read();
accumulator.read();
alert("Accumulator=" + accumulator.value);


// Example 1: Creating independent objects
let user1 = new Accumulator(10);
let user2 = new Accumulator(50);


// Example 2: Implicit behavior of the 'new' keyword
function User(name) {
  // JavaScript implicitly creates: this = {};
  
  this.name = name;
  this.isAdmin = false;
  
  // JavaScript implicitly returns: return this;
}

let admin = new User("Oleh");