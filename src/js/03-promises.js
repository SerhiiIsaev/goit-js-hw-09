const formEl = document.querySelector("form");
const createPromisesBtn = document.querySelector("button");

formEl.addEventListener('submit', onBtnCreatePromises)
console.log(createPromisesBtn);
const formElements = {}


function onBtnCreatePromises(evt) {
  evt.preventDefault();
  const formElements = evt.currentTarget.elements
  for (let i = 0; i < Number(formElements.amount.value); i += 1 ){
    createPromise(i+1, Number(formElements.step.value))
  }
  console.log(Number(formElements.amount.value));
  formEl.reset()
}

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

function createPromise(position, delay){
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}

// function createPromise(position, delay){
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   } else {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   }
// }

