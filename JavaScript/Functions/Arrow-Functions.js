// Arrow function: let func = (arg1, arg2, ..., argN) => expression
// Default function let func = function(arg1, arg2, ..., argN) { return expression; };

// Another Examples
const sumCB = (a, b) => {
    const result = a + b
    return result;
};
// CB means Curly Brasers

sum(12, 13); // 25

// without CB
const sum = (a, b) => a + b;


// without arg
let sayHiCB = () => { return alert("Hello!"); };

// without CB
let sayHi = () => alert("Hello!");


// We can use Arrow Functions like Func-expression
let age = prompt("How old are you?", 18);

let welcome = (age > 18) ?
    () => alert("Hello!") : 
    () => alert("Greetings!");



// Practice
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "You agree?",
  () => alert("You agreed."),
  () => alert("You cancel.")
);

