import { useState } from 'react'
import board from './assets/board.png'
import './App.css'
import PieceRen from './PieceRen'
import RenderPiece from './RenderPiece'




function App() {
  
  const newGameState = {
    black: ['a7','b7','c7','d7','e7','f7','g7','h7','Ra8','Rh8', 'Nb8', 'Ng8', 'Bc8', 'Bf8', 'Qe8', 'Kd8'], 
    white: ['a2','b2','c2','d2','e2','f2','g2','h2','Ra1','Rh1', 'Nb1', 'Ng1','Bc1', 'Bf1', 'Qe1', 'Kd1']};

  const [player, setPlayer] = useState('white')
  const [gameState, setGameState] = useState(newGameState)
  const [selection, setSelection] = useState(null)


  return (
    <>
      <div className='game-container'>
        <img src={board} className="board" alt="Chess_Board" />
        {gameState[(player === 'white' ? 'black' : 'white')].map((piece, index) => <RenderPiece type={'black'} piece={piece} key={index} player={player}/>)}
        {gameState[player].map((piece, index) => <RenderPiece type={'white'} piece={piece} key={index} player={player}/>)}

      </div>
    </>
  )
}

export default App
