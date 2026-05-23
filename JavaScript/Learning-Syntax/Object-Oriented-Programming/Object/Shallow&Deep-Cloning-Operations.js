// Object.assign Loops & Extensions
let initialUser = {
    name: "Alex",
    age: 30,
};

let standardClone = {};
for (let key in initialUser) {
    standardClone[key] = initialUser[key];
}
standardClone.name = "Masha";
alert(initialUser.name); // Alex

let permissionUser = { name: "Alex" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
Object.assign(permissionUser, permissions1, permissions2);

alert(permissionUser.name); // Alex
alert(permissionUser.canView); // true
alert(permissionUser.canEdit); // true

let rewriteUser = { name: "Alex" };
Object.assign(rewriteUser, { name: "Petro" });
alert(rewriteUser.name); // now user = { name: "Petro"}

let assignCloneUser = {
    name: "Alex",
    age: 30
};
let assignedClone = Object.assign({}, assignCloneUser);
alert(assignedClone.name); // Alex
alert(assignedClone.age); // 30
assignCloneUser.city = "Kyiv";

// Deep Cloning
let nestedUser = {
    name: "Oleg",
    age: 22,
    sizes: {
        height: 182,
        width: 50
    }
};

let shallowClone = Object.assign({}, nestedUser);
alert(nestedUser.sizes === shallowClone.sizes); // user && clone

nestedUser.sizes.width = 60;
alert(shallowClone.sizes.width); // 60

let deepClone = structuredClone(nestedUser);
alert(nestedUser.sizes === deepClone.sizes); // false

nestedUser.sizes.width = 60;
alert(deepClone.sizes.width); // 50
