import { FC } from "react";
import { Campsite } from "../../types";

interface ICamp {
  camp: Campsite;
}

const SingleCampLocation: FC<ICamp> = ({ camp }) => {
  return (
    <div className="single-camp-location">
      {camp.map ? (
        <>
          <h3>ლოკაცია რუკაზე</h3>
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
