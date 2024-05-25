"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { BASE_URL } from "../../../../../api";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, surname, email, password } = formData;

    if (!name || !surname || !email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/api/users/register-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(true);
        setError(null);
      } else {
        console.error("Registration error:", result.error);
        // Convert error object to string
        const errorMessage =
          typeof result.error === "object"
            ? JSON.stringify(result.error)
            : result.error;
        setError(errorMessage || "Something went wrong");
      }
    } catch (err) {
      console.error("Request failed:", err);
      setError("Failed to register. Please try again.");
    }
  };

  return (
    <div className="auth-right-layout">
      <div className="auth-box">
        <div className="auth-info">
          <h1>Register Now</h1>
          <p>Welcome! Please register your account.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="auth-input top"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            name="surname"
            id="surname"
            placeholder="Surname"
            className="auth-input top"
            value={formData.surname}
            onChange={handleChange}
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className="auth-input top"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="auth-input"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="remember-me">
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <div className="auth-buttons">
            <button className="auth-submit" type="submit">
              REGISTER
            </button>
            <Link href="/auth/login">SIGN IN</Link>
          </div>
          {error && <p className="error-message">{error}</p>}
          {success && (
            <p className="success-message">Registration successful!</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
