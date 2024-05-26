"use client";
// import { cookies } from "next/headers";
// import { AUTH_COOKIE_KEY } from "../../constants";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useRef, useState, useCallback } from "react";
import ProfileDropdown from "./profileDropdown";

export default function HeaderProfile() {
  // const cookieStore = cookies();
  // const cookie = cookieStore.get(AUTH_COOKIE_KEY);

  // const value = cookie?.value.split(",");
  // const newValue = value ? value[1] : null;
  // const match = newValue ? newValue.match(/"name"\s*:\s*"([^"]+)"/) : null;
  // const name = match ? match[1] : null;
  const { user } = useUser();
  // console.log(user);
  const name = user?.name ? user.name.split(" ") : [];
  const firstName = name.length > 0 ? name[0] : "";

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleClickOutside = useCallback((event: Event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownVisible(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    console.log("User changed:", user);
    if (user && user.sid) {
      console.log("Saving user profile...");
      saveUserProfile(user);
    }
  }, [user]);

  const saveUserProfile = async (user: any) => {
    if (user) {
      try {
        const response = await fetch("/api/users/save-user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sid: user.sid,
            email: user.email,
            picture: user.picture,
          }),
        });
        const data = await response.json();
        // console.log(data.message);
      } catch (error) {
        console.error("Error saving profile:", error);
      }
    }
  };
  return (
    <div>
      {user ? (
        <div className="menu-block" ref={dropdownRef}>
          <span onClick={toggleDropdown}>{firstName}</span>
          {user.picture && (
            <Image
              src={user.picture}
              alt={user.name || "Profile Picture"}
              onClick={toggleDropdown}
              width={40}
              height={40}
            />
          )}
          {isDropdownVisible && <ProfileDropdown />}
        </div>
      ) : (
        <div className="header-auth">
          <Link href="/api/auth/login">Login </Link> /
          <Link href="/api/auth/login">Register</Link>
        </div>
      )}
    </div>
  );
}
