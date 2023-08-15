let emailInput = document.querySelector("#email");
let submitButton = document.querySelector("#submit");
let regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;

function validateEmail() {
  console.log("e");
  let valid = regex.test(emailInput.value);

  return valid;
}

emailInput.addEventListener("input", () => {
  if (validateEmail()) {
    emailInput.classList.add("valid");
  } else {
    emailInput.classList.add("invalid");
  }
});
