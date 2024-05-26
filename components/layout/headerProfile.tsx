"use client";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useRef, useState, useCallback } from "react";
import ProfileDropdown from "./profileDropdown";
import { getPictureAction } from "../../actions";

export default function HeaderProfile() {
  const [profilePicture, setProfilePicture] = useState<Array<{
    picture: string;
  }> | null>(null);
  const [pic, setPic] = useState<string | null>(null);

  useEffect(() => {
    if (profilePicture && profilePicture.length > 0) {
      setPic(profilePicture[0].picture);
    }
  }, [profilePicture]);

  const { user } = useUser();
  const name = user?.name ? user.name.split(" ") : [];
  const firstName = name.length > 0 ? name[0] : "";

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleClickOutside = useCallback((event: Event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
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
    if (user && user.sid) {
      saveUserProfile(user);
    }
  }, [user]);

  const saveUserProfile = async (user: any) => {
    if (user) {
      try {
        const pictureUrl = await getPictureAction(user.sid);

        setProfilePicture(pictureUrl);
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
              src={pic}
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
