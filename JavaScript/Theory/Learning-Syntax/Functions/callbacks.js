// Telegram Bot Notification System (Callbacks with Named Functions)
const sendNotification = (message, callback) => {
  console.log(`System: Sending message... "${message}"`);
  const status = "Delivered";
  callback(status);
};

const logToConsole = (status) => {
  console.log(`Log: Message status is ${status}`);
};

const notify = (status) => {
  console.log(`Alert: Your bot report is ${status}`);
};

sendNotification("Match found!", logToConsole);
sendNotification("MMR Updated", notify);

// Dota 2 Gold Tracker (Callbacks with Anonymous Arrow Functions)
const checkGold = (currentGold, callback) => {
  if (currentGold >= 4200) {
    callback("Now you can buy Aghanim's Scepter!");
  } else {
    callback("Not enough gold!");
  }
};

checkGold(4500, (message) => {
  console.log("Dota 2 Alert: " + message);
});

// Gym Workout Tracker
const training = (exercise, count, callback) => {
  console.log(`Doing ${exercise} ${count} times...`);
  callback("Done");
};

training("Bench Press", 12, (status) => {
  console.log("Coach says: " + status);
});

// Confirmation Dialogs (Named vs Anonymous Callbacks)
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("You agreed");
}

function showCancel() {
  alert("You canceled");
}

ask("Do you agree?", showOk, showCancel);

ask(
  "Do you agree again?",
  function () {
    alert("You agreed.");
  },
  function () {
    alert("You canceled.");
  }
);

// Function Formats (Declaration, Expression, and Arrow Basics)
function sum(a, b) {
  return a + b;
}

const sumExpression = function (a, b) {
  return a + b;
};

function showAlert(name) {
  alert(`Hi, ${name}!`);
}
