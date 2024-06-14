import { setStaticParamsLocale } from "next-international/server";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);

  return <main></main>;
}
