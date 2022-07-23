const input = document.querySelector("input");
const style = document.querySelector("style")

input.addEventListener("blur", (e) => {
   if (input.value.length < 6) {
    // input.classList.add('#invalid')
    e.currentTarget.setAttribute("class", "invalid");
    
   }
   else
   {
    e.currentTarget.setAttribute("class", "valid");
   };
  });