import { useState } from 'react'
import confetti from "canvas-confetti"
import { Square } from './components/Square.jsx'
import { TURNS } from './constant.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx' 
import {saveGameStorage, restGameStorage} from './logic/storage/index.js'
import './App.css'

function App() {
  const [board, setBoard] =useState(()=>{
    const boardFromStorage = window.localStorage.getItem('board')
    if(boardFromStorage) return JSON.parse(boardFromStorage)
     return Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() =>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  
  const [winner, setWinner] = useState(null)

  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    restGameStorage()
  }

  const updateBoard = (index) =>{
      if(board[index] || winner)return

      const newBoard = [... board]
      newBoard[index] = turn
      setBoard(newBoard)
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
      
      setTurn(newTurn)
      //Guardar partida
      saveGameStorage({
        board: newBoard,
        turn: newTurn
      })

      const newWinner = checkWinnerFrom(newBoard) 
      if(newWinner){
        confetti()
        setWinner(newWinner)
      }else if(checkEndGame(newBoard)){
        setWinner(false)
      }
  }

  return (
  <main className='board'>
    <h1>Tic Tac Toe</h1>
    <button onClick={resetGame}>Reset del game</button>
    <section className='game'>
      {
        board.map((_,index) => {
          return(
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
          )
        }) 
      }
    </section>
    <section className='turn'>
      <Square isSelected={turn ===TURNS.X}>
        {TURNS.X}
        </Square>
      <Square isSelected={turn ===TURNS.O}>
        {TURNS.O}
        </Square>
    </section>
    <WinnerModal winner={winner} resetGame={resetGame}/>
  </main>
)
}
export default App
