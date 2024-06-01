"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import AvatarUploadPage from "./avatarUpload";
import { useUser } from "@auth0/nextjs-auth0/client";
import { getNicknameAction, getPictureAction } from "../../actions";
import userIcon from "../../public/assets/images/userIcon.png";
import ProfileNavigation from "./profileNavigation";

interface PictureData {
  picture: string;
  nickname: string;
}

const ProfileUser = () => {
  const [picture, setPicture] = useState<PictureData[] | null>(null);
  const [displayName, setDisplayName] = useState("");
  const [nickname, setNickname] = useState<PictureData[] | null>(null);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      if (user.name === user.email) {
        if (nickname && nickname.length > 0) {
          setDisplayName(nickname[0].nickname || "");
        } else {
          setDisplayName("");
        }
      } else {
        setDisplayName(user.name || "");
      }
    }
  }, [nickname, user]);

  useEffect(() => {
    const fetchPicture = async () => {
      if (user?.sub) {
        const pic = await getPictureAction(user.sub);
        const nick = await getNicknameAction(user.sub);
        setNickname(nick);
        setPicture(pic);
      }
    };
    fetchPicture();
  }, [user?.sub]);

  return (
    <div className="profile-user-container">
      <div className="profile-user">
        <div className="big-profile-picture">
          {picture ? (
            <Image
              src={picture[0].picture}
              alt={user?.name || "Profile Picture"}
              width={100}
              height={100}
            />
          ) : (
            <Image
              src={userIcon}
              alt={user?.name || "Profile Picture"}
              width={100}
              height={100}
            />
          )}
          <AvatarUploadPage />
        </div>
        {user ? (
          <p>{displayName}</p>
        ) : (
          <div className="w-[100%]">
            <div className="max-w-sm rounded overflow-hidden animate-pulse h-6 bg-gray-300 mb-2"></div>
          </div>
        )}
        <a href="/api/auth/logout" className="logout-profile">
          Log Out
        </a>
      </div>
      <ProfileNavigation />
    </div>
  );
};

export default ProfileUser;
