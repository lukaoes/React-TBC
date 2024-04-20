// 'use client'
// import { useState } from "react";
import { getDictionary } from "@/app/[lang]/dictionaries";
import BurgerMenu from "./burgerMenu";
import HeaderMenu from "./headerMenu";
import Link from 'next/link';
import LangSelect from "./langSelect";

async function Header(params) {
  const {lang} = params
  const dict = await getDictionary(lang) // en

  let openBurger = false;

  const toggleBurgerMenu = () => {
    openBurger = !openBurger;
  };  

  return (
    <>
      <header className="header">
        <nav className="navbar container">
            <Link href="/" className="brand">LUKMART</Link>
            <BurgerMenu openBurger={openBurger} toggleBurgerMenu={toggleBurgerMenu} />
            <HeaderMenu openBurger={openBurger} lang={lang} />
            <Link href="/profile" className="menu-block">{dict.header.profile}</Link>
            <LangSelect />
        </nav>
      </header>
    </>
  )
}

export default Header
