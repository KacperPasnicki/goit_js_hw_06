 const ingredients = [
   'Potatoes',
   'Mushrooms',
   'Garlic',
  'Tomatos',
   'Herbs',
   'Condiments',
 ];
const ulList = document.querySelector("#ingredients")
const newList = ingredients.map((e) => {
  const items = document.createElement("li")
   items.textContent = e
   items.classList.add("item")
  return items

})
ulList.append(...newList)
console.log(newList)
console.log(ingredients)