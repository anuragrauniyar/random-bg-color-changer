const body = document.querySelector("body");
const bgRGBCodeSpanElement = document.querySelector("#bg-RGB-code");
const colourElements=document.querySelectorAll('.colour');

function generateColors() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
    const textColor = r >= 150 || g >= 150 || b >= 150 ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)";
    colourElements.forEach(element => {
      element.style.color = textColor;
    });
  return `rgb(${r},${g},${b})`;
}

function changeBackgroundColor() {
  const color = generateColors();
  bgRGBCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}

const btn = document.querySelector("#btn");
btn.addEventListener('click',changeBackgroundColor);
