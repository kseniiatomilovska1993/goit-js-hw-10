import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const { delay, state } = event.target.elements;
  const delayValue = Number(delay.value);
  const stateValue = state.value;

  createPromise(delayValue, stateValue)
    .then(delayValue => {
      console.log(`✅ Fulfilled promise in ${delayValue}ms`);
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delayValue}ms`,
        position: 'topRight',
      });
    })
    .catch(delayValue => {
      console.log(`❌ Rejected promise in ${delayValue}ms`);
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delayValue}ms`,
        position: 'topRight',
      });
    });

  event.target.reset();
}

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
