import React, {useState,useContext} from 'react'
import UserContext from '../context/UserContext'

export default function Login() {
    const [username, setusername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <div className='login-inputs'>
        <h2>Login Here</h2>
        <input 
            type="text" 
            value={username}
            onChange={(e)=> setusername(e.target.value)}
            placeholder='username' 
        />
        {' '}
        <input 
            type="text" 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder='password' 
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
