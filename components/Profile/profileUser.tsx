import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import AvatarUploadPage from "./avatarUpload";

interface user {
  name?: string | null | undefined;
  sub?: string | null | undefined;
}

interface ProfileUserProps {
  user: user;
  picture: any;
}

const ProfileUser: FC<ProfileUserProps> = ({ user, picture }) => {
  return (
    <div className="profile-user">
      <div className="big-profile-picture">
        {picture[0].picture && (
          <Image
            src={picture[0].picture}
            alt={user?.name || "Profile Picture"}
            width={100}
            height={100}
          />
        )}

        <AvatarUploadPage sub={user?.sub ?? ""} />
      </div>

      <p>{user?.name}</p>
      <Link href="/api/auth/logout">Log Out</Link>
    </div>
  );
};

export default ProfileUser;
