const change_status_btn = document.getElementById('change_status_btn');
const status = document.querySelector('.status');

const profile = document.getElementById('Profile');
const stats = document.getElementById('Stats');
const settings = document.getElementById('Settings')

change_status_btn.addEventListener('click', function(){ 
    let new_status = prompt('Enter New Status', `${change_status_btn.textContent}`);

    if (new_status === null) {
        return;
    } 

    if (new_status.trim() === "") {
        alert("Status cannot be empty. Try again.");
        return;
    }

    status.textContent = `Status: ${new_status}`;
});

profile.addEventListener('click', function() {
    return;
})