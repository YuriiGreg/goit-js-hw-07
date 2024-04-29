function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

  const input = document.querySelector('input');
  const createBtn = document.querySelector('[data-create]');
  const destroyBtn = document.querySelector('[data-destroy]');
  const boxesDiv = document.querySelector('#boxes');


function createBoxes(amount) {
   
  destroyBoxes();

  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  boxesDiv.append(...boxes);
}

  function destroyBoxes() {
    boxesDiv.innerHTML = '';
  }

  createBtn.addEventListener('click', () => {
    const amount = parseInt(input.value);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = '';
    }
  });

  destroyBtn.addEventListener('click', () => {
    destroyBoxes();
  });

const createButtons = document.getElementById('controls');

