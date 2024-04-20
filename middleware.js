import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { cookies } from 'next/headers'
 
let headers = { 'accept-language': 'en,en;q=0.5' }
let languages = new Negotiator({ headers }).languages()
let locales = ['en', 'ge',]
let defaultLocale = 'en'
 
match(languages, locales, defaultLocale) // -> 'en'

import { NextResponse } from "next/server";
 
export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = match(languages, locales, defaultLocale) // -> 'en'
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en/products
  return NextResponse.redirect(request.nextUrl)
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}

const axios = require('axios');
const { AUTH_COOKIE_KEY } = require('./constants');

export const loginMiddleware = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const response = await axios.post('https://dummyjson.com/auth/login', {
      username,
      password,
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const user = response.data;

    const cookieStore = cookies(req, res);
    cookieStore.set(AUTH_COOKIE_KEY, JSON.stringify(user));

    next();
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'An error occurred during login.' });
  }
};