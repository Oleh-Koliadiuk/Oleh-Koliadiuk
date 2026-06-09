function trunc() {
  const welcome = "Hello!";
  alert(welcome);

  const userInput = prompt("Enter a random number", "");
  switch (userInput) {
    case null:
    case "":
    case "0":
      alert("Incorrect number!");
      window.location.href = "https://www.google.com";
      break;

    default:
      const userInputMath = Math.trunc(Number(userInput));

      if (isNaN(userInputMath)) {
        alert("it's not a number!");
      } else {
        alert(userInputMath);
      }
      break;
  }
}
