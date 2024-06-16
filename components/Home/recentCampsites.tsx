import Link from "next/link";
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
          <h3>{t("newCampsites")}</h3>
        </div>
        <div>
          <Link href="/campsites">{t("seeAll")}</Link>
        </div>
      </div>
      <RecentCampsitesSlider campsites={campsites} />
    </div>
  );
};

export default RecentCampsites;
