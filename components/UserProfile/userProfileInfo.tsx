import Image from "next/image";

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

const UserProfileInfo = ({
  userInfo,
  user,
  userProductsLength,
  userBlogsLength,
  userCommentsLength,
  userReviewsLength,
  userCampsitesLength,
}: IUser) => {
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
          პროდუქტები: <span>{userProductsLength}</span>
        </h3>
        <h3>
          საპიკნიკეები: <span>{userCampsitesLength}</span>
        </h3>
        <h3>
          ბლოგები: <span>{userBlogsLength}</span>
        </h3>
        <h3>
          ბლოგის განხილვები: <span>{userCommentsLength}</span>
        </h3>
        <h3>
          საპიკნიკეების შეფასებები: <span>{userReviewsLength}</span>
        </h3>
      </div>
    </div>
  );
};

export default UserProfileInfo;
