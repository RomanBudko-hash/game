const clearRightCells = (wrapper, correctCells) => {
  for (let i = 0; i < correctCells.length; i++) {
    wrapper[correctCells[i]].classList.remove("computed-cells");
    // console.log(wrapper[correctCells[i]]);
  }
};
export default clearRightCells;
