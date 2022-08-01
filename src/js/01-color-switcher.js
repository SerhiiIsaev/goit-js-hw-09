const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

startBtnEl.addEventListener('click', onBodyStartColorChange);
stopBtnEl.addEventListener('click', onBodyStopColorChange);

startBtnEl.disabled = false

function onBodyStartColorChange(evt) {
    timerID = setInterval(addBodyColor, 1000);
    startBtnEl.disabled = true;  
};

function onBodyStopColorChange(evt) {
    clearInterval(timerID);
    startBtnEl.disabled = false;
};

function addBodyColor(){
    bodyEl.style.backgroundColor = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


console.log(getRandomHexColor())