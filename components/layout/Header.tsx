// 'use client'
// import { useState } from "react";
import BurgerMenu from "./burgerMenu";
import HeaderMenu from "./headerMenu";
import Link from 'next/link';
import LangSelect from "./langSelect";
import ThemeButton from "./button";
import { getDictionary } from "../../app/[lang]/dictionaries";

interface HeaderProps {
  lang: string;
}

async function Header(params: HeaderProps) {
  console.log(params)
  const {lang} = params
  const dict = await getDictionary(lang) // en
  console.log("header", lang)

  let openBurger = false;

  return (
    <>
      <header className="header">
        <nav className="navbar container">
            <Link href={`/${lang}/`} className="brand">LUKMART</Link>
            <BurgerMenu openBurger={openBurger} />
            <HeaderMenu openBurger={openBurger} lang={lang} />
            <Link href={`/${lang}/profile`} className="menu-block">{dict.header.profile}</Link>
            <LangSelect />
            <ThemeButton />
        </nav>
      </header>
    </>
  )
}

export default Header
