import React, { useState } from 'react'
import Login from './LogIn'
import SignUp from './SignUp'

export default function Auth() {
  const [login, setLogin] = useState(true)
  return (
    <div>
      {
        login
          ? <Login setLogin={setLogin.bind(this)} />
          : <SignUp setLogin={setLogin.bind(this)} />
      }
    </div>
  )
}
