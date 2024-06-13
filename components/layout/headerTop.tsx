import Link from "next/link";
import LogoSvg from "./LogoSvg";
import HeaderProfile from "./headerProfile";
import CartIcon from "./cartIcon";
import ThemeButton from "./themeButton";

const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="header-top-left">
        <div>
          <ThemeButton />
        </div>
        <div>
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
        </div>
      </div>
      <Link href={`/`} className="top-logo">
        <LogoSvg />
      </Link>
      <div className="header-top-right">
        <div className="header-top-right-cart">
          <CartIcon />
        </div>
        <div>
          <HeaderProfile />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
