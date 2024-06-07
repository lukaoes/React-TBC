"use client";
import { useState } from "react";
import { Blog } from "../../types";
import AddBlogPicture from "../Blog/addBlogPicture";

interface IBlog {
  blogPost: Blog;
}

const SingleBlogAddComment = ({ blogPost }: IBlog) => {
  const [blobUrl, setBlobUrl] = useState("");

  return (
    <div>
      <div>
        <label htmlFor="comment">დაამატეთ კომენტარი</label>
        <textarea placeholder="დაწერეთ კომენტარი..." id="comment"></textarea>
      </div>
      <div>
        ატვირთეთ ფოტო
        <AddBlogPicture setBlobUrl={setBlobUrl} />
        <label htmlFor="main_photo">სურათის URL</label>
        <input
          type="text"
          name="main_photo"
          id="main_photo"
          value={blobUrl}
          disabled={!!blobUrl}
        />
      </div>
      <div>
        <span>⭐</span>
        <span>⭐</span>
        <span>⭐</span>
        <span>⭐</span>
        <span>⭐</span>
      </div>
    </div>
  );
};

export default SingleBlogAddComment;
