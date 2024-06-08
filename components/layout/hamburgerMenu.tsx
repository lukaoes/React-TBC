"use client";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useState } from "react";
import ThemeButton from "./themeButton";
import MobileLangSelect from "./mobileLangSelect";
import Image from "next/image";
import close from "../../public/assets/images/close.svg";

const HamburgerMenu = () => {
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
      <Hamburger toggled={isOpen} toggle={handleMenuOpen} color="black" />
      <div
        className={`${isOpen ? "mobile-menu-bg" : "mobile-menu-bg-none"}`}
        onClick={handleClose}
      ></div>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <Image
          src={close}
          alt="close"
          width={25}
          height={25}
          onClick={handleClose}
          className={`${isOpen ? "close" : "close closed"}`}
        />
        {/* <h3>მენიუ</h3> */}
        <div className="mobile-nav">
          <div className="mobile-nav-top">
            <ul>
              <li onClick={handleClose}>
                <Link href="/ ">მთავარი</Link>
              </li>
              <li onClick={handleClose}>
                <Link href="/products">პროდუქტები</Link>
              </li>
              <li onClick={handleClose}>
                <Link href="/blog">ბლოგი</Link>
              </li>
              <li onClick={handleClose}>
                <Link href="/contact">კონტაქტი</Link>
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
