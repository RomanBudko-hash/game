const createGameField = function (wrapper, countCells) {
  for (let i = 0; i <= countCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    wrapper.appendChild(cell);
  }
};

export default createGameField;
