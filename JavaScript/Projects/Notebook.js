//  I use "//" to show the beginning and end of the program

let UserName = prompt("Whats your name?", "Write your name here.");
alert("Hello," + " " + UserName + "!");

let IsReady = confirm("You ready to learn JavaScript?");


if ( IsReady ) {
    alert("Good! Go.")
} else {
    alert("Okay, relax and go back!")
}

let Name = prompt("Whats your name?", "Stranger");
alert("Hello, " + Name + "!");
// 


// Name = "Oleg"
let Name = prompt("Enter your name", "Oleg")

if (Name.includes(Oleg)) {
    alert("Hello, admin!");
} else if (Name === false) {
    alert("Problem")
} else {
    alert("Hello, guest!");
}

// I am the admin of my world
let userName = prompt("Enter your name");

if (userName === "Oleg") {
    alert("Hello, admin!");
} else if (userName === null || userName === "") {
    alert("Error: Access denied");
    window.close();
} else {
    alert("Hello, guest!");
}
//




// my favorite singer Onda Andar (Best track for listening: Onda Andar - prop hunts)
let year = prompt("What year now?", "2026")

if (year === 2026) {
    alert("True!");
} else if (year === 2016) {
    alert("Onda andar!")
} else {
    alert("You really!?");
    window.location.href = "https://www.google.com";
}
//

// program with my city )
let year = prompt("When was creaty city in Ukraine Rivne?", "Maybe 1283?");

if (year > 1283) {
    alert("Too late.")
} else if (year < 1283){
    alert("Too early. ")
} else if (year === 1283) {
    alert("True!");
}
//

// let result = condition ? value1 : value2
let accesAlowed = (age > 18) ? true : false;
// End

// also we can do like this
let accesAlowed = age > 18 ? true : false;
//

// and like it ;)
let accesAlowed = age > 18;
//

// something with operator "?"
let age = prompt("Your age?", "18");

let message = (age < 3) ? "Hello baby!" :
    (age < 18) ? "My respect." :
    (age < 100) ? "my congratulations" :
    "What a stranger age!"
//

// Non-traditional use "?"
let company = prompt('What company create lang="JavaScript"?', "Netscape");

(company === "Netscape") ?
    alert("True!") : alert("False.")
//




// 14 && 90
let age = 15;

if ( age >= 14 && age <= 90) {
    alert("Good.")
} else {
    alert("alert: False age!")
    window.location.href = "https://www.google.com"
}

// 14 && 90
if (!(age >= 14 && age <= 90))

if (age < 14 || age > 90)


// && , ||

if ( null || -1 && 1) alert("")
// -1 = true , 0 && Nan = false , 1 = true



// Easy program
function redirect() { window.location.href = "https://www.google.com"; }

let UserName = prompt("Who's there?", "Guest");

if (UserName === "Admin") {
    let AdminPassword = prompt("Enter your password", "#####")
    if (AdminPassword === null || AdminPassword === "") {
        alert("Canceled")
        redirect();
    } else if (AdminPassword === "12345") {
        alert("Hello Admin!")
    } else {
        alert("I dont know you.")
        redirect();
    } 
} else if (UserName === null || UserName === "") {
    alert("Canceled")
    redirect();
} else {
    alert("I dont know you.")
    redirect();
}
//


// ??
const result = (a != null && a !== undefined) ? a : b;


//
let user;
alert(user ?? "Anonymous");
//

//
let firstName = null;
let lastName = null;
let nickName = "Oleh";

alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Oleh ; true

alert(firstName || lastName || nickname || "Anonymous"); // Oleh ; defined
//

//
let height = 0;

alert(height || 100); // 100
alert(heigth ?? 100); // 0
// 

// ?? = || = 3

//
let height = null;
let width = null;

// USE ()
let area = (heigth ?? 100) * (width ?? 50);

alert(area); // 5000
//

// without ()
let area = height ?? 100 * width ?? 50

let area = height ?? (100 * width) ?? 50;
//

//
let x = 1 && 2 ?? 3; // SyntaxError
//

//
let x = (1 && 2) ?? 3; // Works

alert(x); // 2