import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css";

const formEl = document.querySelector("form");
const createPromisesBtn = document.querySelector("button");

formEl.addEventListener('submit', onBtnCreatePromises)
console.log(createPromisesBtn);
const formElements = {}

function onBtnCreatePromises(evt) {
  evt.preventDefault();
  const formElements = evt.currentTarget.elements;
  let timer = Number(formElements.delay.value);
  for (let i = 0; i < Number(formElements.amount.value); i += 1 ){
    delayMessage(i+1, timer);
    timer += Number(formElements.step.value);
  }
  formEl.reset()
}


function delayMessage(i, timer) {
  return new Promise( (resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      setTimeout(()=> {resolve({i, timer})} ,timer );
    } else {
      setTimeout(() => { reject({i, timer})}, timer);
    }
  }).then(({ i, timer }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${i} in ${timer}ms`);
  })
  .catch(({ i, timer }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${i} in ${timer}ms`);
  });
 
}
