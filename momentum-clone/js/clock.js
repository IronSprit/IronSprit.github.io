const clock = document.getElementById("clock");
const day = document.querySelector(".chat__timestamp span");
//clock.innerText = "testClock";

function sayHello() {
  console.log("hello");
}

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;

  if (day !== null) day.innerText = `${date.toDateString()}`;
}

setInterval(getClock, 1000);
