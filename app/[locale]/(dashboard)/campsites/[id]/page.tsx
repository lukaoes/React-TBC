import SingleCampHeader from "../../../../../components/SingleCampsitePage/singleCampHeader";
import SingleCampHost from "../../../../../components/SingleCampsitePage/singleCampHost";
import SingleCampImages from "../../../../../components/SingleCampsitePage/singleCampImages";

const SingleCampsitePage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div className="single-campsite-page">
      <SingleCampHeader />
      <SingleCampImages />
      <SingleCampHost />
    </div>
  );
};

export default SingleCampsitePage;
