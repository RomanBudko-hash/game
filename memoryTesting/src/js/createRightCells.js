const createRightCells = (wrapper, countCells, time) => {
  const randomDigitsList = new Set();

  do {
    let randomValue = Math.round(Math.random() * countCells);
    randomDigitsList.add(randomValue);
  } while (randomDigitsList.size < 10);

  let index = 0;

  const coloringRandomCells = setInterval(() => {
    if (index >= randomDigitsList.size) {
      clearInterval(coloringRandomCells);
      return;
    }
    const temp = Array.from(randomDigitsList);
    wrapper.children[temp[index]].classList.add("computed-cells");
    index++;
  }, time);
  return [...randomDigitsList];
};

export default createRightCells;
