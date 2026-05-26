const button = document.querySelector('#default button');

button.addEventListener('click', () => {
const userName = prompt("Hello!, what's your name?", "Unknown");

if (userName === "" || userName === null) {
    window.location.href = "https://google.com";
} else {
    alert(`Hello, ${userName}!`);
}

let userRocket;

while (true) {
    userRocket = prompt("How many rockets do you have?", "");

    if (userRocket === null || userRocket.trim() === "") {
        alert("Only Numbers! (bigger than 0)");
        continue;
    }

    if (isNaN(userRocket)) {
        alert("Only Numbers! (bigger than 0)");
        continue;
    }

    if (Number(userRocket) <= 0) {
        alert("Only Numbers! (bigger than 0)");
        continue;
    }

    if (Number(userRocket) > 5) {
        alert("We supporting only 5 Rockets.");
        continue;
    }

    const userAgree = confirm("This is a program for keeping track of your rockets. You want to continue?");
    if (userAgree === true) {
        alert("Okay, continue!");
        break;
    } else if (userAgree === false) {
        alert("See you later, bye!");
        window.location.href = "https://google.com";
        throw new Error("Redirecting to Google...");
    }
}

userRocket = Number(userRocket);

const launcher = {
    rockets: userRocket,
    
    fire() {
        if (this.rockets > 0) {
            alert(`Remaining ${this.rockets -= 1}`);
        } else {
            alert("No shells!");
        }
        return this;
    },
    reload() {
        if (this.rockets === 5) {
            alert("Already have 5 rockets!");
        } else {
            this.rockets = 5;
            alert(`Launcher successfuly reload! Remaining ${this.rockets} `);
        }
        return this;
    }
};

while (true) {
    const action = prompt("Enter action: 'fire' to shoot, 'reload' to reload, 'exit' to quit");

    if (action === null) {
        alert("Goodbye!");
        break;
    }

    const cleanAction = action.trim().toLowerCase();

    if (cleanAction === "exit") {
        alert("Goodbye!");
        break;
    }

    switch (cleanAction) {
        case "fire":
            launcher.fire();
            break;
        case "reload":
            launcher.reload();
            break;
        default:
            alert("Unknown action! Please type 'fire', 'reload' or 'exit'.");
    }
}
}
)
