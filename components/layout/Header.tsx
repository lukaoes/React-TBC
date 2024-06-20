"use client";
import { Link } from "next-view-transitions";
import HamburgerMenu from "./hamburgerMenu";
import { useCurrentLocale, useScopedI18n } from "../../locales/client";
import { usePathname } from "next/navigation";

function Header() {
  const t = useScopedI18n("header");
  const path = usePathname();
  const locale = useCurrentLocale();

  return (
    <header>
      <nav>
        <div className="header-desktop-nav">
          <ul>
            <li className={path == `/${locale}` ? "choosen-header-nav" : ""}>
              <Link href={`/${locale}/`}>{t("home")}</Link>
            </li>
            <li
              className={
                path == `/${locale}/products` ? "choosen-header-nav" : ""
              }
            >
              <Link href={`/${locale}/products`}>{t("products")}</Link>
            </li>
            <li
              className={
                path == `/${locale}/campsites` ? "choosen-header-nav" : ""
              }
            >
              <Link href={`/${locale}/campsites`}>{t("campsites")}</Link>
            </li>
            <li
              className={path == `/${locale}/blog` ? "choosen-header-nav" : ""}
            >
              <Link href={`/${locale}/blog`}>{t("blog")}</Link>
            </li>
            <li
              className={
                path == `/${locale}/contact` ? "choosen-header-nav" : ""
              }
            >
              <Link href={`/${locale}/contact`}>{t("contact")}</Link>
            </li>
          </ul>
        </div>
        <HamburgerMenu />
      </nav>
    </header>
  );
}

export default Header;
