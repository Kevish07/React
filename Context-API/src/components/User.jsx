import React, {useContext} from 'react'
import userContext from '../context/UserContext'
export default function User() {
  const {user} = useContext(userContext)

  if (!user) return <div>Try Login </div>
  return <div>Welcome {user.username}</div>
}
