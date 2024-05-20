"use client";
import Image from "next/image";
import { useChangeLocale, useCurrentLocale } from "../../locales/client";

const MobileLangSelect = () => {
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  const toggleLocale = () => {
    if (currentLocale === "en") {
      changeLocale("ge");
    } else {
      changeLocale("en");
    }
  };

  let displayLang;

  if (currentLocale === "en") {
    displayLang = (
      <div className="cursor-pointer flex">
        <Image
          src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/united-kingdom-flag-icon.png"
          alt="eng"
          width={24}
          height={14}
          className="rounded-full h-[24px]"
        />
      </div>
    );
  } else if (currentLocale === "ge") {
    displayLang = (
      <div className="cursor-pointer flex">
        <Image
          src="https://www.flagsandflagpoles.co.uk/cdn/shop/products/georgia_800x.png?v=1626329459"
          alt="ge"
          width={26}
          height={16}
          className="rounded-full h-[24px]"
        />
      </div>
    );
  }

  return (
    <button className="btn flex" onClick={toggleLocale}>
      {displayLang}
    </button>
  );
};

export default MobileLangSelect;
