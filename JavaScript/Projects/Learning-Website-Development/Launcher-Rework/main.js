const launcher = {
    rockets: 0,
    userName: "",

    init() {
        const savedName = localStorage.getItem('launcher_name');
        const savedRockets = localStorage.getItem('launcher_rockets');

        if (savedName && savedRockets) {
            this.userName = savedName;
            this.rockets = Number(savedRockets);
            alert(`Welcome back, ${this.userName}! Loaded ${this.rockets} rockets from memory.`);
            return true;
        }

        this.userName = prompt("Hello!, what's your name?", "Unknown");
        if (this.userName === "" || this.userName === null) {
            window.location.href = "https://google.com";
            return false;
        }
        alert(`Hello, ${this.userName}!`);

        while (true) {
            let userRocket = prompt("How many rockets do you have?", "");

            if (userRocket === null || userRocket.trim() === "" || isNaN(userRocket) || Number(userRocket) <= 0) {
                alert("Only Numbers! (bigger than 0)");
                continue;
            }

            if (Number(userRocket) > 5) {
                alert("We supporting only 5 Rockets.");
                continue;
            }

            const userAgree = confirm("This is a program for keeping track of your rockets. You want to continue?");
            if (userAgree) {
                alert("Okay, continue!");
                this.rockets = Number(userRocket);
                localStorage.setItem('launcher_name', this.userName);
                localStorage.setItem('launcher_rockets', this.rockets);
                break;
            } else {
                alert("See you later, bye!");
                window.location.href = "https://google.com";
                return false;
            }
        }
        return true;
    },

    fire(event) {
        if (this.rockets > 0) {
            this.rockets -= 1;
            localStorage.setItem('launcher_rockets', this.rockets);

            const rocket = document.createElement('span');
            rocket.classList.add('flying-rocket');
            rocket.innerText = '\u{1F680}';

            const clickX = event.clientX;
            const clickY = event.clientY;

            rocket.style.left = `${clickX}px`;
            rocket.style.top = `${clickY}px`;

            const randomX = (Math.random() - 0.5) * 160;
            const randomY = -400 - (Math.random() * 150);
            const randomRotate = (Math.random() - 0.5) * 45;

            rocket.style.setProperty('--x', `${randomX}px`);
            rocket.style.setProperty('--y', `${randomY}px`);
            rocket.style.setProperty('--r', `${randomRotate}deg`);

            document.body.appendChild(rocket);

            setTimeout(() => {
                rocket.remove();
            }, 1200);

            alert(`Remaining ${this.rockets}`);
        } else {
            alert("No shells!");
        }
    },

    reload() {
        if (this.rockets === 5) {
            alert("Already have 5 rockets!");
        } else {
            this.rockets = 5;
            localStorage.setItem('launcher_rockets', this.rockets);
            alert(`Launcher successfuly reload! Remaining ${this.rockets}`);
        }
    },

    changeProfile() {
        let newName = prompt(`Your current name is ${this.userName}. Enter new name:`, this.userName);
        if (newName && newName.trim() !== "") {
            this.userName = newName;
            localStorage.setItem('launcher_name', this.userName);
            alert(`Name changed to: ${this.userName}`);
        }
    }
};

window.addEventListener('DOMContentLoaded', () => {
    const fireBtn = document.getElementById('id-1');
    const reloadBtn = document.getElementById('id-2');
    const exitBtn = document.getElementById('id-3');
    const profileBtn = document.getElementById('id-4');
    const btn5 = document.getElementById('id-5');
    const btn6 = document.getElementById('id-6');

    let isInitialized = false;

    if (localStorage.getItem('launcher_name') && localStorage.getItem('launcher_rockets')) {
        isInitialized = launcher.init();
    }

    function checkInit() {
        if (!isInitialized) {
            isInitialized = launcher.init();
        }
        return isInitialized;
    }

    fireBtn.addEventListener('click', (e) => {
        if (checkInit()) {
            launcher.fire(e);
        }
    });

    reloadBtn.addEventListener('click', () => {
        if (checkInit()) {
            launcher.reload();
        }
    });

    exitBtn.addEventListener('click', () => {
        alert("Goodbye!");
        window.location.href = "https://google.com";
    });

    profileBtn.addEventListener('click', () => {
        if (checkInit()) {
            launcher.changeProfile();
        }
    });

    btn5.addEventListener('click', () => {
        alert("Button 5 is in development!");
    });

    btn6.addEventListener('click', () => {
        alert("Button 6 is in development!");
    });
});