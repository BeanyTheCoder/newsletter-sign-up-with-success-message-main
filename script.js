let emailInput = document.querySelector("#emailInput");
let emailText = document.querySelector('#emailText')
let form = document.querySelector(".container__main__form");
let emailRegex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;

function validateEmail() {
  let valid = emailRegex.test(emailInput.value);
  return valid;
}

emailInput.addEventListener("input", () => {
  if (validateEmail()) {
    emailInput.classList.remove("invalid");
    emailInput.classList.add("valid");
  } else {
    emailInput.classList.remove("valid");
    emailInput.classList.add("invalid");
  }
});

form.addEventListener('submit', (event) => {
  emailText.textContent = emailInput.value    
  console.log('e')
})

