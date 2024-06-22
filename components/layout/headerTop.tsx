import { Link } from "next-view-transitions";
import LogoSvg from "./LogoSvg";
import HeaderProfile from "./headerProfile";
import CartIcon from "./cartIcon";
import ThemeButton from "./themeButton";
import SearchIcon from "./searchIcon";

const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="header-top-left">
        <div>
          <ThemeButton />
        </div>
        <SearchIcon />
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
