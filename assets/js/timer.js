let timerDuration = 30;
const secText = " sec"
const timerSec = document.querySelector('.timer_sec');

// function onTimerComplete() {
// }

function updateTimer() {
    timerDuration--;
    timerSec.textContent = timerDuration + secText;

    if (timerDuration < 10) {
        timerSec.style.color = "red";
        timerSec.textContent = "0" + timerDuration + secText;
    }

    if (timerDuration === 1) {
        clearInterval(timer);

        setTimeout(function () {
            document.location.href = "temps_ecoule.html";
        }, 1000);

        // onTimerComplete();
    }
}

const timer = setInterval(updateTimer, 1000);
