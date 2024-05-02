'use server'
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../../../constants";

export const logOut = () => {
  cookies().delete(AUTH_COOKIE_KEY);
}