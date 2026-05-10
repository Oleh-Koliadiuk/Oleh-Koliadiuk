const sendNotification = (message, callback) => {
    console.log(`System: sending message..."${message}`);


    const status = "Delivered";
    callback(status);
};

const logToConsole = (status) => {
    console.log(`Log: Message status is ${status}`);
};

const notify = (status) => {
    console.log(`Alert: your bot report is ${status}`);
};


sendNotification("Match found!", lotToConsole);
sendNotification("MMR Updated", notify)



const sendNotification = (message, callback) => {
    console.log(`System: Sending message... "${message}"`);
    
    const status = "Delivered";

    callback(status); 
};

const logToConsole = (status) => {
    console.log(`Log: Message status is ${status}`);
};

// Викликаємо:
sendNotification("Match found!", logToConsole)



const checkGold = (currentGold, callback) => {
    if (currentGold >= 4200) {
        callback("Now you can buy Aghanim!");
    } else {
        callback("Not enough gold");
    }
};

checkGold(4500, (message) => {
    console.log("Dota 2 Alert: " + message)
});









const training = (exercise, count, callback) => {
    console.log(`Doing ${exercise} ${count} times...`);
    status = callback("Done")
};


training("Bench Press", 12, (status) => {
    console.log("Coach says: " + status)
});