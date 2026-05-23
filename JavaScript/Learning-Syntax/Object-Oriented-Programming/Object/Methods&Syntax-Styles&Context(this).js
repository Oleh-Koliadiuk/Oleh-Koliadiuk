// Function Expression
let user = {
    name: "Ivan",
    age: 30
};

user.sayHi = function(){
    alert("Hello!");
}

user.sayHi(); // Hello!

// Shorter Syntax
const user = {
    sayHi: function() {
        alert("Hello!");
    }
};

// without function
const user = {
    sayHi() {
        alert("Hello!");
    } 
};

// Method this
const user = {
    name: "Unknown",
    age: "Unknown",

    sayHi() {
        alert(this.name); // Unknown
    }
};

let user = { name: "Alex" };
let admin = { name: "Max" };

function sayHi() {
    alert(`Hello! ${this.name}`);
}

user.f = sayHi;
admin.f = sayHi;

user.f(); // Alex (this == user)
admin.f(); // Max (this == admin)

admin['f'](); // Max

function sayHi() {
    alert(this);
};

sayHi(); // undefined
