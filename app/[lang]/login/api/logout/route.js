'use server'
import { AUTH_COOKIE_KEY } from "@/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logOut = () => {
  cookies().delete(AUTH_COOKIE_KEY);
  redirect('/login')
}