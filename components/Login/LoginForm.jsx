'use client'
import { useState } from "react"

const LoginForm = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form>
      <input 
        type="email"
        id="username"
        placeholder="username"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />
      <input 
        type="password"
        id="password"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      />
      <button onClick={() => handleLogin(email, password)}>send</button>
    </form>
  )
}

export default LoginForm;
