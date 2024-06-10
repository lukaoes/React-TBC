import { FC } from "react";
import { CampsitesDisplay } from "../../types";
import CampsiteCard from "../cards/campsiteCard";

interface ICamps {
  displayCamps: CampsitesDisplay;
}

const CampsiteAds: FC<ICamps> = ({ displayCamps }) => {
  return (
    <div className="campsite-ads-container">
      {displayCamps.map((item: CampsitesDisplay, index: number) => (
        <div className="campsite-ad-item" key={`campsite-ad-item-${index}`}>
          <CampsiteCard camp={item} />
        </div>
      ))}
    </div>
  );
};

export default CampsiteAds;
