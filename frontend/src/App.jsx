import { useState, useEffect } from 'react'
import board from './assets/board.png'
import './App.css'
import RenderPiece from './RenderPiece'
import axios from 'axios'


function App() {
  const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2Nsb3VkLmdvb2dsZS5jb20vd29ya3N0YXRpb25zIiwiYXVkIjoiaWR4LWNoZXNzLTE3NDY0MzUwNjc0ODQuY2x1c3Rlci02ZnJuaWk0M281YmxjdTUyMnNpdmVienBpaS5jbG91ZHdvcmtzdGF0aW9ucy5kZXYiLCJpYXQiOjE3NDY2ODM2NzksImV4cCI6MTc0Njc3MDA3OX0.Xy5lSpPAIah5QHT2jlAX4IXBb2In7gyAK1ray80x71zM8IfmbA41g5GjRKAkePhcpvhV2LWaxcrENj4Oot42bRILmYsK8uqKDZQ6oAnAVZsoKcuZnYwVmkhnq6DEtrbZsknuaNgmTwJruNSXI7a5BkYTaqkQs4gvfy5ybCN6PFOwxpJccHw-enHDVIGUu0bkJD_Rg7FevLd6AesljIgkkh7KSpulAGhlDDHzjuNoBx8P7OdC2PhtDo_Y_AKWirCPQQw-1h1PSPBN8Q4d7LQXS3g9LmcUG51KeKOxZM6wbwRRQa_BpSWgCwHKmRdyVHmdle0QiaCh8hTUQU6PqRbP0w';
  
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
    axios.post('https://localhost:3000/', {
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
