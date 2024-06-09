import CampsiteAds from "./campsiteAds";
import CampsiteSearchFilter from "./campsiteSearchFilter";

const CampsiteLayout = () => {
  return (
    <>
      <CampsiteSearchFilter />
      <div className="campsites-container">
        <div>
          <CampsiteAds />
        </div>
      </div>
    </>
  );
};

export default CampsiteLayout;
