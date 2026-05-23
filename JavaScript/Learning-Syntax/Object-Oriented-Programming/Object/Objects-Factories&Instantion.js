// Functions & Factories
function makeUser(name, age) {
    return { name, age };
}

const createdUser = makeUser("Oleg", 14);
alert(createdUser.name); // Output: Oleg
