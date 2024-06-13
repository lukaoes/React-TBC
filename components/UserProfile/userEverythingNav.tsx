interface UserEverythingNavProps {
  setActiveButton: (buttonName: string) => void;
  activeButton: string;
  userProductsLength: number;
  userBlogsLength: number;
  userCommentsLength: number;
  userReviewsLength: number;
  userCampsitesLength: number;
}

const UserEverythingNav = ({
  setActiveButton,
  activeButton,
  userProductsLength,
  userBlogsLength,
  userCommentsLength,
  userReviewsLength,
  userCampsitesLength,
}: UserEverythingNavProps) => {
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="user-everything-navigation">
      <button
        onClick={() => handleButtonClick("products")}
        className={activeButton === "products" ? "active" : ""}
      >
        პროდუქტები ({userProductsLength})
      </button>
      <button
        onClick={() => handleButtonClick("blogs")}
        className={activeButton === "blogs" ? "active" : ""}
      >
        ბლოგები ({userBlogsLength})
      </button>
      <button
        onClick={() => handleButtonClick("campsites")}
        className={activeButton === "campsites" ? "active" : ""}
      >
        საპიკნიკე ({userCampsitesLength})
      </button>
      <button
        onClick={() => handleButtonClick("comments")}
        className={activeButton === "comments" ? "active" : ""}
      >
        ბლოგის შეფასებები ({userCommentsLength})
      </button>
      <button
        onClick={() => handleButtonClick("reviews")}
        className={activeButton === "reviews" ? "active" : ""}
      >
        საპიკნიკეს განხილვები ({userReviewsLength})
      </button>
    </div>
  );
};

export default UserEverythingNav;
