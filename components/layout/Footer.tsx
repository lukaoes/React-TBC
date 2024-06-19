import { Link } from "next-view-transitions";
import LogoSvg from "./LogoSvg";
import FooterBottom from "./footerBottom";
import { getScopedI18n } from "../../locales/server";

async function Footer() {
  const t = await getScopedI18n("footer");
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-first">
          <Link href="/" className="footer-logo">
            <LogoSvg />
          </Link>
          <h5>{t("follow")}</h5>
          <div>
            <a href="https://www.instagram.com" target="_blank">
              <svg
                fill="#000000"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="25px"
                height="25px"
                viewBox="0 0 169.063 169.063"
                xmlSpace="preserve"
              >
                <g>
                  <path
                    d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
		c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
		c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
		c17.455,0,31.656,14.201,31.656,31.655V122.407z"
                  />
                  <path
                    d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
		C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
		c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"
                  />
                  <path
                    d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
		c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
		C135.661,29.421,132.821,28.251,129.921,28.251z"
                  />
                </g>
              </svg>
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <svg
                fill="#000000"
                height="25px"
                width="25px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 310 310"
                xmlSpace="preserve"
              >
                <g id="XMLID_834_">
                  <path
                    id="XMLID_835_"
                    d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
		c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
		V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
		C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
		c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
                  />
                </g>
              </svg>
            </a>
            <a href="https://www.linkedin.com" target="_blank">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
                  fill="#0F0F0F"
                />
                <path
                  d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
                  fill="#0F0F0F"
                />
                <path
                  d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
                  fill="#0F0F0F"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                  fill="#0F0F0F"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>{t("navigation")}</h3>
          <ul>
            <li>
              <Link href="#">{t("home")}</Link>
            </li>
            <li>
              <Link href="/products">{t("products")}</Link>
            </li>
            <li>
              <Link href="/campsites">{t("campsites")}</Link>
            </li>
            <li>
              <Link href="/blog">{t("blogs")}</Link>
            </li>
            <li>
              <Link href="/contact">{t("contact")}</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>{t("add")}</h3>
          <ul>
            <li>
              <Link href="/add">{t("addPage")}</Link>
            </li>
            <li>
              <Link href="/add/product">{t("addProduct")}</Link>
            </li>
            <li>
              <Link href="/add/campsite">{t("addCampsite")}</Link>
            </li>
            <li>
              <Link href="/blog/add">{t("addBlog")}</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>{t("user")}</h3>
          <ul>
            <li>
              <Link href="/profile">{t("profile")}</Link>
            </li>
            <li>
              <Link href="/profile/address">{t("addresses")}</Link>
            </li>
            <li>
              <Link href="/profile/orders">{t("orders")}</Link>
            </li>
            <li>
              <Link href="/cart">{t("cart")}</Link>
            </li>
          </ul>
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
}

export default Footer;
