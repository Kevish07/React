import { useState } from 'react'
import CurrCard from './components/currCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <div className="box">
        < CurrCard />
        <button className='swap'>Swap</button>
        <div className="position">
           < CurrCard />
        </div>
       
        <button className="convert">
          Convert INR to USD
        </button>
      </div>
    </div>
    </>
  )
}

export default App
