// const slider = document.querySelector('#font-size-control')
// const text = document.querySelector('#text')

// // text.style.fontSize = `${slider.value}px`

// // slider.addEventListener = ('input', (e) => {
// //     text.style.fontSize = `${slider.value}px`
    
// // })
// const fontSize = () => {
// let sliderValue = `${slider.value}px`;
// text.style.fontSize = sliderValue;

// }

// slider.addEventListener('input', fontSize)

const slider = document.querySelector('#font-size-control')
const text = document.querySelector('#text')


const sliderMove = () => {
let sliderChange = `${slider.value}`
    text.style.fontSize = sliderChange + 'px'


    
}

slider.addEventListener('input', sliderMove)