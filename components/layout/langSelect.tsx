"use client";
import Image from "next/image";
import { useChangeLocale, useCurrentLocale } from "../../locales/client";

const LangSelect = () => {
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <div className="flex space-x-2">
      <button
        type="button"
        onClick={() => changeLocale("ge")}
        className={`flex items-center px-2 py-1 rounded ${
          currentLocale === "ge"
            ? "bg-[#B9D484] text-black"
            : "bg-[#FCF9F4] text-black"
        }`}
      >
        <Image
          src="https://www.flagsandflagpoles.co.uk/cdn/shop/products/georgia_800x.png?v=1626329459"
          alt="geo"
          width={24}
          height={14}
          className="mr-1 rounded-full"
        />
        ქა
      </button>
      <button
        type="button"
        onClick={() => changeLocale("en")}
        className={`flex items-center px-2 py-1 rounded ${
          currentLocale === "en"
            ? "bg-[#B9D484] text-black"
            : "bg-[#FCF9F4] text-black"
        }`}
      >
        <Image
          src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/united-kingdom-flag-icon.png"
          alt="eng"
          width={24}
          height={14}
          className="mr-1 rounded-full"
        />
        EN
      </button>
    </div>
  );
};

export default LangSelect;
