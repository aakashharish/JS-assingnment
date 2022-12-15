const timer = document.querySelector(".time");
const startButton = document.getElementById("start");
const stopBotton = document.getElementById("stop");
const resetBotton = document.getElementById("reset");

var seconds = 0;
var interval = null;

startButton.addEventListener("click", start);
stopBotton.addEventListener("click", stop);
resetBotton.addEventListener("click", reset);

function count() {
  seconds++;

  var hrs = Math.floor(seconds / 3600);
  var mins = Math.floor((seconds - hrs * 3600) / 60);
  var secs = seconds % 60;

  if (seconds < 10) seconds = "0" + secs;
  if (mins < 10) mins = "0" + mins;
  if (hrs < 10) hrs = "0" + hrs;

  timer.innerHTML = hrs + ":" + mins + ":" + secs;
}

function start() {
  if (interval) return;
  interval = setInterval(count, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  stop();
  seconds = 0;
  timer.innerHTML = "00:00:00";
}
