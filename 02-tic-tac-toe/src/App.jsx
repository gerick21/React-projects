import { useState } from "react";
import confetti from "canvas-confetti";
import {Square} from "./components/Square";
import {TURNS } from "./constants";

import { checkWinnerFrom,checkEndGame } from "./logic/board.js";

import { WinnerModal } from "./components/WinnerModal";
import { Board } from "./components/Board.jsx";







function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);

  //if the state is null, there is no winner, otherwise, the state is the winner.
  const [winner, setWinner] = useState(null);



  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

 

  const updateBoard = (index) => {
    //dont update if the square is already filled
    if (board[index] || winner) {
      return;
    }

    //Update the board:

    // This code literally copies the array, creating a new reference
    // This avoids mutating the state, which is a bad practice
    // Mutating the state directly may cause React to not detect the changes.
    const newBoard = [...board];

    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti()
      //the state updates is async, and that is really
      //important to understand in react.

      setWinner(newWinner);

      
    }else if(checkEndGame(newBoard)){
      setWinner(false); //if there is no winner, it's a draw.
    }
  };

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset</button>
      
      <Board board={board} updateBoard={updateBoard} />

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

     <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  );
}

export default App;
