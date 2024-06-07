"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { addBlogPost } from "../../actions";

const AddBlogModal: React.FC = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [blogPost, setBlogPost] = useState("");
  const [mainPhoto, setMainPhoto] = useState("");
  const [id, setId] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const { user } = useUser();

  useEffect(() => {
    if (user && user.sub) {
      setId(user.sub);
    }
  }, [user]);

  const validateForm = () => {
    const errors: string[] = [];
    if (!category) errors.push("კატეგორია is required.");
    if (!title) errors.push("სათაური is required.");
    if (!mainPhoto) errors.push("სურათის URL is required.");
    if (!description) errors.push("ბლოგის მოკლე აღწერა is required.");
    if (!blogPost) errors.push("ბლოგ პოსტი is required.");
    setErrors(errors);
    return errors.length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateForm()) return;
    const blogData = {
      category: category,
      title: title,
      description: description,
      blog_post: blogPost,
      main_photo: mainPhoto,
      user_id: id,
    };
    await addBlogPost(blogData);
  };

  return (
    <form onSubmit={handleSubmit} className="add-blog-modal">
      <h1>ბლოგის დამატება</h1>
      {errors.length > 0 && (
        <ul>
          {errors.map((error, index) => (
            <li key={index} style={{ color: "red" }}>
              {error}
            </li>
          ))}
        </ul>
      )}
      <label htmlFor="category">კატეგორია</label>
      <select
        name="category"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">აირჩიეთ კატეგორია</option>
        <option value="ლაშქრობა">ლაშქრობა</option>
        <option value="პიკნიკი">პიკნიკი</option>
        <option value="აღჭურვილობა">აღჭურვილობა</option>
        <option value="თევზაობა">თევზაობა</option>
        <option value="უსაფრთხოება">უსაფრთხოება</option>
        <option value="ცოცვა">ცოცვა</option>
        <option value="ველოსპორტი">ველოსპორტი</option>
      </select>
      <label htmlFor="title">სათაური</label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="main_photo">სურათის URL</label>
      <input
        type="text"
        name="main_photo"
        id="main_photo"
        value={mainPhoto}
        onChange={(e) => setMainPhoto(e.target.value)}
      />
      <label htmlFor="description">ბლოგის მოკლე აღწერა</label>
      <textarea
        rows={3}
        name="description"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <label htmlFor="blog_post" className="blog_post">
        ბლოგ პოსტი <span>შეგიძლიათ Markdown-ის გამოყენება.</span>
      </label>
      <textarea
        rows={10}
        name="blog_post"
        id="blog_post"
        value={blogPost}
        onChange={(e) => setBlogPost(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddBlogModal;
