const resetBtn = document.getElementById('reset_stats_btn');

resetBtn.addEventListener('click', function() {
    let confirmReset = prompt('Type "RESET" to clear your statistics:');
    
    if (confirmReset === null) return;
    
    if (confirmReset.trim() === "RESET") {
        alert("Statistics has been reset.");
    } else {
        alert("Action canceled or wrong keyword.");
    }
});