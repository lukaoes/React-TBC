import { getSingleCampsite } from "../../../../../actions";
import SingleCampAddReview from "../../../../../components/SingleCampsitePage/singleCampAddReview";
import SingleCampDescription from "../../../../../components/SingleCampsitePage/singleCampDescription";
import SingleCampHeader from "../../../../../components/SingleCampsitePage/singleCampHeader";
import SingleCampHost from "../../../../../components/SingleCampsitePage/singleCampHost";
import SingleCampImages from "../../../../../components/SingleCampsitePage/singleCampImages";
import SingleCampLocation from "../../../../../components/SingleCampsitePage/singleCampLocation";

const SingleCampsitePage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const singleCamp = await getSingleCampsite(id);
  const camp = singleCamp[0];
  return (
    <div className="single-campsite-page">
      <SingleCampHeader camp={camp} />
      <SingleCampImages camp={camp} />
      <SingleCampHost camp={camp} />
      <SingleCampDescription camp={camp} />
      <SingleCampLocation camp={camp} />
      <SingleCampAddReview camp={camp} />
    </div>
  );
};

export default SingleCampsitePage;
