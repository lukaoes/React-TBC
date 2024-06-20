import { Link } from "next-view-transitions";
import RecentCampsitesSlider from "./recentCampsitesSlider";
import { getCampsitesDisplay } from "../../actions";
import { getScopedI18n } from "../../locales/server";

const RecentCampsites = async () => {
  const t = await getScopedI18n("main");
  const campsites = await getCampsitesDisplay();
  return (
    <div className="home-recent-products-container">
      <div className="recent-products-header">
        <div>
          <h1>აღმოაჩინე</h1>
          <h3>{t("newCampsites")}</h3>
        </div>
        <div></div>
      </div>
      <RecentCampsitesSlider campsites={campsites} />
      <div className="home-see-all">
        <Link href="/products">{t("seeAll")}</Link>
      </div>
    </div>
  );
};

export default RecentCampsites;
