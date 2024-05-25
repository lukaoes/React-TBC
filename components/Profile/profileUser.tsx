import { FC } from "react";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import { useI18n } from "../../locales/client";
// import { logOut } from "../../app/[locale]/(dashboard)/profile/actions";

interface userData {
  picture?: string | null | undefined;
  name?: string | null | undefined;
}

interface ProfileUserProps {
  userData: userData;
}

const ProfileUser: FC<ProfileUserProps> = ({ userData }) => {
  // const router = useRouter();
  const t = useI18n();

  // const handleLogOut = () => {
  //   logOut()
  //   router.push("/login")
  // };

  return (
    <div className="profile-user">
      {userData?.picture && (
        <Image
          src={userData?.picture}
          alt={userData?.name || "Profile Picture"}
          width={100}
          height={100}
        />
      )}

      <p>{userData?.name}</p>
      {/* <button onClick={handleLogOut}>{t('profile.logOut')}</button>  */}
      <button>{t("profile.logOut")}</button>
    </div>
  );
};

export default ProfileUser;
