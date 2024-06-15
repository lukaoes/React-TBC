import Link from "next/link";
import RecentCampsitesSlider from "./recentCampsitesSlider";
import { getCampsitesDisplay } from "../../actions";

const RecentCampsites = async () => {
  const campsites = await getCampsitesDisplay();
  return (
    <div className="home-recent-products-container">
      <div className="recent-products-header">
        <div>
          <h3>ახალი საპიკნიკეები</h3>
        </div>
        <div>
          <Link href="/campsites">ყველას ნახვა</Link>
        </div>
      </div>
      <RecentCampsitesSlider campsites={campsites} />
    </div>
  );
};

export default RecentCampsites;
