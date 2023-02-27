const board = document.querySelector('#board');

const colors = [
  '#E94B3C',
  '#944743',
  '#EC9787',
  '#00A591',
  '#BC70A4',
  '#BFD641',
  '#DC4C46',
  '#672E3B',
];

const SQUARES_QTY = 400;

function setColor(elem) {
  const color = getRandomColor();
  elem.style.backgroundColor = color;
  elem.style.boxShadow = `0 0 2px ${color} 0 0 10px ${color}`;
}

function removeColor(elem) {
  elem.style.backgroundColor = '#1d1d1d';
  elem.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const idx = Math.floor(Math.random() * colors.length);
  return colors[idx];
}

for (let i = 0; i < SQUARES_QTY; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    setColor(square);
  });

  square.addEventListener('mouseleave', () => {
    removeColor(square);
  });

  board.append(square);
}
