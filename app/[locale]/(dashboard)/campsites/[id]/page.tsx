import { getCampReviews, getSingleCampsite } from "../../../../../actions";
import SingleCampAddReview from "../../../../../components/SingleCampsitePage/singleCampAddReview";
import SingleCampDescription from "../../../../../components/SingleCampsitePage/singleCampDescription";
import SingleCampHeader from "../../../../../components/SingleCampsitePage/singleCampHeader";
import SingleCampHost from "../../../../../components/SingleCampsitePage/singleCampHost";
import SingleCampImages from "../../../../../components/SingleCampsitePage/singleCampImages";
import SingleCampLocation from "../../../../../components/SingleCampsitePage/singleCampLocation";
import SingleCampReviews from "../../../../../components/SingleCampsitePage/singleCampReviews";
import { Review } from "../../../../../types";
import NotFoundPage from "../../not-found";

const SingleCampsitePage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const singleCamp = await getSingleCampsite(id);
  if (!singleCamp || singleCamp.length === 0 || !singleCamp[0]) {
    return <NotFoundPage />;
  }
  const camp = singleCamp[0];

  const review = await getCampReviews(String(camp.id));

  const calculateSatisfactionPercentage = (review: Review[]): number => {
    const totalReviews = review.length;
    const recommendedReviews = review.filter(
      (review) => review.recommended
    ).length;
    return (recommendedReviews / totalReviews) * 100;
  };

  const satisfactionPercentage = calculateSatisfactionPercentage(review);
  const reviewCount = review.length;

  return (
    <div className="single-campsite-page">
      <SingleCampHeader
        camp={camp}
        satisfactionPercentage={satisfactionPercentage}
        reviewCount={reviewCount}
      />
      <SingleCampImages camp={camp} />
      <SingleCampHost camp={camp} />
      <SingleCampDescription camp={camp} />
      <SingleCampLocation camp={camp} />
      <SingleCampAddReview camp={camp} />
      <SingleCampReviews
        review={review}
        satisfactionPercentage={satisfactionPercentage}
        reviewCount={reviewCount}
      />
    </div>
  );
};

export default SingleCampsitePage;
