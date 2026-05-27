const h1 = document.querySelector('#header h1');
const span = document.querySelector('.mmr-badge');

h1.addEventListener('click', function() {
    const nickname = prompt(`Your name currently: ${h1.textContent}`);
    if (nickname === null) return;
    const cleanName = nickname.trim();

    if (cleanName !== "") {
        h1.textContent = "@" + cleanName;
    } else {
        alert("Name cannot be empty. Try again.");
    }
});

span.addEventListener('click', function() {
    const currentMmrDigits = parseInt(span.textContent); 
    
    const mmr = prompt(`Your MMR currently:`, currentMmrDigits);
    if (mmr === null) return;
    const cleanMmr = mmr.trim();

    let cleanMmrNum = Number(cleanMmr); 

    if (cleanMmr !== "" && !isNaN(cleanMmrNum)) {
        span.textContent = cleanMmr + " mmr";
    } else if (cleanMmr === "") {
        alert("MMR cannot be empty. Try again.");
    } else if (isNaN(cleanMmrNum)) {
        alert("MMR cannot be String. Try again later.");
    }
});