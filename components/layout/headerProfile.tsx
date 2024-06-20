"use client";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useCallback, useEffect, useRef, useState } from "react";
import { getPictureAction, getNicknameAction } from "../../actions";
import ProfileDropdown from "./profileDropdown";
import { useI18n } from "../../locales/client";

export default function HeaderProfile() {
  const t = useI18n();
  const [profilePicture, setProfilePicture] = useState<Array<{
    picture: string;
  }> | null>(null);
  const [pic, setPic] = useState<string | null>(null);
  const [displayName, setDisplayName] = useState<string>("");
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

  const fetchAndSetNickname = async (sub: string, fallbackNickname: string) => {
    try {
      const nickname = await getNicknameAction(sub);
      setDisplayName(nickname[0].nickname ?? fallbackNickname);
    } catch (error) {
      console.error("Error fetching nickname:", error);
      setDisplayName(fallbackNickname);
    }
  };

  useEffect(() => {
    if (user && user.sub) {
      saveUserProfile(user);
      if (user.email === user.name) {
        fetchAndSetNickname(user.sub, user.nickname ?? "");
      } else {
        const name = user.name?.split(" ");
        setDisplayName(name && name.length > 0 ? name[0] : "");
      }
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
            nickname: user.nickname,
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

  const imageSrc = pic || user?.picture || "";

  return (
    <div>
      {user ? (
        <div className="menu-block" ref={dropdownRef}>
          <span onClick={toggleDropdown}>{displayName.slice(0, 4)}...</span>
          {imageSrc && (
            <Image
              src={imageSrc}
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
          <a href="/api/auth/login">{t("header.login")}</a>
        </div>
      )}
    </div>
  );
}
