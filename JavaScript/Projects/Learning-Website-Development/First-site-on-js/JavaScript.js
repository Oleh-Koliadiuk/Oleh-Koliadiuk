let UserName = prompt("Enter your name.", "#####");

if (UserName === null || UserName === "") {
    
    alert("alert: Directing you to the main page...");
    window.location.href = "https://www.google.com";
} 

else {
    if (UserName === "Oleg") {
        let UserPassword = prompt(`Hi ${UserName}! Enter your password.`, "#####");

        if (UserPassword === "12345") {
            alert("alert: Success.");
        } else {
            alert(`alert: Wrong password for ${UserName}.`);

            alert("alert: Directing you to the main page...");
            window.location.href = "https://www.google.com";
        }
    }     
    else {
        let GuestPassword = prompt(`Hi ${UserName}! Enter your password`, "#####");

        if (GuestPassword === "12345") {
            alert(`alert: Succes.`);
        } else {
            alert(`alert: Wrong password for ${UserName}.`);

            alert("alert: Directing you to the main page...");
            window.location.href = "https://www.google.com";
        }
    }
};