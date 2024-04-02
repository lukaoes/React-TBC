'use client'
import { useState } from "react";
import BurgerMenu from "./burgerMenu";
import HeaderMenu from "./headerMenu";
import Link from 'next/link';

const Header = () => {
  const [openBurger, setOpenBurger] = useState(false);

  const toggleBurgerMenu = () => {
    setOpenBurger(!openBurger);
  };

  return (
    <>
      <header className="header">
        <nav className="navbar container">
            <Link href="/" className="brand">LUKMART</Link>
            <BurgerMenu openBurger={openBurger} toggleBurgerMenu={toggleBurgerMenu} />
            <HeaderMenu openBurger={openBurger} />
            <Link href="/profile" className="menu-block">MY PROFILE</Link>
        </nav>
      </header>
    </>
  )
}

export default Header
