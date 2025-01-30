import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0);

  const addvalue = () => {
    if (count === 10) {
      return alert('Sorry not possible, MOVE TO LOW...');
    }
    setCount(count + 1);
  }
  const subvalue = () => {
    if (count === 0) {
      return alert('Sorry not possible, MOVE TO HIGH...');
    }
    setCount(count - 1);
  }
  return (
    <>
    <div className="container">
    <h1>Hello jii : "{count}"</h1>
    <img src="https://picsum.photos/1900/400" alt="" />
    <div className="icons">
      <button id='increment' onClick={addvalue}>Click to move <span className='red'>HIGH</span></button>
      <button id='decrement' onClick={subvalue}>Click to move <span className='green'>LOW</span></button>
    </div>
    </div>
    </>
  )
}

export default App
