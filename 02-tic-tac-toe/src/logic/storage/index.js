export const saveGameToStorage = (board, turn) => {
  window.localStorage.setItem("board", board);
  window.localStorage.setItem("turn", turn);
};

export const resetGameFromStorage = () => {
  window.localStorage.removeItem("board");
  window.localStorage.removeItem("turn");
};
