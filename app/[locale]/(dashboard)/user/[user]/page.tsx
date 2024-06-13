import { getEverythingByNicknameAction } from "../../../../../actions";
import UserEverythingGrid from "../../../../../components/UserProfile/userEverythingGrid";
import UserProfileInfo from "../../../../../components/UserProfile/userProfileInfo";

const UserProfile = async ({ params }: { params: { user: string } }) => {
  const user = params.user;
  const everything = await getEverythingByNicknameAction(user);
  if (!everything || Object.keys(everything).length === 0) {
    return <h1>ეს მომხმარებელი არ არსებობს</h1>;
  }
  const userInfo = everything.user;
  const userProducts = everything.products;
  const userBlogs = everything.blogs;
  const userCampsites = everything.campsites;
  const userComments = everything.comments;
  const userReviews = everything.reviews;
  return (
    <div className="user-profile-layout">
      <UserProfileInfo
        userInfo={userInfo}
        user={user}
        userProductsLength={userProducts.length}
        userBlogsLength={userBlogs.length}
        userCommentsLength={userComments.length}
        userReviewsLength={userReviews.length}
        userCampsitesLength={userCampsites.length}
      />
      <UserEverythingGrid
        products={userProducts}
        blogs={userBlogs}
        campsites={userCampsites}
        comments={userComments}
        userInfo={userInfo}
        user={user}
        reviews={userReviews}
        userProductsLength={userProducts.length}
        userBlogsLength={userBlogs.length}
        userCommentsLength={userComments.length}
        userReviewsLength={userReviews.length}
        userCampsitesLength={userCampsites.length}
      />
    </div>
  );
};

export default UserProfile;
