import SingleCampHeader from "../../../../../components/SingleCampsitePage/singleCampHeader";

const SingleCampsitePage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div className="single-campsite-page">
      <SingleCampHeader />
      <div>{id}</div>
    </div>
  );
};

export default SingleCampsitePage;
