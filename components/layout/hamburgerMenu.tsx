"use client";
import Hamburger from "hamburger-react";
import { Link } from "next-view-transitions";
import { useState } from "react";
import ThemeButton from "./themeButton";
import MobileLangSelect from "./mobileLangSelect";
import { useScopedI18n } from "../../locales/client";

const HamburgerMenu = () => {
  const t = useScopedI18n("header");
  const [isOpen, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleMenuOpen = () => {
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="hamburger-menu">
      <Hamburger toggled={isOpen} toggle={handleMenuOpen} color="white" />
      <div
        className={`${isOpen ? "mobile-menu-bg" : "mobile-menu-bg-none"}`}
        onClick={handleClose}
      ></div>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          id="Layer_1"
          fill="#252525"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="25px"
          height="25px"
          viewBox="0 0 122.878 122.88"
          enableBackground="new 0 0 122.878 122.88"
          xmlSpace="preserve"
          className={`${isOpen ? "close" : "close closed"}`}
          onClick={handleClose}
        >
          <g>
            <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" />
          </g>
        </svg>
        <div className="mobile-nav">
          <div className="mobile-nav-top">
            <ul>
              <li onClick={handleClose}>
                <Link href="/ ">{t("home")}</Link>
              </li>
              <li onClick={handleClose}>
                <Link href="/products">{t("products")}</Link>
              </li>
              <li onClick={handleClose}>
                <Link href="/campsites">{t("campsites")}</Link>
              </li>
              <li onClick={handleClose}>
                <Link href="/blog">{t("blog")}</Link>
              </li>
              <li onClick={handleClose}>
                <Link href="/contact">{t("contact")}</Link>
              </li>
            </ul>
          </div>
          <div className="mobile-nav-bottom">
            <div>
              <p>თემა:</p>
              <ThemeButton />
            </div>
            <div>
              <p>ენა:</p>
              <MobileLangSelect />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
