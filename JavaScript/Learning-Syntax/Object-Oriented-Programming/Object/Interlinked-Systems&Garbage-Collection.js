// Mark-and-Sweep
// Interconnected objects 
function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marry({
    name: "Ivan"
}, {
    name: "Anna"
});

delete family.father;
delete family.mother.husband
