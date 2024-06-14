"use client";
import Link from "next/link";
import HamburgerMenu from "./hamburgerMenu";
import { useScopedI18n } from "../../locales/client";
import { usePathname } from "next/navigation";

function Header() {
  const path = usePathname();
  const scopedT = useScopedI18n("header");

  return (
    <>
      <header>
        <nav>
          <div className="header-desktop-nav">
            <ul>
              <li className={path == "/" ? "choosen-header-nav" : ""}>
                <Link href="/">მთავარი</Link>
              </li>
              <li className={path == "/products" ? "choosen-header-nav" : ""}>
                <Link href="/products">პროდუქტები</Link>
              </li>
              <li className={path == "/campsites" ? "choosen-header-nav" : ""}>
                <Link href="/campsites">საპიკნიკე</Link>
              </li>
              <li className={path == "/blog" ? "choosen-header-nav" : ""}>
                <Link href="/blog">{scopedT("blog")}</Link>
              </li>
              <li className={path == "/contact" ? "choosen-header-nav" : ""}>
                <Link href="/contact">{scopedT("contact")}</Link>
              </li>
            </ul>
          </div>
          <HamburgerMenu />
        </nav>
      </header>
    </>
  );
}

export default Header;
