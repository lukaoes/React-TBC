import { FC } from "react";
import { Campsite } from "../../types";
import { getI18n } from "../../locales/server";

interface ICamp {
  camp: Campsite;
}

const SingleCampLocation: FC<ICamp> = async ({ camp }) => {
  const t = await getI18n();
  return (
    <div className="single-camp-location">
      {camp.map ? (
        <>
          <h3>{t("singleCamp.locationOnMap")}</h3>
          <div
            className="Container"
            dangerouslySetInnerHTML={{ __html: camp.map }}
          ></div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default SingleCampLocation;
