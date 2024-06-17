const startPage = (wrapper, main) => {
  const props = {
    count: 4,
    setNumberContent() {
      return `The game will start in ${this.count} second${
        this.count > 1 ? "s" : ""
      }`;
    },
  };

  Object.assign(main, props);

  return new Promise((resolve) => {
    const countUntilStartGame = setInterval(() => {
      if (main.count >= 1) {
        main.textContent = main.setNumberContent();
      } else {
        clearInterval(countUntilStartGame);
        main.remove();
        wrapper.classList.remove("wrapper");
        wrapper.classList.add("wrapper_active");
        resolve();
      }
      main.count--;
    }, 1000);
  });
};

export default startPage;
