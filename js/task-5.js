function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.querySelector("body");
const buttonRef = document.querySelector("button.change-color");
const spanRef = document.querySelector("span.color");

buttonRef.addEventListener("click", onBtnChangeColorClick);

function onBtnChangeColorClick() {
  const color = getRandomHexColor();

  bodyRef.style.backgroundColor = color;
  spanRef.textContent = color;
}
