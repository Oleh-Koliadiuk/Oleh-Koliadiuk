// 1. Difference between Function Declaration and Function Expression
// This is a Function Declaration (hoisted, can be called before definition)
function declarationExample() {
    alert("Hello from Declaration!");
}

// This is a Function Expression (not hoisted, created when execution reaches it)
const expressionExample = function() {
    alert("Hello from Expression!");
};


// 2. Copying a function to another variable
const sayHi = function() {
    alert("Hello!");
};

const func = sayHi; // Copying the function pointer, NOT executing it

func();  // Triggers alert: "Hello!"
sayHi(); // Triggers alert: "Hello!"


// 3. Assignment: Function vs Function Return Value
let greet = function() {
    alert("Welcome!");
    return "Greeting complete"; // Added return statement to avoid undefined
};

// Variable stores the function itself
const functionPassenger = greet; 

// Variable stores the RETURN VALUE of the function (executes immediately)
const resultPassenger = greet(); 

console.log(resultPassenger); // Logs: "Greeting complete"

// Copying a function to another variable
let age = prompt("How old are you?", 18);

const welcome;

if (age > 18) {

    welcome = function(){
        alert("Hello!");
    };
} else {

    welcome = function() {
        alert("Greetings!");
    };
}

welcome(); 

// Same code with ternary operator
let age = prompt("How many old are you?", 18);

let welcome = (age > 18) ?
    function() { alert("Hello!"); } :
    function() { alert("Hello!"); };
    
welcome();

