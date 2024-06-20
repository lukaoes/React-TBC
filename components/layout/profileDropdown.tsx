"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Link } from "next-view-transitions";
import React from "react";
import { useScopedI18n } from "../../locales/client";

export default function ProfileDropdown() {
  const { user } = useUser();
  const t = useScopedI18n("profileDropdown");
  const isAdmin = Array.isArray(user?.role)
    ? user?.role.includes("admin")
    : user?.role === "admin";

  return (
    <div className="dropdown-menu">
      <ul>
        {isAdmin && (
          <li>
            <svg
              fill="#292D32"
              height="20px"
              width="20px"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 24 24"
              enable-background="new 0 0 24 24"
              xmlSpace="preserve"
            >
              <g id="user-admin">
                <path
                  d="M22.3,16.7l1.4-1.4L20,11.6l-5.8,5.8c-0.5-0.3-1.1-0.4-1.7-0.4C10.6,17,9,18.6,9,20.5s1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5
		c0-0.6-0.2-1.2-0.4-1.7l1.9-1.9l2.3,2.3l1.4-1.4l-2.3-2.3l1.1-1.1L22.3,16.7z M12.5,22c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5
		s1.5,0.7,1.5,1.5S13.3,22,12.5,22z"
                />
                <path
                  d="M2,19c0-3.9,3.1-7,7-7c2,0,3.9,0.9,5.3,2.4l1.5-1.3c-0.9-1-1.9-1.8-3.1-2.3C14.1,9.7,15,7.9,15,6c0-3.3-2.7-6-6-6
		S3,2.7,3,6c0,1.9,0.9,3.7,2.4,4.8C2.2,12.2,0,15.3,0,19v5h8v-2H2V19z M5,6c0-2.2,1.8-4,4-4s4,1.8,4,4s-1.8,4-4,4S5,8.2,5,6z"
                />
              </g>
            </svg>
            <Link href="/admin">{t("admin")}</Link>
          </li>
        )}
        <li>
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <a href="/profile">{t("profile")}</a>
        </li>
        <li>
          <svg
            fill="#292D32"
            height="20px"
            width="20px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 490 490"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <g>
                  <path
                    d="M227.8,174.1v53.7h-53.7c-9.5,0-17.2,7.7-17.2,17.2s7.7,17.2,17.2,17.2h53.7v53.7c0,9.5,7.7,17.2,17.2,17.2
				s17.1-7.7,17.1-17.2v-53.7h53.7c9.5,0,17.2-7.7,17.2-17.2s-7.7-17.2-17.2-17.2h-53.7v-53.7c0-9.5-7.7-17.2-17.1-17.2
				S227.8,164.6,227.8,174.1z"
                  />
                  <path
                    d="M71.7,71.7C25.5,118,0,179.5,0,245s25.5,127,71.8,173.3C118,464.5,179.6,490,245,490s127-25.5,173.3-71.8
				C464.5,372,490,310.4,490,245s-25.5-127-71.8-173.3C372,25.5,310.5,0,245,0C179.6,0,118,25.5,71.7,71.7z M455.7,245
				c0,56.3-21.9,109.2-61.7,149s-92.7,61.7-149,61.7S135.8,433.8,96,394s-61.7-92.7-61.7-149S56.2,135.8,96,96s92.7-61.7,149-61.7
				S354.2,56.2,394,96S455.7,188.7,455.7,245z"
                  />
                </g>
              </g>
            </g>
          </svg>
          <a href="/add">{t("add")}</a>
        </li>
        <li>
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.90002 7.55999C9.21002 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24002 20.08 8.91002 16.54"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 12H3.62"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.85 8.6499L2.5 11.9999L5.85 15.3499"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <a href="/api/auth/logout">{t("logout")}</a>
        </li>
      </ul>
    </div>
  );
}
