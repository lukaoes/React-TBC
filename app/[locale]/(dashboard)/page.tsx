import { setStaticParamsLocale } from "next-international/server";
import HomeHero from "../../../components/Home/homeHero";
import HomeAbout from "../../../components/Home/homeAbout";
import HomeRoadmap from "../../../components/Home/HomeRoadmap";
import RecentProducts from "../../../components/Home/recentProducts";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);

  return (
    <main>
      <HomeHero />
      <HomeAbout />
      <HomeRoadmap />
      <RecentProducts />
    </main>
  );
}
