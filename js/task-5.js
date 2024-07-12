function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const buttonEl = document.querySelector("button.change-color");
const spanEl = document.querySelector("span.color");

buttonEl.addEventListener("click", onBtnChangeColorClick);

function onBtnChangeColorClick() {
  const color = getRandomHexColor();

  bodyEl.style.backgroundColor = color;
  spanEl.textContent = color;
}
