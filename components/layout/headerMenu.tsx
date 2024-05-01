// HeaderMenu.js
import React from "react";
import Link from 'next/link';
import { getDictionary } from "../../app/[lang]/dictionaries";

interface HeaderMenuProps {
  openBurger: boolean;
  lang: string;
}

async function HeaderMenu({ openBurger, lang }: HeaderMenuProps) {
  const dict = await getDictionary(lang)

  return (
    <div className={`menu ${openBurger ? 'is-active' : ''}`} id="menu">
      <ul className="menu-inner">
        <li className="menu-item"><Link href="/">{dict.header.home}</Link></li>
        <li className="menu-item"><Link href="/blog">{dict.header.blog}</Link></li>
        <li className="menu-item"><Link href="/about">{dict.header.about}</Link></li>
        <li className="menu-item"><Link href="/contact">{dict.header.contact}</Link></li>
      </ul>
    </div>
  );
};

export default HeaderMenu;
