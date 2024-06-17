import startPage from "./startPage.js";
import createGameField from "./createGameField.js";
import createRightCells from "./createRightCells.js";
import behaviorCells from "./behaviorCells.js";
import clearRightCells from "./clearRightCells.js";

const settings = {
  WRAPPER: document.querySelector(".wrapper"),
  MAIN: document.querySelector(".main"),
  COUNTCELLS: 47,
  REACTIONTIME: 100,
};

const start = async () => {
  await startPage(settings.WRAPPER, settings.MAIN);
  createGameField(settings.WRAPPER, settings.COUNTCELLS);
  behaviorCells(settings.WRAPPER);
  const correctCells = createRightCells(
    settings.WRAPPER,
    settings.COUNTCELLS,
    settings.REACTIONTIME
  );
  clearRightCells(
    settings.WRAPPER.children,
    correctCells,
    settings.REACTIONTIME
  );
};

start();
