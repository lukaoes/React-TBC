'use server'
import { AUTH_COOKIE_KEY } from "@/constants";
import { redirect } from "next/navigation";
import { cookies } from "next/headers"
import LoginForm from "@/components/Login/LoginForm";
import layeredPeaks from "../../../public/assets/images/layered-peaks.svg"
import Image from "next/image";
import { login } from "./api/login/route";

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
    <main className="login-layout">
      <Image className="login-bg" src={layeredPeaks} alt="" width={1920} height={540} />
      <div className="login-form">
        <h1>Please Login To See Content!</h1>
        <LoginForm handleLogin={handleLogin} />
        <span>user:kminchelle</span>
        <span>pswrd:0lelplR</span>
      </div>
    </main> 
  )
}