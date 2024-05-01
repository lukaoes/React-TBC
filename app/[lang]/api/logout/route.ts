'use server'
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../../../constants";

export const POST = () => {
  cookies().delete(AUTH_COOKIE_KEY);
  return Response.json({message: "SUCCESS"})
}