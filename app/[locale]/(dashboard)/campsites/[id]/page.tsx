import SingleCampHeader from "../../../../../components/SingleCampsitePage/singleCampHeader";
import SingleCampImages from "../../../../../components/SingleCampsitePage/singleCampImages";

const SingleCampsitePage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div className="single-campsite-page">
      <SingleCampHeader />
      <SingleCampImages />
    </div>
  );
};

export default SingleCampsitePage;
