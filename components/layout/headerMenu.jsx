// HeaderMenu.js
import React from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const HeaderMenu = ({ openBurger }) => {
	const pathname = usePathname();

  return (
    <div className={`menu ${openBurger ? 'is-active' : ''}`} id="menu">
      <ul className="menu-inner">
        <li className="menu-item"><Link href="/" className={`menu-link ${pathname == '/' ? 'active' : ''}`}>Home</Link></li>
        <li className="menu-item"><Link href="/blog" className={`menu-link ${pathname == '/blog' ? 'active' : ''}`}>Blog</Link></li>
        <li className="menu-item"><Link href="/about" className={`menu-link ${pathname == '/about' ? 'active' : ''}`}>About</Link></li>
        <li className="menu-item"><Link href="/contact" className={`menu-link ${pathname == '/contact' ? 'active' : ''}`}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default HeaderMenu;
