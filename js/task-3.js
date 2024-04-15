const textInput = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");

textInput.addEventListener("input", updateNameOutput);

function updateNameOutput() {
  const text = textInput.value.trim();

  text === ""
    ? (output.textContent = "Anonymous")
    : (output.textContent = text);
}
