'use server'
import { AUTH_COOKIE_KEY } from "@/constants";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const handleCookieDelete = () => {
  cookies().delete(AUTH_COOKIE_KEY);
  redirect('/login')
}