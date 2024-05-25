import { setStaticParamsLocale } from "next-international/server";
import ProfileLayout from "../../../../components/Profile/profileLayout";
import { getStaticParams } from "../../../../locales/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_COOKIE_KEY } from "../../../../constants";

export function generateStaticParams() {
  return getStaticParams()
}


export default async function Profile({ params: { locale } }: { params: { locale: string } }) {

  // redirect to homepage if user is unauthorized
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);

  if (!cookie) {
    redirect("/");
  }

  setStaticParamsLocale(locale)
  return <ProfileLayout />
}