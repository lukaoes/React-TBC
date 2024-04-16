'use client'
import { useState } from "react"

const LoginForm = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form>
      <label htmlFor="username">Username:</label>
      <input 
        type="email"
        id="username"
        placeholder="Username..."
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />
      <label htmlFor="password">Password:</label>
      <input 
        type="password"
        id="password"
        placeholder="Password..."
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      />
      <button onClick={() => handleLogin(email, password)}>LOGIN</button>
    </form>
  )
}

export default LoginForm;
