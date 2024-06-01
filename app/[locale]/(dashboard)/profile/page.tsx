import { setStaticParamsLocale } from "next-international/server";
import ProfileLayout from "../../../../components/Profile/profileLayout";

const Profile = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  setStaticParamsLocale(locale);

  return <ProfileLayout />;
};

export default Profile;
