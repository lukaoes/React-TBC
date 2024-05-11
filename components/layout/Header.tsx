// 'use client'
// import { useState } from "react";
import { getI18n } from '../../locales/server';
import BurgerMenu from "./burgerMenu";
import HeaderMenu from "./headerMenu";
import Link from 'next/link';
import LangSelect from "./langSelect";
import ThemeButton from './themeButton';
import CartIcon from './cartIcon';


async function Header() {
  const t = await getI18n()
  let openBurger = false;

  return (
    <>
      <header className="header">
        <nav className="navbar container">
            <Link href={`/`} className="brand">LUKMART</Link>
            <BurgerMenu openBurger={openBurger} />
            <HeaderMenu openBurger={openBurger} />
            <Link href={`/profile`} className="menu-block">{t('header.profile')}</Link>
            <CartIcon />
            <LangSelect />
            <ThemeButton />
        </nav>
      </header>
    </>
  )
}

export default Header
