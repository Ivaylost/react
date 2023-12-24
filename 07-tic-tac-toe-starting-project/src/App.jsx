import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
import Logs from "./components/Logs";


function App() {
  const [activPlayer, setActivPlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([])

  function handleSelectSquare(rowIndex, colIndex) {
    setActivPlayer((curActivPlayer) => curActivPlayer === 'X' ? 'O' : 'X');
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O'
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });

  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activPlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activPlayer === 'O'} />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
        />
      </div>
      <Logs turns={gameTurns} />
    </main>
  )
}

export default App
