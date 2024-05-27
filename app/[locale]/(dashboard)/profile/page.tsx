import { setStaticParamsLocale } from "next-international/server";
import { getStaticParams } from "../../../../locales/server";
import ProfileLayout from "../../../../components/Profile/profileLayout";
import { getPictureAction } from "../../../../actions";
import { getSession } from "@auth0/nextjs-auth0";

export function generateStaticParams() {
  return getStaticParams();
}

const Profile = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  setStaticParamsLocale(locale);

  const session = await getSession();
  const user = session?.user;
  const picture = await getPictureAction(user?.sub);

  return (
    <>
      {session?.user ? (
        <ProfileLayout picture={picture} />
      ) : (
        <div>Log In to see this page</div>
      )}
    </>
  );
};

export default Profile;
