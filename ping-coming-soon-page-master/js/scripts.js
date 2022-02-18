const form = document.getElementById("form");
const email = document.getElementById("email");
form.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("button")) {
    validationEmail(email);
  }
});

const validationEmail = (email) => {
  const errorMessage = document.getElementById("error");
  const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (!regex.test(email.value)) {
    errorMessage.classList.add("error--visible");
    email.classList.add("form__input--error");
  } else {
    errorMessage.classList.remove("error--visible");
    email.classList.remove("form__input--error");
  }
};
