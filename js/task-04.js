
// let counterValue = 0;
// const register = document.querySelector('#value');
// register.textContent = `${counterValue}`;
// const buttonDec = document.querySelector(`button[data-action="decrement"]`);
// const buttonInc = document.querySelector(`button[data-action="increment"]`);

//  const subtraction = () => {
//      register.textContent = `${counterValue --}`;
// }; 

// const addition = () => {
//     register.textContent = `${counterValue ++}`;
// };

// buttonDec.addEventListener('click', subtraction);
// buttonInc.addEventListener('click', addition);


const buttonMinus = document.querySelector(`button[data-action="decrement"]`)
const buttonPlus = document.querySelector(`button[data-action="increment"]`)
let counterValue = 0;
let dzialanie = document.querySelector('#value');
dzialanie.textContent = `${counterValue}`
const odejmowanie = () => {
    dzialanie.textContent = `${counterValue --}`
}

const dodawanie = () => {
    dzialanie.textContent = `${counterValue += 1}`


}

buttonMinus.addEventListener('click', odejmowanie);
buttonPlus.addEventListener(`click`, dodawanie);

