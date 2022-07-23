const form = document.querySelector(".login-form")

const formEdit = (e) => {
    e.preventDefault();
    let {
    elements: {email, password}

    } = e.currentTarget;
 if(email.value === "" || password.value === "") {
   return console.log('Please fill in both places :)')

}
console.log(`Email: ${email.value}, Password: ${password.value}`);
  e.currentTarget.reset();
}
form.addEventListener("submit", formEdit);