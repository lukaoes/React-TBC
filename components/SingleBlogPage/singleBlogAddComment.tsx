"use client";
import { useEffect, useState } from "react";
import { Blog } from "../../types";
import AddBlogPicture from "../Blog/addBlogPicture";
import { useUser } from "@auth0/nextjs-auth0/client";
import { addBlogComment } from "../../actions";

interface IBlog {
  blogPost: Blog;
}

const SingleBlogAddComment = ({ blogPost }: IBlog) => {
  const { user } = useUser();
  const [blobUrl, setBlobUrl] = useState("");
  const [userId, setUserId] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [photoUrl, setPhotoUrl] = useState("");

  useEffect(() => {
    if (user && user.sub) {
      setUserId(user.sub);
    }
  }, [user]);

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleRatingClick = (ratingValue: number) => {
    setRating(ratingValue);
  };

  const handlePhotoUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!blobUrl) {
      setPhotoUrl(e.target.value);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      user_id: userId,
      blog_id: blogPost.id,
      comment,
      main_photo: blobUrl || photoUrl,
      rating,
    };

    try {
      await addBlogComment(formData);
      setComment("");
      setBlobUrl("");
      setPhotoUrl("");
      setRating(0);
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  if (!user || !user.sub) {
    return (
      <div className="single-blog-add-comment">
        კომენტარის დასატოვებლად გაიარეთ{" "}
        <a href="/api/auth/login" className="underline">
          ავტორიზაცია
        </a>
      </div>
    );
  }

  return (
    <div className="single-blog-add-comment">
      <h1>დატოვეთ კომენტარი</h1>
      <AddBlogPicture setBlobUrl={setBlobUrl} />
      <form onSubmit={handleSubmit} className="single-blog-add-comment-form">
        <div>
          <label htmlFor="comment">დაამატეთ კომენტარი</label>
          <textarea
            placeholder="დაწერეთ კომენტარი..."
            id="comment"
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="main_photo">სურათის URL</label>
          <input
            type="text"
            name="main_photo"
            id="main_photo"
            placeholder="ატვირთეთ ან ხელით ჩააკოპირეთ სურათის URL"
            value={blobUrl || photoUrl}
            onChange={handlePhotoUrlChange}
            disabled={!!blobUrl}
          />
        </div>
        <div className="blog-add-comment-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={`rating-stars-${star}`}
              onClick={() => handleRatingClick(star)}
              style={{
                cursor: "pointer",
                color: rating >= star ? "orange" : "gray",
                fontSize: rating >= star ? "1.5em" : "1em",
                transition: "color 0.2s, font-size 0.2s",
              }}
            >
              ⭐
            </span>
          ))}
        </div>
        <div className="add-comment-button">
          <button type="submit">დაკომენტარება</button>
        </div>
      </form>
    </div>
  );
};

export default SingleBlogAddComment;
