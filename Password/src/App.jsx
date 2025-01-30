import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [characters, setCharacters] = useState(false)

  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const generatePassword = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let sym = "!@#$%^&*()_+";
    if (numbers) str += num
    if (characters) str += sym

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1))
    }
    setPassword(pass)

  }, [length, numbers, characters, setPassword])


  const copyPass = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    generatePassword()
  }, [length, numbers, characters, generatePassword])

  return (
   <>
   <div className="container">

    <div className="pass_box">
      <div className="obtain_pass">
        <input
        type="text" 
        value={password}
        placeholder="Password"
        className="pass_input"
        readOnly
        ref={passwordRef}
        />
        <button className='copy_btn' onClick={copyPass}>
          Copy
        </button>
      </div>

      <div className="pass_edit">
        <div>
        <input 
        type='range'
        min={4}
        max={20}
        value={length}
        onChange={e => setLength(e.target.value)}
        />
        <label>
          Length [{length}]
        </label>
        </div>

        <div>
        <input 
        type="checkbox"
        id='numbers'
        defaultChecked={numbers}
        onChange={() => setNumbers(!numbers)}
        />
        <label htmlFor='numbers'>
          Numbers
        </label>
        </div>

        <div>
        <input 
        type="checkbox" 
        id='characters'
        defaultChecked={characters}
        onChange={() => setCharacters(!characters)}
        />
        <label htmlFor='characters'>
          Characters
        </label>
        </div>
      </div>

    </div>
    

   </div>
  </>
  )
}

export default App
