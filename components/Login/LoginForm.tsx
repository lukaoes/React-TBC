"use client";
import React, { useState } from "react";
import { setCookie } from "nookies";
import { AUTH_COOKIE_KEY } from "../../constants";

interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  role: string;
}

interface LoginFormProps {
  users: User[];
}

const LoginForm: React.FC<LoginFormProps> = ({ users }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = users.find(
      (u) => u.email === username && u.password === password
    );

    if (user) {
      setCookie(null, AUTH_COOKIE_KEY, JSON.stringify(user), { path: "/" });
      window.location.reload();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Email:</label>
      <input
        type="email"
        id="Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Email..."
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password..."
      />
      {error && <p>{error}</p>}
      <button type="submit">LOGIN</button>
    </form>
  );
};

export default LoginForm;
