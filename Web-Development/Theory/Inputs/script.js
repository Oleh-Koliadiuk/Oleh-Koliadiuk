const button = document.querySelector(".b-1");
const inputField = document.querySelector(".i-1");
const outputDisplay = document.querySelector(".out-1");

inputField.addEventListener("input", function () {
  outputDisplay.textContent = inputField.value;
});
