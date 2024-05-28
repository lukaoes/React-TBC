import { setStaticParamsLocale } from "next-international/server";
import ProfileLayout from "../../../../components/Profile/profileLayout";
// import { cookies } from "next/headers";

const Profile = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  setStaticParamsLocale(locale);

  // redirect to homepage if user is unauthorized
  // const cookieStore = cookies();
  // const cookie = cookieStore.get("appSession");

  return <ProfileLayout />;
};

export default Profile;
