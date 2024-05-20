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
        <h3>მენიუ</h3>
        <div className="mobile-nav">
          <div className="mobile-nav-top">
            <ul>
              <li>
                <Link href="/ ">მთავარი</Link>
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
                    stroke="#1C274C"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15 18H9"
                    stroke="#1C274C"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </li>
              <li>
                <Link href="/blog">ბლოგი</Link>
                <svg
                  version="1.1"
                  id="_x32_"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="20px"
                  height="20px"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      strokeWidth="2"
                      d="M421.073,221.719c-0.578,11.719-9.469,26.188-23.797,40.094v183.25c-0.016,4.719-1.875,8.719-5.016,11.844
		c-3.156,3.063-7.25,4.875-12.063,4.906H81.558c-4.781-0.031-8.891-1.844-12.047-4.906c-3.141-3.125-4.984-7.125-5-11.844V152.219
		c0.016-4.703,1.859-8.719,5-11.844c3.156-3.063,7.266-4.875,12.047-4.906h158.609c12.828-16.844,27.781-34.094,44.719-49.906
		c0.078-0.094,0.141-0.188,0.219-0.281H81.558c-18.75-0.016-35.984,7.531-48.25,19.594c-12.328,12.063-20.016,28.938-20,47.344
		v292.844c-0.016,18.406,7.672,35.313,20,47.344C45.573,504.469,62.808,512,81.558,512h298.641c18.781,0,36.016-7.531,48.281-19.594
		c12.297-12.031,20-28.938,19.984-47.344V203.469c0,0-0.125-0.156-0.328-0.313C440.37,209.813,431.323,216.156,421.073,221.719z"
                    />
                    <path
                      strokeWidth="2"
                      d="M498.058,0c0,0-15.688,23.438-118.156,58.109C275.417,93.469,211.104,237.313,211.104,237.313
		c-15.484,29.469-76.688,151.906-76.688,151.906c-16.859,31.625,14.031,50.313,32.156,17.656
		c34.734-62.688,57.156-119.969,109.969-121.594c77.047-2.375,129.734-69.656,113.156-66.531c-21.813,9.5-69.906,0.719-41.578-3.656
		c68-5.453,109.906-56.563,96.25-60.031c-24.109,9.281-46.594,0.469-51-2.188C513.386,138.281,498.058,0,498.058,0z"
                    />
                  </g>
                </svg>
              </li>
              <li>
                <Link href="/about">ჩვენს შესახებ</Link>
                <svg
                  fill="#000000"
                  width="20px"
                  height="20px"
                  viewBox="0 -0.06 33.834 33.834"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="translate(-95.748 -577)">
                    <path
                      strokeWidth="2"
                      d="M110.965,592.309a2.38,2.38,0,0,1,.489-1.434,9.29,9.29,0,0,1,1.443-1.482,10.139,10.139,0,0,0,1.321-1.372,1.985,1.985,0,0,0,.368-1.2,1.956,1.956,0,0,0-1.983-2,2.073,2.073,0,0,0-1.419.543,3.575,3.575,0,0,0-.954,1.582l-2.152-.939a5.029,5.029,0,0,1,1.724-2.656,4.626,4.626,0,0,1,2.9-.927,4.968,4.968,0,0,1,2.287.531,4.168,4.168,0,0,1,1.651,1.495,3.974,3.974,0,0,1,.612,2.175,3.688,3.688,0,0,1-.538,1.965,8.8,8.8,0,0,1-1.639,1.865,13.862,13.862,0,0,0-1.358,1.322,1.536,1.536,0,0,0-.379,1,2.85,2.85,0,0,0,.1.667h-2.2A2.737,2.737,0,0,1,110.965,592.309Zm1.467,6.968a1.851,1.851,0,0,1-1.357-.543,1.831,1.831,0,0,1-.551-1.359,1.875,1.875,0,0,1,.551-1.372,1.835,1.835,0,0,1,1.357-.556,1.87,1.87,0,0,1,1.909,1.928,1.834,1.834,0,0,1-.55,1.359A1.857,1.857,0,0,1,112.432,599.277Z"
                    />

                    <path
                      strokeWidth="2"
                      d="M97.222,610.717a1.475,1.475,0,0,1-.626-.14,1.459,1.459,0,0,1-.848-1.333V580.572A3.576,3.576,0,0,1,99.32,577h26.69a3.576,3.576,0,0,1,3.572,3.572v20.416a3.576,3.576,0,0,1-3.572,3.571H106.038a2.555,2.555,0,0,0-1.637.594l-6.24,5.22A1.467,1.467,0,0,1,97.222,610.717ZM99.32,579a1.574,1.574,0,0,0-1.572,1.572V608.11l5.37-4.491a4.561,4.561,0,0,1,2.92-1.06H126.01a1.573,1.573,0,0,0,1.572-1.571V580.572A1.574,1.574,0,0,0,126.01,579Z"
                    />
                  </g>
                </svg>
              </li>
              <li>
                <Link href="/contact">კონტაქტი</Link>
                <svg
                  fill="#000000"
                  version="1.1"
                  id="XMLID_276_"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 24 24"
                  xmlSpace="preserve"
                  width="20px"
                  height="20px"
                >
                  <g id="contact-us">
                    <g>
                      <path
                        strokeWidth="2"
                        d="M4,24v-5H0V0h23v19h-9.3L4,24z M2,17h4v3.7l7.3-3.7H21V2H2V17z"
                      />
                    </g>
                    <g>
                      <rect x="5" y="8" width="3" height="3" />
                    </g>
                    <g>
                      <rect x="10" y="8" width="3" height="3" />
                    </g>
                    <g>
                      <rect x="15" y="8" width="3" height="3" />
                    </g>
                  </g>
                </svg>
              </li>
              <li>
                <Link href="/profile">პროფილი</Link>
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
