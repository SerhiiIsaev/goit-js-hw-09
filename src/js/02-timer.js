import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css";

const inputEl = document.querySelector('#datetime-picker');
const startBtnEl = document.querySelector('[data-start]');
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');



let terminalDates = 0;
startBtnEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      terminalDates = selectedDates[0].getTime();

      if (terminalDates <= new Date()) {
        Notiflix.Report.info('The date is not valid', 'Please choose a date in the future', 'Ok');
        // window.alert("Please choose a date in the future")
      } else {
        startBtnEl.disabled = false;
    }
  },
};

flatpickr(inputEl, options);

startBtnEl.addEventListener('click', onTimerStart);


function onTimerStart(e) {
    const intervalId = setInterval(() => {
    const deltaTime = (terminalDates - new Date().getTime())
    const { days, hours, minutes, seconds } = convertMs(deltaTime);
    timerDays.textContent = addLeadingZero(days);
    timerHours.textContent = addLeadingZero(hours);
    timerMinutes.textContent = addLeadingZero(minutes);
    timerSeconds.textContent = addLeadingZero(seconds);
    if ( deltaTime < 1000 ) {
      clearInterval(intervalId);
      }; 
    }, 1000)
};

function addLeadingZero(value) {
  return value.toString().padStart(2, "0");
};

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
