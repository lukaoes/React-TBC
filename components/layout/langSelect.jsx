'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


const LangSelect = () => {
  const path = usePathname()
  const newPath = path.replace(/^\/(ge|en)(\/|$)/, '/');
  const displayLang = path.includes("en") ? 
    <div className="cursor-pointer flex"><Image src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/united-kingdom-flag-icon.png" alt="eng" width={34} height={24} className="mr-[5px]"/> EN</div>
    : 
    <div className="cursor-pointer flex"><Image src="https://www.flagsandflagpoles.co.uk/cdn/shop/products/georgia_800x.png?v=1626329459" alt="eng" width={34} height={24} className="mr-[5px]"/> GE</div>
  return (
    <details className="dropdown relative">
      <summary className="m-1 btn flex">{displayLang}</summary>
      <ul className="p-2 shadow menu dropdown-content w-[80px] z-[1] bg-base-100 rounded-box absolute top-[35px] left-[-3px] bg-[#FFFAD1]">
        <li>
          <Link href={`/en${newPath}`}>
            <div className="cursor-pointer flex p-[3px]"><Image src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/united-kingdom-flag-icon.png" alt="eng" width={34} height={24} className="mr-[5px]"/> EN</div>
          </Link>
        </li>
        <li>
          <Link href={`/ge${newPath}`}>
            <div className="cursor-pointer flex p-[3px]"><Image src="https://www.flagsandflagpoles.co.uk/cdn/shop/products/georgia_800x.png?v=1626329459" alt="eng" width={34} height={24} className="mr-[5px]"/> GE</div>
          </Link>
        </li>
      </ul>
    </details>
  )
}

export default LangSelect