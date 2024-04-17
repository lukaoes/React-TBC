import { AUTH_COOKIE_KEY } from "@/constants";
import { cookies } from "next/headers"
import axios from 'axios';

export async function login(username, password) {
  const response = await axios.post('https://dummyjson.com/auth/login', {
    username,
    password,
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const user = response.data;

  const cookieStore = cookies();

  console.log(user);

  cookieStore.set(AUTH_COOKIE_KEY, JSON.stringify(user));
}
