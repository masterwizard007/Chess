import { useState, useEffect } from 'react'
import board from './assets/board.png'
import './App.css'
import RenderPiece from './RenderPiece'
import axios from 'axios'


function App() {
  const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2Nsb3VkLmdvb2dsZS5jb20vd29ya3N0YXRpb25zIiwiYXVkIjoiZmlyZWJhc2UtY2hlc3N3aXRobW9uZ28tMTc0NzY0ODk5ODE2NC5jbHVzdGVyLW9tYnR4djI1dGJkNnlyanBwM2x1a3A2emhjLmNsb3Vkd29ya3N0YXRpb25zLmRldiIsImlhdCI6MTc0NzY1NTQ3MywiZXhwIjoxNzQ3NzQxODczfQ.f20nASL8YUKsp4HNNV0a9YYpWzH76YcvJ-3cky1AyytUx0nTF5EZK_CtIwoixoijeL3t_vhUzuy4qAu3XNVxz2geSas8DT7b84HSShpRNJkrfvlrGzor5COTi00Z-5zAtwB3Vu5sWDu4EwSkJT4dcJFV6ECfQFa6noNOXrPIAvvMK3qwvNKzAIkXN6KYhKbg1cSXMYMAw9dHm1mKgTjkmAyP3IZdowowulO1f9rOtKBQNkVjjDGYHd6OawCL7kuJX0PlPM3gRZPjWh0A1HE5jxS4sEEccyw4ggpQdAxUbVybrx_PpSPkkOn_4cw4PR2gZAY0dfWdeFRqwSPTlJCQRg';
  
  const newGameState = {
    black: ['a7','b7','c7','d7','e7','f7','g7','h7','Ra8','Rh8', 'Nb8', 'Ng8', 'Bc8', 'Bf8', 'Qe8', 'Kd8'], 
    white: ['a2','b2','c2','d2','e2','f2','g2','h2','Ra1','Rh1', 'Nb1', 'Ng1','Bc1', 'Bf1', 'Qe1', 'Kd1']};

  const [player, setPlayer] = useState('white')
  const [gameState, setGameState] = useState(newGameState)
  const [selection, setSelection] = useState(null)

  useEffect(() => {
    axios.get('https://localhost:3000/', {
      headers: {
        Authorization: `Bearer ${token}`  
      }
    })
    .then(res => {
      console.log(res)
    })
  }, [])

  useEffect(() =>{
    axios.post('https://localhost:3000/selection',{selection: selection} ,{
      headers: {
        Authorization: `Bearer ${token}`  
      }
    })
    .then(res => {
      console.log(res)
    })
  }, [selection])

  return (
    <>
      <div className='game-container'>
        <img src={board} className="board" alt="Chess_Board" />
        {gameState[(player === 'white' ? 'black' : 'white')].map((piece, index) => <RenderPiece type={(player === 'white' ? 'black' : 'white')} piece={piece} key={index} player={player}/>)}
        {gameState[player].map((piece, index) => (<RenderPiece type={player} piece={piece} key={index} player={player} selection={selection} setSelection={setSelection}/>))}

      </div>
    </>
  )
}

export default App
