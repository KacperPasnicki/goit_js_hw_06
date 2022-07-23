let button = document.querySelector('.change-color')
let body = document.querySelector('body')
const span = document.querySelector("span.color")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const colorChanger = () => {
body.style.backgroundColor =  `${getRandomHexColor()}`
span.textContent = `${getRandomHexColor()}`;

}
button.addEventListener('click', colorChanger)