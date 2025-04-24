const hexbtn = document.querySelector('.hexbtn');
const hexColourValue = document.querySelector('.hex-colour-value');
const hexColourContainer = document.querySelector('.hex-colour-container');
const hexCopyBtn = document.querySelector('.hex-copy-color');

hexbtn.addEventListener("click", () => {
  let characterSet = "0123456789ABCDEF";
  let hexColorOutput = "#";
  for (let i = 0; i < 6; i++) {
    hexColorOutput += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  }
  hexColourValue.textContent = hexColorOutput;
  hexColourContainer.style.backgroundColor = hexColorOutput;
  hexbtn.style.color = hexColorOutput;
});

hexCopyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(hexColourValue.textContent)
    .then(() => alert("Hex color copied!"));
});


const rgbbtn = document.querySelector('.rgb-btn');
const getRedInputRange = document.querySelector('#red');
const getGreenInputRange = document.querySelector('#green');
const getBlueInputRange = document.querySelector('#blue');
const rgbColourContainer = document.querySelector('.rgb-colour-container');
const rgbCopyBtn = document.querySelector('.rgb-copy-color');
const rgbColorValue = document.querySelector('.rgb-colour-value');

function updateRGBColor() {
  let red = getRedInputRange.value;
  let green = getGreenInputRange.value;
  let blue = getBlueInputRange.value;
  let rgbColor = `rgb(${red}, ${green}, ${blue})`;
  rgbColorValue.textContent = rgbColor;
  rgbColourContainer.style.backgroundColor = rgbColor;
  rgbbtn.style.color = rgbColor;
}

rgbbtn.addEventListener('click', updateRGBColor);
getRedInputRange.addEventListener('input', updateRGBColor);
getGreenInputRange.addEventListener('input', updateRGBColor);
getBlueInputRange.addEventListener('input', updateRGBColor);

rgbCopyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(rgbColorValue.textContent)
    .then(() => alert("RGB color copied!"));
});