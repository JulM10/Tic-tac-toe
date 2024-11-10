import {winner_Combos} from '../constant.js'

export const checkWinnerFrom = (boardToCheck) =>{
    for(const combo of winner_Combos){
      const [a, b, c] = combo
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
    return null
  }

  export const checkEndGame = (newBoard) => {
    return newBoard.every((Square) => Square != null)
  }