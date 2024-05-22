import { FC } from "react";
import Link from "next/link";

interface SecondHeaderProps {
  title: string;
}

export const SecondHeader: FC<SecondHeaderProps> = ({ title }) => {
  return (
    <div className="second-header-container">
      <div className="second-header-info">
        <div className="second-header-links">
          <h2>{title}</h2>
          <div>
            <Link href="/">მთავარი</Link>
            <svg
              width="20"
              height="20"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.75 13.5L11.25 9L6.75 4.5"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <Link href={`/${title}`}>{title}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondHeader;
