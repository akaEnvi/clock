//Uhr  zweistellig anzeigen lassen

//------------Digitale Uhr...............

const sec = document.querySelector(".sec");
const min = document.querySelector(".min");
const h = document.querySelector(".h");

function logTime() {
  console.log(new Date());
  const now = new Date();
  const hours = toDecimal(now.getHours());
  const minutes = toDecimal(now.getMinutes());
  const second = toDecimal(now.getSeconds());

  h.innerText = hours;
  min.innerText = ":" + minutes;
  sec.innerText = ":" + second;
}

function toDecimal(n) {
  if (n < 10) {
    return "0" + n;
  } else {
    return n;
  }
}

//------------Analoge Uhr...............

const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// Log current date and time every 1000 ms (= 1 second)
setInterval(logTime, 1000);
setInterval(setDate, 1000);
setDate();
