import Image from "next/image";
import { getScopedI18n } from "../../locales/server";

interface IUser {
  user: string;
  userInfo: {
    sub: string;
    picture: string;
    email: string;
  };
  userProductsLength: number;
  userBlogsLength: number;
  userCommentsLength: number;
  userReviewsLength: number;
  userCampsitesLength: number;
}

const UserProfileInfo = async ({
  userInfo,
  user,
  userProductsLength,
  userBlogsLength,
  userCommentsLength,
  userReviewsLength,
  userCampsitesLength,
}: IUser) => {
  const t = await getScopedI18n("userProfile");
  return (
    <div className="user-profile-info">
      <div className="user-profile-info-image">
        <Image src={userInfo.picture} alt={user} width={400} height={400} />
        <div>
          <h1>{user}</h1>
          <p>{userInfo.email}</p>
        </div>
      </div>
      <div className="user-profile-info-counter">
        <h3>
          {t("products")}: <span>{userProductsLength}</span>
        </h3>
        <h3>
          {t("campsites")}: <span>{userCampsitesLength}</span>
        </h3>
        <h3>
          {t("blogs")}: <span>{userBlogsLength}</span>
        </h3>
        <h3>
          {t("blogReviews")}: <span>{userCommentsLength}</span>
        </h3>
        <h3>
          {t("campsiteReviews")}: <span>{userReviewsLength}</span>
        </h3>
      </div>
    </div>
  );
};

export default UserProfileInfo;
