import Link from "next/link";
import { getScopedI18n } from "../../locales/server";

const HomeRoadmap = async () => {
  const t = await getScopedI18n("main");

  return (
    <div>
      <div className="home-roadmap-container">
        <h2>{t("popularSections")}</h2>
        <div className="home-roadmap-sections">
          <Link href="/products">
            <div>
              <h2>{t("sectionProducts")}</h2>
              <p>{t("sectionProductsDesc")}</p>
            </div>
          </Link>
          <Link href="/campsites">
            <div>
              <h2>{t("sectionCamping")}</h2>
              <p>{t("sectionCampingDesc")}</p>
            </div>
          </Link>
          <Link href="/blog">
            <div>
              <h2>{t("sectionBlog")}</h2>
              <p>{t("sectionBlogDesc")}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeRoadmap;
