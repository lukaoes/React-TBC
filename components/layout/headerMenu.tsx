// HeaderMenu.js
import { getScopedI18n } from "../../locales/server";
import React from "react";
import { Link } from "next-view-transitions";

interface HeaderMenuProps {
  openBurger: boolean;
}

async function HeaderMenu({ openBurger }: HeaderMenuProps) {
  const scopedT = await getScopedI18n("header");

  return (
    <div className={`menu ${openBurger ? "is-active" : ""}`} id="menu">
      <ul className="menu-inner">
        <li className="menu-item">
          <Link href="/">{scopedT("home")}</Link>
        </li>

        <li className="menu-item">
          <Link href="/products">პროდუქტები</Link>
        </li>
        <li className="menu-item">
          <Link href="/blog">{scopedT("blog")}</Link>
        </li>
        <li className="menu-item">
          <Link href="/contact">{scopedT("contact")}</Link>
        </li>
      </ul>
    </div>
  );
}

export default HeaderMenu;
