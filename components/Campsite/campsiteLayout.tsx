import { FC } from "react";
import { CampsitesDisplay } from "../../types";
import CampsiteAds from "./campsiteAds";
import CampsiteSearchFilter from "./campsiteSearchFilter";

interface ICamps {
  displayCamps: CampsitesDisplay;
}

const CampsiteLayout: FC<ICamps> = ({ displayCamps }) => {
  return (
    <>
      <CampsiteSearchFilter />
      <div className="campsites-container">
        <div>
          <CampsiteAds displayCamps={displayCamps} />
        </div>
      </div>
    </>
  );
};

export default CampsiteLayout;
