import Link from "next/link";
import LangSelect from "./langSelect";
import ThemeButton from "./themeButton";
import CartIcon from "./cartIcon";
import HamburgerMenu from "./hamburgerMenu";
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
              <Link href="/favorites">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.3666 3.84172C16.941 3.41589 16.4356 3.0781 15.8794 2.84763C15.3232 2.61716 14.727 2.49854 14.1249 2.49854C13.5229 2.49854 12.9267 2.61716 12.3705 2.84763C11.8143 3.0781 11.3089 3.41589 10.8833 3.84172L9.99994 4.72506L9.1166 3.84172C8.25686 2.98198 7.0908 2.49898 5.87494 2.49898C4.65907 2.49898 3.49301 2.98198 2.63327 3.84172C1.77353 4.70147 1.29053 5.86753 1.29053 7.08339C1.29053 8.29925 1.77353 9.46531 2.63327 10.3251L3.5166 11.2084L9.99994 17.6917L16.4833 11.2084L17.3666 10.3251C17.7924 9.89943 18.1302 9.39407 18.3607 8.83785C18.5912 8.28164 18.7098 7.68546 18.7098 7.08339C18.7098 6.48132 18.5912 5.88514 18.3607 5.32893C18.1302 4.77271 17.7924 4.26735 17.3666 3.84172Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
