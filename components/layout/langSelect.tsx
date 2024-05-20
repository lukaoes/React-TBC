"use client";
import Image from "next/image";
import { useChangeLocale, useCurrentLocale } from "../../locales/client";

const LangSelect = () => {
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  let displayLang;

  if (currentLocale === "en") {
    displayLang = (
      <div className="cursor-pointer flex">
        <Image
          src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/united-kingdom-flag-icon.png"
          alt="eng"
          width={24}
          height={14}
          className=" rounded-full	h-[24px]"
        />
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 10L12 15L17 10"
            stroke="#000000"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  } else if (currentLocale === "ge") {
    displayLang = (
      <div className="cursor-pointer flex">
        <Image
          src="https://www.flagsandflagpoles.co.uk/cdn/shop/products/georgia_800x.png?v=1626329459"
          alt="eng"
          width={26}
          height={16}
          className=" rounded-full	h-[24px]"
        />
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 10L12 15L17 10"
            stroke="#000000"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  return (
    <details className="dropdown relative flex">
      <summary className=" btn flex">{displayLang}</summary>
      <ul className="p-2 shadow menu dropdown-content w-[80px] z-[1] bg-base-100 rounded-box absolute top-[35px] left-[-3px] bg-[#FFFAD1]">
        <li>
          <button type="button" onClick={() => changeLocale("en")}>
            <div className="cursor-pointer flex p-[3px]">
              <Image
                src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/united-kingdom-flag-icon.png"
                alt="eng"
                width={24}
                height={14}
                className="mr-[5px]"
              />{" "}
              EN
            </div>
          </button>
        </li>
        <li>
          <button type="button" onClick={() => changeLocale("ge")}>
            <div className="cursor-pointer flex p-[3px]">
              <Image
                src="https://www.flagsandflagpoles.co.uk/cdn/shop/products/georgia_800x.png?v=1626329459"
                alt="eng"
                width={24}
                height={14}
                className="mr-[5px]"
              />{" "}
              GE
            </div>
          </button>
        </li>
      </ul>
    </details>
  );
};

export default LangSelect;
