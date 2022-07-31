const formEl = document.querySelector("form");
const createPromisesBtn = document.querySelector("button");

createPromisesBtn.addEventListener('submit', onBtnCreatePromises)
console.log(createPromisesBtn);
const formElements = {}


function onBtnCreatePromises(evt) {
  evt.preventDefault();
  const formElements = evt.currentTarget.elements
  console.log(evt.currentTarget.elements);
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

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });