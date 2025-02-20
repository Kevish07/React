import './App.css'
import User from './components/User'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>Welcome Sir!</h1>
      <Login />
      <User/>
    </UserContextProvider>
  )
}

export default App
