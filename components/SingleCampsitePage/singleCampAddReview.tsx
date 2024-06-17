"use client";
import { useEffect, useState } from "react";
import { Campsite } from "../../types";
import AddBlogPicture from "../Blog/addBlogPicture";
import { useUser } from "@auth0/nextjs-auth0/client";
import { addCampReview } from "../../actions";
import { useScopedI18n } from "../../locales/client";

interface ICamp {
  camp: Campsite;
}

const SingleCampAddReview = ({ camp }: ICamp) => {
  const { user } = useUser();
  const [blobUrl, setBlobUrl] = useState("");
  const [userId, setUserId] = useState("");
  const [review, setReview] = useState("");
  const [recommended, setRecommended] = useState(true);
  const [photoUrl, setPhotoUrl] = useState("");
  const [photoError, setPhotoError] = useState("");
  const t = useScopedI18n("singleCamp");

  useEffect(() => {
    if (user && user.sub) {
      setUserId(user.sub);
    }
  }, [user]);

  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const handlePhotoUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    if (!blobUrl) {
      setPhotoUrl(url);
      if (url && !url.startsWith("https://") && !url.startsWith("http://")) {
        setPhotoError("Image URL is not correct");
      } else {
        setPhotoError("");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      photoUrl &&
      !photoUrl.startsWith("https://") &&
      !photoUrl.startsWith("http://")
    ) {
      setPhotoError("Image URL is not correct");
      return;
    }

    const formData = {
      user_id: userId,
      campsite_id: camp.id,
      review,
      main_photo: blobUrl || photoUrl,
      recommended,
    };

    try {
      await addCampReview(formData);
      setReview("");
      setBlobUrl("");
      setPhotoUrl("");
      setRecommended(true);
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  if (!user || !user.sub) {
    return (
      <div className="single-blog-add-comment">
        {t("loginOne")}{" "}
        <a href="/api/auth/login" className="underline">
          {t("loginTwo")}
        </a>
      </div>
    );
  }

  return (
    <div className="single-camp-add-review">
      <h1>{t("addReview")}</h1>
      <AddBlogPicture setBlobUrl={setBlobUrl} />
      <form onSubmit={handleSubmit} className="single-blog-add-comment-form">
        <div>
          <label htmlFor="review">{t("writeReview")}</label>
          <textarea
            placeholder={t("writeReviewHere")}
            id="review"
            value={review}
            onChange={handleReviewChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="main_photo">{t("imageURL")}</label>
          <input
            type="text"
            name="main_photo"
            id="main_photo"
            placeholder={t("uploadOrPasteUrl")}
            value={blobUrl || photoUrl}
            onChange={handlePhotoUrlChange}
            disabled={!!blobUrl}
          />
          {photoError && <span className="error-message">{photoError}</span>}
        </div>
        <div className="campsite-add-recommend">
          <div
            className={recommended ? "camp-recommend" : ""}
            onClick={() => setRecommended(true)}
          >
            {t("recommended")}
          </div>
          <div
            className={!recommended ? "camp-recommend" : ""}
            onClick={() => setRecommended(false)}
          >
            {t("notRecommended")}
          </div>
        </div>
        <div className="add-comment-button">
          <button type="submit">{t("comment")}</button>
        </div>
      </form>
    </div>
  );
};

export default SingleCampAddReview;
