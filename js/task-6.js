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
  let input = Number(randomColorInputEl.value);
  divBoxesEl.innerHTML = "";

  if (input > 0 && input <= 100 && typeof input === "number") {
    for (let i = 0; i < input; i += 1) {
      divBoxesEl.append(document.createElement("div"));
      divBoxesEl.lastChild.style.backgroundColor = getRandomHexColor();
      divBoxesEl.lastChild.style.width = `${30 + i * 10}px`;
      divBoxesEl.lastChild.style.height = `${30 + i * 10}px`;
    }
  } else {
    randomColorInputEl.value = "";
  }
}

function onDestroyBtnClick() {
  divBoxesEl.innerHTML = "";
}
