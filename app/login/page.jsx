
'use server'

import { AUTH_COOKIE_KEY } from "@/constants";
import { redirect } from "next/navigation";
import { cookies } from "next/headers"
import { login } from "../actions";
import LoginForm from "@/components/Login/LoginForm";

export default async function Login() {
  const cookieStore = cookies();

  const cookie = cookieStore.get(AUTH_COOKIE_KEY);
 
  if(cookie) {
    redirect('/')
  }

  const handleLogin = async (username, password) => {
    'use server'
    await login(username, password)
  }

  return (
    <>
      <div>login</div>
      <h3>username:kminchelle</h3>
      <h3>password:0lelplR</h3>
      <LoginForm handleLogin={handleLogin} />
    </> 
  )
}