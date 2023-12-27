import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import {useState} from "react"
import Logs from "./components/Logs";
import {WINNING_COMBINATIONS} from "./assets/winning-combinations.js";

function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X';

    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O'
    }
    return currentPlayer;
}

function App() {
    // const [activePlayer, setActivePlayer] = useState('X');
    const [gameTurns, setGameTurns] = useState([])
    const currentPlayer = deriveActivePlayer(gameTurns);

    function handleSelectSquare(rowIndex, colIndex) {
        // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
        setGameTurns((prevTurns) => {
            const updatedTurns = [
                {square: {row: rowIndex, col: colIndex}, player: currentPlayer},
                ...prevTurns,
            ];
            return updatedTurns;
        });

    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName="Player 1" symbol="X" isActive={currentPlayer === 'X'}/>
                    <Player initialName="Player 2" symbol="O" isActive={currentPlayer === 'O'}/>
                </ol>
                <GameBoard
                    onSelectSquare={handleSelectSquare}
                    turns={gameTurns}
                />
            </div>
            <Logs turns={gameTurns}/>
        </main>
    )
}

export default App
