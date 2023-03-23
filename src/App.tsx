import { useState } from 'react'
import GameBuaCua from './GameBauCua/GameBuaCua'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GameBuaCua />
    </>
  )
}

export default App
