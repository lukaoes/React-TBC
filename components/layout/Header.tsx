"use client";
import { Link } from "next-view-transitions";
import HamburgerMenu from "./hamburgerMenu";
import { useScopedI18n } from "../../locales/client";
import { usePathname } from "next/navigation";

function Header() {
  const t = useScopedI18n("header");
  const path = usePathname();

  return (
    <>
      <header>
        <nav>
          <div className="header-desktop-nav">
            <ul>
              <li className={path == "/" ? "choosen-header-nav" : ""}>
                <Link href="/">{t("home")}</Link>
              </li>
              <li className={path == "/products" ? "choosen-header-nav" : ""}>
                <Link href="/products">{t("products")}</Link>
              </li>
              <li className={path == "/campsites" ? "choosen-header-nav" : ""}>
                <Link href="/campsites">{t("campsites")}</Link>
              </li>
              <li className={path == "/blog" ? "choosen-header-nav" : ""}>
                <Link href="/blog">{t("blog")}</Link>
              </li>
              <li className={path == "/contact" ? "choosen-header-nav" : ""}>
                <Link href="/contact">{t("contact")}</Link>
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
