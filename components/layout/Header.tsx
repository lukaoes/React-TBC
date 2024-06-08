import Link from "next/link";
import ThemeButton from "./themeButton";
import CartIcon from "./cartIcon";
import HamburgerMenu from "./hamburgerMenu";
import HeaderProfile from "./headerProfile";
import { getScopedI18n } from "../../locales/server";
import LogoSvg from "./LogoSvg";

async function Header() {
  const scopedT = await getScopedI18n("header");

  return (
    <>
      <header>
        <nav>
          <div className="header-desktop-nav">
            <Link href={`/`} className="logo">
              <LogoSvg />
            </Link>
            <ul>
              <li>
                <Link href="/">{scopedT("home")}</Link>
              </li>
              <li>
                <Link href="/products">პროდუქტები</Link>
              </li>
              <li>
                <Link href="/blog">{scopedT("blog")}</Link>
              </li>
              <li>
                <Link href="/contact">{scopedT("contact")}</Link>
              </li>
            </ul>
          </div>
          <div className="header-icons">
            <div className="header-icons-right">
              <ThemeButton />
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5 17.5L13.875 13.875"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <CartIcon />
            </div>
            <div className="header-settings">
              <HeaderProfile />
            </div>
            <HamburgerMenu />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
