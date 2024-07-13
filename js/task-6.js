const controlBoxEl = document.querySelector("div#controls");
const divBoxesEl = document.querySelector("div#boxes");
const randomColorInputEl = document.querySelector("input");
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");

createBtnEl.addEventListener("click", onCreateBtnClick);
destroyBtnEl.addEventListener("click", onDestroyBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onCreateBtnClick() {
  const input = Number(randomColorInputEl.value);

  if (input >= 1 && input <= 100) {
    createBoxes(input);
    randomColorInputEl.value = "";
  }
}

function onDestroyBtnClick() {
  destroyBoxes();
}

function createBoxes(amount) {
  destroyBoxes();

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = `${30 + i * 10}px`;
    newDiv.style.height = `${30 + i * 10}px`;
    fragment.appendChild(newDiv);
  }

  divBoxesEl.appendChild(fragment);
}

function destroyBoxes() {
  divBoxesEl.innerHTML = "";
}
