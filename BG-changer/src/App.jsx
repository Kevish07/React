import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("#000")

  return (
    <>
    <div className="container" style={{backgroundColor: color}}>
      <div className="btn_stack">
        <button className='red' onClick={() => setcolor("red")}>Red</button>
        <button className='green' onClick={() => setcolor("green")}>Green</button>
        <button className='blue' onClick={() => setcolor("blue")}>Blue</button>
        <button className='olive' onClick={() => setcolor("olive")}>Olive</button>
        <button className='gray' onClick={() => setcolor("gray")}>Gray</button>
        <button className='yellow' onClick={() => setcolor("yellow")}>Yellow</button>
        <button className='pink' onClick={() => setcolor("pink")}>Pink</button>
        <button className='purple' onClick={() => setcolor("purple")}>Purple</button>
        <button className='lavender' onClick={() => setcolor("lavender")}>Lavender</button>
        <button className='white' onClick={() => setcolor("white")}>White</button>
        <button className='orange' onClick={() => setcolor("orange")}>Orange</button>
      </div>
    </div>
    </>
  )
}

export default App
