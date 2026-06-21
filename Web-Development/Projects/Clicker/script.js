const clickerButton = document.getElementById("btn");
const name = document.getElementById("name");
const counter = document.getElementById("counter");
const counting = document.getElementById("count");

let count = 0;

clickerButton.addEventListener("click", () => {
  count++;
  counter.textContent = count;
  console.log("clicked");
});
