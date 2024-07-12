const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const email = formEl.elements.email.value.trim();
  const password = formEl.elements.password.value.trim();

  if (email === "" || password === "") {
    return alert("All form fields must be filled in correctly");
  }

  formEl.reset();

  console.log(`email: ${email}`);
  console.log(`password: ${password}`);
}
