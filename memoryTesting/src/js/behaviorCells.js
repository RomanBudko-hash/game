const behaviorCells = (wrapper) => {
  [...wrapper.children].map((item) => {
    item.addEventListener("click", () => {
      item.classList.add("cell-active");
    });
  });
};

export default behaviorCells;
