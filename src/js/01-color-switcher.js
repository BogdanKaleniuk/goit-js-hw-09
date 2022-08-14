// const startBtn = document.querySelector('[data-start]');
// const stopBtn = document.querySelector('[data-stop]');
// const body = document.querySelector('body');

let timerId = null;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const refs = {
//   true: startBtn.disabled = true,
//   false: stopBtn.disabled = false,
// };

function onStartBtnClick() {
  timerId = setInterval(() => {
    let color = getRandomHexColor();
    document.body.style.backgroundColor = color;
    // color.textContent = document.body.style.backgroundColor;
    console.log(color)
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;

  // refs.true,
  // refs.false,

}

function onStopBtnClick() {
  clearInterval(timerId);
  stopBtn.disabled = false;
  startBtn.disabled = true;

  // refs.false,
  // refs.true;

  console.log('Стоп');
}

document.querySelector('[data-start]').addEventListener('click', onStartBtnClick);
document.querySelector('[data-stop]').addEventListener('click', onStopBtnClick);