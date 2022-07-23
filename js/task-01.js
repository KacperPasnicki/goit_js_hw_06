// const allCategories = document.getElementsByClassName("item")
// console.log(`Number of categories:`, allCategories.length)
// let categories = document.querySelectorAll("#categories > li").forEach (element => {
//     console.log(`Category: ${element.firstElementChild.textContent} 
//     Elements: ${element.lastElementChild.children.length}`)
// });

// const heading = document.querySelector("h1")
// console.log(heading)
// const paragrapghs = document.querySelectorAll("p")
// console.log(paragrapghs)
// const divik = document.querySelectorAll(".test")
// console.log(divik)
// const tescik = divik.querySelectorAll("#test")
// console.log(tescik)

// const liList = document.createElement('li')
// liList.textContent = 'siemano'

// const div1 = document.querySelector(".div1")
// const p = document.createElement("p")
// div1.appendChild(p)

// const name = (params) => {
    
// }
// const name = (params) => {
    
// }

const liList = document.getElementsByClassName("item")
console.log(`liczba kategorii: ${liList.length}`)

let category = document.querySelectorAll("#categories > li").forEach  (params => {
    console.log(`Category: ${params.firstElementChild.textContent}
    elements: ${params.lastElementChild.children.length}`)
})