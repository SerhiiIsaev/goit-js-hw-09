import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputEl = document.querySelector('#datetime-picker');
const startBtnEl = document.querySelector('[data-start]');
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');



let terminalDates = 0
startBtnEl.disabled = true



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      terminalDates = selectedDates[0].getTime();

      if (terminalDates <= new Date()) {
        window.alert("Please choose a date in the future")
      } else {
          startBtnEl.disabled = false
    }
      console.log(terminalDates)
  },
};

flatpickr(inputEl, options);

startBtnEl.addEventListener('click', onTimerStart )


function onTimerStart(e) {
   
    const intervalId = setInterval(() => {
      
    const deltaTime = (terminalDates - new Date().getTime())
    const { days, hours, minutes, seconds } = convertMs(deltaTime);
    timerDays.textContent = days;
    timerHours.textContent = hours;
    timerMinutes.textContent = minutes;
    timerSeconds.textContent = seconds;
    console.log(terminalDates, new Date().getTime());
    }, 1000)
    if ( terminalDates <= new Date().getTime()) {
        clearInterval(intervalId)
    } 

}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
