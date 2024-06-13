"use client";
import { useState } from "react";
import { Blog, CampsitesDisplay, ProductsDisplay, Review } from "../../types";
import UserBlogsGrid from "./userBlogsGrid";
import UserCampsitesGrid from "./userCampsitesGrid";
import UserCommentsGrid from "./userCommentsGrid";
import UserEverythingNav from "./userEverythingNav";
import UserProductsGrid from "./userProductsGrid";
import UserReviewsGrid from "./userReviewsGrid";

export interface IGrid {
  products: ProductsDisplay;
  blogs: Blog;
  campsites: CampsitesDisplay;
  comments: {
    id: number;
    user_id: string;
    blog_id: string;
    comment: string;
    main_photo: string;
    rating: number;
    created_at: string;
  };
  user: string;
  userInfo: {
    sub: string;
    picture: string;
    email: string;
  };
  reviews: Review;
  userProductsLength: number;
  userBlogsLength: number;
  userCommentsLength: number;
  userReviewsLength: number;
  userCampsitesLength: number;
}

const UserEverythingGrid = ({
  products,
  blogs,
  campsites,
  comments,
  userInfo,
  user,
  reviews,
  userProductsLength,
  userBlogsLength,
  userCommentsLength,
  userReviewsLength,
  userCampsitesLength,
}: IGrid) => {
  const [activeButton, setActiveButton] = useState("products");

  return (
    <div>
      <div>
        <UserEverythingNav
          setActiveButton={setActiveButton}
          activeButton={activeButton}
          userProductsLength={userProductsLength}
          userBlogsLength={userBlogsLength}
          userCommentsLength={userCommentsLength}
          userReviewsLength={userReviewsLength}
          userCampsitesLength={userCampsitesLength}
        />
      </div>
      {activeButton === "products" && (
        <div>
          <UserProductsGrid products={products} />
        </div>
      )}
      {activeButton === "blogs" && (
        <div>
          <UserBlogsGrid blogs={blogs} />
        </div>
      )}
      {activeButton === "campsites" && (
        <div>
          <UserCampsitesGrid campsites={campsites} />
        </div>
      )}
      {activeButton === "comments" && (
        <div>
          <UserCommentsGrid
            comments={comments}
            user={user}
            userInfo={userInfo}
          />
        </div>
      )}
      {activeButton === "reviews" && (
        <div>
          <UserReviewsGrid reviews={reviews} user={user} userInfo={userInfo} />
        </div>
      )}
    </div>
  );
};

export default UserEverythingGrid;
