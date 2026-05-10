// Function to calculate gaming efficiency
function calculateEfficiency(score, hoursPlayed) {
    // Rounding to 2 decimal places
    const efficiency = (score / hoursPlayed).toFixed(2);
    return `efficiency: ${efficiency} points per hour`;
}

// Arrow function to check age for local lyceum status
const getStudentStatus = (age) => {
    return age < 15 ? "is a junior student" : "is a senior student";
};

console.log(calculateEfficiency(1600, 1200)); 
console.log(getStudentStatus(14));
