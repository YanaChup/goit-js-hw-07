const controlBoxRef = document.querySelector("div#controls");
const divBoxesRef = document.querySelector("div#boxes");
const randomColorInputRef = document.querySelector("input");
const createBtnRef = document.querySelector("button[data-create]");
const destroyBtnRef = document.querySelector("button[data-destroy]");

createBtnRef.addEventListener("click", onCreateBtnClick);
destroyBtnRef.addEventListener("click", onDestroyBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onCreateBtnClick() {
  let input = Number(randomColorInputRef.value);
  divBoxesRef.innerHTML = "";

  if (input > 0 && input <= 100 && typeof input === "number") {
    for (let i = 0; i < input; i += 1) {
      divBoxesRef.append(document.createElement("div"));
      divBoxesRef.lastChild.style.backgroundColor = getRandomHexColor();
      divBoxesRef.lastChild.style.width = `${30 + i * 10}px`;
      divBoxesRef.lastChild.style.height = `${30 + i * 10}px`;
    }
  } else {
    randomColorInputRef.value = "";
  }
}

function onDestroyBtnClick() {
  divBoxesRef.innerHTML = "";
}

function onCreateBtnClick() {
  let input = Number(randomColorInputRef.value);
  divBoxesRef.innerHTML = "";

  if (input > 0 && input <= 100 && typeof input === "number") {
    const fragment = document.createDocumentFragment(); // Створюємо DocumentFragment

    for (let i = 0; i < input; i += 1) {
      const box = document.createElement("div");
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      fragment.appendChild(box); // Додаємо елемент до DocumentFragment
    }

    divBoxesRef.appendChild(fragment); // Додаємо DocumentFragment до DOM
  } else {
    randomColorInputRef.value = "";
  }
}
