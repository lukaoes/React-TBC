"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
// import Link from "next/link";
import AvatarUploadPage from "./avatarUpload";
import { useUser } from "@auth0/nextjs-auth0/client";
import { getPictureAction } from "../../actions";

interface PictureData {
  picture: string;
}

const ProfileUser = () => {
  const [picture, setPicture] = useState<PictureData[] | null>(null);
  const { user } = useUser();

  useEffect(() => {
    const fetchPicture = async () => {
      if (user?.sub) {
        const pic = await getPictureAction(user.sub);
        setPicture(pic);
      }
    };
    fetchPicture();
  }, [user?.sub]);

  return (
    <div className="profile-user">
      <div className="big-profile-picture">
        {picture && (
          <Image
            src={picture[0].picture}
            alt={user?.name || "Profile Picture"}
            width={100}
            height={100}
          />
        )}

        <AvatarUploadPage />
      </div>

      <p>{user?.name}</p>
      <a href="/api/auth/logout">Log Out</a>
    </div>
  );
};

export default ProfileUser;
