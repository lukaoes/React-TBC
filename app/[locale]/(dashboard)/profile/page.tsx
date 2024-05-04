import { setStaticParamsLocale } from "next-international/server";
import ProfileLayout from "../../../../components/Profile/profileLayout";
import { getStaticParams } from "../../../../locales/server";

export function generateStaticParams() {
  return getStaticParams()
}


export default async function Profile({ params: { locale } }: { params: { locale: string } }) {
  setStaticParamsLocale(locale)
  return <ProfileLayout />
}