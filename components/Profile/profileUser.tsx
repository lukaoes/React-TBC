import { FC } from "react";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import { useI18n } from "../../locales/client";
import Link from "next/link";
// import { logOut } from "../../app/[locale]/(dashboard)/profile/actions";

interface userData {
  // picture?: string | null | undefined;
  name?: string | null | undefined;
}

interface ProfileUserProps {
  userData: userData;
  picture: any;
}

const ProfileUser: FC<ProfileUserProps> = ({ userData, picture }) => {
  // const router = useRouter();
  const t = useI18n();

  // const handleLogOut = () => {
  //   logOut()
  //   router.push("/login")
  // };

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

      <p>{userData?.name}</p>
      {/* <button onClick={handleLogOut}>{t('profile.logOut')}</button>  */}
      <Link href="/api/auth/logout">{t("profile.logOut")}</Link>
    </div>
  );
};

export default ProfileUser;
