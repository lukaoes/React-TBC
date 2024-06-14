import { setStaticParamsLocale } from "next-international/server";
import HomeHero from "../../../components/Home/homeHero";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);

  return (
    <main>
      <HomeHero />
    </main>
  );
}
