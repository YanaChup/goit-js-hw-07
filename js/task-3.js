const userNameEl = document.querySelector("input#name-input");
const outputEl = document.querySelector("span#name-output");

userNameEl.addEventListener("input", onUserNameInput);

function onUserNameInput(e) {
  const userName = userNameEl.value.trim() || "Anonymous";

  outputEl.textContent = `${userName}`;
}
