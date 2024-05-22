"use server";
import { getUsersAuth } from "../../../api";
import LoginForm from "../../../components/Login/LoginForm";
import layeredPeaks from "../../../public/assets/images/layered-peaks.svg";
import Image from "next/image";

export default async function Login() {
  const users = await getUsersAuth();
  console.log(users);

  return (
    <main className="login-layout">
      <Image
        className="login-bg"
        src={layeredPeaks}
        alt=""
        width={1920}
        height={540}
      />
      <div className="login-form">
        <h1>Please Login To See Content!</h1>
        <LoginForm users={users} />
        <span>mail:admin@gmail.com</span>
        <span>pswrd:admin777</span>
      </div>
    </main>
  );
}
