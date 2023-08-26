let emailInput = document.querySelector("#emailInput");
let emailInputValue;
let formSubmit = document.querySelector('#formSubmit')

let form = document.querySelector(".container__main__form");
let emailRegex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;

function validateEmail() {
  let valid = emailRegex.test(emailInput.value);
  if (valid) {
    form.classList.remove("invalid");
    form.classList.add("valid");
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
  }
  return valid;
}

emailInput.addEventListener('input', () => {
  validateEmail()
})

formSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  if (validateEmail()) {
    emailInputValue = emailInput.value;
    form.submit();
  }
});

export { emailInputValue };
