const endTime = "25 December 2027 03:44 AM";
document.querySelector('.endTime').innerText = endTime;
const inputs = document.querySelectorAll('input');

function clock() {
    const end = new Date(endTime);
    const now = new Date();
    const diff = (end - now) / 1000;
    if (diff <= 0) {
      
        inputs.forEach(input => input.value = 0);
        clearInterval(setIntervalId);
        return;
    }

    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}

clock();
const setIntervalId = setInterval(clock, 1000);


