import { useState } from "react";
import BurgerMenu from "./burgerMenu";
import HeaderMenu from "./headerMenu";

const Header = () => {
  const [openBurger, setOpenBurger] = useState(false);

  const toggleBurgerMenu = () => {
    setOpenBurger(!openBurger);
  };

  return (
    <>
      <header className="header">
        <nav className="navbar container">
            <a href="/" className="brand">LUKMART</a>
            <BurgerMenu openBurger={openBurger} toggleBurgerMenu={toggleBurgerMenu} />
            <HeaderMenu openBurger={openBurger} />
            <a href="/profile" className="menu-block">MY PROFILE</a>
        </nav>
      </header>
    </>
  )
}

export default Header
