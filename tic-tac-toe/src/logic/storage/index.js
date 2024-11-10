export const saveGameStorage = ({board, turn}) => {
    //Guardar la partida
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn',turn)
}

export const restGameStorage = () =>{

    window.localStorage.removeItem('turn')
    window.localStorage.removeItem('board')
}