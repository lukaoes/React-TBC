import { setStaticParamsLocale } from "next-international/server";
import ProfileLayout from "../../../../components/Profile/profileLayout";
import { getStaticParams } from "../../../../locales/server";
import { cookies } from "next/headers";

import { AUTH_COOKIE_KEY } from "../../../../constants";
import Modal from "../../../../components/layout/modal";
import Link from "next/link";
import { getPictureAction } from "../../../../actions";
import { getSession } from "@auth0/nextjs-auth0";

export function generateStaticParams() {
  return getStaticParams();
}

export default async function Profile({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);

  const session = await getSession();
  const user = session?.user;

  const picture = await getPictureAction(user?.sub);

  // redirect to homepage if user is unauthorized
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);

  if (!cookie) {
    return (
      <Modal>
        <div className="profile-unauthorized">
          <h2>Hold up</h2>
          <span>You need to be signed in to access this section</span>
          <Link href={"/"}>Go Back</Link>
        </div>
      </Modal>
    );
  }

  return <ProfileLayout picture={picture} />;
}
