let emailInput = document.querySelector("#emailInput");
let emailInputValue;

let form = document.querySelector(".container__main__form");
let emailRegex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;

function validateEmail() {
  let valid = emailRegex.test(emailInput.value);
  return valid;
}

emailInput.addEventListener("input", () => {
  if (validateEmail()) {
    form.classList.remove("invalid");
    form.classList.add("valid");
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (validateEmail()) {
    emailInputValue = emailInput.value;
    form.submit();
  }
});

export { emailInputValue };

