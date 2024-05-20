import Link from "next/link";
import LangSelect from "./langSelect";
import ThemeButton from "./themeButton";
import CartIcon from "./cartIcon";
import heart from "../../public/assets/images/heart.svg";
import Image from "next/image";
import HamburgerMenu from "./hamburgerMenu";
import search from "../../public/assets/images/search.svg";
import HeaderProfile from "./headerProfile";
import { getScopedI18n } from "../../locales/server";

async function Header() {
  const scopedT = await getScopedI18n("header");

  return (
    <>
      <header>
        <nav>
          <div className="header-desktop-nav">
            <Link href={`/`} className="logo">
              LOGO
            </Link>
            <ul>
              <li>
                <Link href="/">{scopedT("home")}</Link>
              </li>
              <li>
                <Link href="/blog">{scopedT("blog")}</Link>
              </li>
              <li>
                <Link href="/about">{scopedT("about")}</Link>
              </li>
              <li>
                <Link href="/contact">{scopedT("contact")}</Link>
              </li>
              {/* <li className="nav-more">more \/</li> */}
            </ul>
          </div>
          <div className="header-icons">
            <div className="header-icons-right">
              {/* <Image width={20} height={20} src="" alt="s" /> */}
              <Image width={20} height={20} src={search} alt="search" />
              <Link href="/favorites">
                <Image width={20} height={20} src={heart} alt="favorites" />
              </Link>
              <CartIcon />
            </div>
            <div className="header-settings">
              <ThemeButton />
              <LangSelect />
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
