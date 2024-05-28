"use client";
// import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useCallback, useEffect, useRef, useState } from "react";
import { getPictureAction } from "../../actions";
import ProfileDropdown from "./profileDropdown";

export default function HeaderProfile() {
  const [profilePicture, setProfilePicture] = useState<Array<{
    picture: string;
  }> | null>(null);
  const [pic, setPic] = useState<string | null>(null);

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
    if (profilePicture && profilePicture.length > 0) {
      setPic(profilePicture[0].picture);
    }
  }, [profilePicture]);

  const { user } = useUser();
  const name = user?.name ? user.name.split(" ") : [];
  const firstName = name.length > 0 ? name[0] : "";
  useEffect(() => {
    if (user && user.sub) {
      saveUserProfile(user);
    }
  }, [user]);

  const saveUserProfile = async (user: any) => {
    if (user) {
      try {
        const pictureUrl = await getPictureAction(user.sub);
        console.log(pictureUrl);

        setProfilePicture(pictureUrl);
        const response = await fetch("/api/users/save-user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sub: user.sub,
            email: user.email,
            picture: user.picture,
          }),
        });
        const data = await response.json();
        if (data.success) {
          console.log("Profile saved successfully!");
        }
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
          {pic && (
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
          <a href="/api/auth/login">Login </a> /
          <a href="/api/auth/login">Register</a>
        </div>
      )}
    </div>
  );
}
