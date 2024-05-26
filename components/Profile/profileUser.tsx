import { FC } from "react";
import Image from "next/image";
import { useI18n } from "../../locales/client";
import Link from "next/link";
import AvatarUploadPage from "./avatarUpload";

interface userData {
  // picture?: string | null | undefined;
  name?: string | null | undefined;
  sid?: string;
}

interface ProfileUserProps {
  userData: userData;
  picture: any;
}

const ProfileUser: FC<ProfileUserProps> = ({ userData, picture }) => {
  const t = useI18n();

  return (
    <div className="profile-user">
      {picture[0].picture && (
        <Image
          src={picture[0].picture}
          alt={"Profile Picture"}
          width={100}
          height={100}
        />
      )}

      <AvatarUploadPage sid={userData?.sid ?? ""} />

      <p>{userData?.name}</p>
      <Link href="/api/auth/logout">{t("profile.logOut")}</Link>
    </div>
  );
};

export default ProfileUser;
