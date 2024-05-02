'use server'
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../../constants";

export default async function Login(username: any, password: any) {
  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to login');
    }

    const data = await response.json();

    const cookieStore = cookies();

    cookieStore.set(AUTH_COOKIE_KEY, JSON.stringify(data))

    return data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}
