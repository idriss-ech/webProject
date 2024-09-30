const displayTime = document.getElementById("timer");
const ctrl = document.getElementById("ctrl");
const msg = document.getElementById("msg");
let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;
function stopWatch() {
  seconds++;
  if (seconds === 59) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 59) {
    minutes = 0;
    hours++;
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  displayTime.textContent = `${h}:${m}:${s}`;
}

function start() {
    message("Play")
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
}

function pause() {
    message('Pause')
  if (timer !== null) {
    if (ctrl.classList.contains("fa-pause")) {
      clearInterval(timer);
      ctrl.classList.remove("fa-pause");
      ctrl.classList.add("fa-play");
    } else {
      start();
      ctrl.classList.remove("fa-play");
      ctrl.classList.add("fa-pause");
    }
  }
}

function restart() {
    message('Restart')
  clearInterval(timer)
  hours = minutes = seconds = 0;
  displayTime.textContent = "00:00:00";
}

function message(text){
    msg.textContent = text; 
    msg.style.display = 'block'
    setTimeout(() => {
        msg.style.display = 'none'
    }, 2000);
}