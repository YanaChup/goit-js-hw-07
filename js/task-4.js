const formRef = document.querySelector(".login-form");
formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const emailInput = formRef.elements.email.value.trim();
  const passwordInput = formRef.elements.password.value.trim();

  if (emailInput === "" || passwordInput === "") {
    return alert("All form fields must be filled in correctly");
  }

  formRef.reset();

  console.log(`email: ${emailInput}`);
  console.log(`password: ${passwordInput}`);
}
