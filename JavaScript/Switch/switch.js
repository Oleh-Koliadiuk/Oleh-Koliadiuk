let a = 2 + 2;

switch(a) {
    case 3:
        alert("Not enough");
        break;
    case 4:
        alert("Precisely");
        break;
    case 5:
        alert("Too much");
        break;
    default:
        alert("I don't know such values");
}

let b = 3;

switch (b) {
    case 4:
        alert("True");
        break;
    case 3:
    case 5:
        alert("Maybe you need to take math classes?");
        break;
    default:
        alert("It Looks strange");
}

let arg = prompt("Enter Number", "#####");

switch(arg) {
    case "0":
    case "1":
        alert("Zero or One");
        break;
    case "2":
        alert("Two");
        break;
    case "3":
        alert("It will never be");
        break;
    default:
        alert("Unknown value");
}

const browser = "Safari";

switch (browser) {
    case 'Edge':
        alert("You've got the Edge!");
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert('We support these browsers too');
        break;
    default:
        alert('We hope this page looks good!');
}

if (browser === "Edge") {
    alert("You've got the Edge!");
} else if (browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera") {
    alert("We support these browsers too");
} else {
    alert("We hope this page looks good");
}

let num = +prompt('a', '');

if (num == 0) {
    alert(0);
}
if (num == 1) {
    alert(1);
}
if (num == 2 || num == 3) {
    alert('2,3');
}

switch(num) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}
