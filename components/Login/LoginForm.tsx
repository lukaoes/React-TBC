'use client'
import Login from "../../script/login"
import { useState } from "react"
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    Login(username, password).then(() => router.push("/"));
  }

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="username">Username:</label>
      <input 
        type="username"
        id="username"
        placeholder="Username..."
        value={username}
        onChange={(e) => {
          setUsername(e.target.value)
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
      <button type="submit">LOGIN</button>
    </form>
  )
}

export default LoginForm;
