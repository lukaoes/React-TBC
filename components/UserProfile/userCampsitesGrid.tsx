import { FC } from "react";
import { CampsitesDisplay } from "../../types";
import CampsiteCard from "../cards/campsiteCard";

interface ICamp {
  campsites: CampsitesDisplay;
}

const UserCampsitesGrid: FC<ICamp> = ({ campsites }) => {
  return (
    <div className="user-profile-products-grid">
      {campsites.map((camp: CampsitesDisplay, index: number) => (
        <div key={`prof-camspites-${index}`}>
          <CampsiteCard camp={camp} />
        </div>
      ))}
    </div>
  );
};

export default UserCampsitesGrid;
