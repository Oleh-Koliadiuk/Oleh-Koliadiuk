const launcher = {
    rockets: 5,
    
    fire() {
        if (this.rockets > 0) {
            alert(`Remaining ${this.rockets -= 1}`);
        } else {
            alert("No shells!");
        };
        return this;
    },
    reload() {
        if (this.rockets === 5) {
            alert("Already have 5 rockets!");
        } else {
            this.rockets = 5;
            alert(`Launcher succesfuly reload! Remaining ${this.rockets} `);
        };
        return this;
    },
    sayHi() {
        alert("Hello!");
    }
};

launcher.sayHi();
launcher.fire().fire().reload();

