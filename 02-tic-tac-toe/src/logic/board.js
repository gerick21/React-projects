import { WINNER_COMBOS } from "../constants.js";

export const checkWinnerFrom = (boardToCheck) => {
  //check all the possible winning combinations.
  //if any of the winning combinations are true, return the winner.
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      //this will return the winner, x or o.
      return boardToCheck[a]; 
    }
  }
  //if there is no winner, return null.
  return null;
};

export const checkEndGame = (newBoard) => {
  //if all the squares are filled, that means the game is over.
  return newBoard.every((square) => square);
};
