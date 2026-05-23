// Operations & Property Checks
alert(keywordObj.for + keywordObj.let + keywordObj.return); // Output: 6

alert(numericKeyObj[0]);   // Output: Test
alert(numericKeyObj["0"]); // Output: Test

let emptyUser = {};
alert(emptyUser.noSuchProperty === undefined); // Output: true

// Type Comparison
let numericZero = 0;
let stringZero = String(numericZero); // "0"

console.log(typeof numericZero); // Output: "number"
console.log(typeof stringZero);  // Output: "string"
console.log(numericZero === stringZero); // Output: false
