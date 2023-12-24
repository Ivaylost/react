import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
import Logs from "./components/Logs";


function App() {
  const [activPlayer, setActivPlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([])

  function handleSelectSquare(){
    setActivPlayer((curActivPlayer) => curActivPlayer === 'X' ? 'O' : 'X')
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activPlayer === 'X'}/>
          <Player initialName="Player 2" symbol="O" isActive={activPlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activPlayerSymbol={activPlayer}/>
      </div>
      <Logs />
    </main>
  )
}

export default App
