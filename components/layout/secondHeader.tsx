"use client";
import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SecondHeaderProps {
  title: string;
  backgroundImage?: any;
}

export const SecondHeader: FC<SecondHeaderProps> = ({
  title,
  backgroundImage,
}) => {
  const route = usePathname();
  return (
    <div
      className="second-header-container"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage.src})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: "20px",
        position: "relative",
      }}
    >
      <svg
        width="116"
        height="191"
        viewBox="0 0 116 191"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="top-left-second-header"
      >
        <path
          d="M-78.4992 190.136C-56.4992 185.15 -36.0992 175.262 -22.1992 160.134C1.20083 134.612 3.50085 98.3572 28.5009 73.9336C39.8009 62.8628 54.9009 55.1723 69.4009 47.1438C83.9009 39.1153 98.4009 30.2416 107.501 17.8186C116.401 5.56454 119.001 -10.9995 109.701 -23L-78.4991 -23L-78.4992 190.136Z"
          fill=" #EBE9DF"
        />
        <defs>
          <linearGradient
            id="paint0_linear_45_25625"
            x1="38.6407"
            y1="112.2"
            x2="-28.8856"
            y2="-5.752"
            gradientUnits="userSpaceOnUse"
          ></linearGradient>
        </defs>
      </svg>
      <div className="second-header-info">
        <div className="second-header-links">
          <h2>{title}</h2>
          <div className="second-header-navigation">
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
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <Link href={route}>{title}</Link>
          </div>
        </div>
      </div>
      <svg
        className="bottom-right-second-header"
        width="141"
        height="161"
        viewBox="0 0 141 161"
        fill="#EBE9DF"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M194.441 0.390625C172.441 5.37675 152.041 15.2645 138.141 30.3919C114.741 55.9141 112.441 92.1692 87.4406 116.593C76.1406 127.664 61.0405 135.354 46.5405 143.383C32.0405 151.411 17.5406 160.285 8.44057 172.708C-0.459432 184.962 -3.05944 201.526 6.24056 213.526L194.441 213.526L194.441 0.390625Z"
          fill="#"
        />
        <defs>
          <linearGradient
            id="paint0_linear_45_25626"
            x1="77.3008"
            y1="78.3268"
            x2="144.827"
            y2="196.278"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EBE9DF" />
            <stop offset="1" stop-color="#EBE9DF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default SecondHeader;
