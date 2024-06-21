import { getI18n } from "../../locales/server";

const HomeHero = async () => {
  const t = await getI18n();
  return (
    <>
      <section className="home-hero-desktop">
        <div className="home-hero-layout">
          <h1>{t("main.exploreGeorgia")}</h1>
        </div>
      </section>
      <section className="home-hero-mobile">
        <div className="home-hero-layout">
          <h1>{t("main.exploreGeorgia")}</h1>
        </div>
      </section>
    </>
  );
};

export default HomeHero;
