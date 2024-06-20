"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { addBlogPost } from "../../actions";
import AddBlogPicture from "../Blog/addBlogPicture";
import { useScopedI18n } from "../../locales/client";

const AddBlogModal: React.FC = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [blogPost, setBlogPost] = useState("");
  const [mainPhoto, setMainPhoto] = useState("");
  const [blobUrl, setBlobUrl] = useState("");
  const [id, setId] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { user } = useUser();
  const t = useScopedI18n("addBlog");

  useEffect(() => {
    if (user && user.sub) {
      setId(user.sub);
    }
  }, [user]);

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!category) errors.category = `${t("category")} აუცილებელია.`;
    if (!title) errors.title = `${t("title")} აუცილებელია.`;
    if (!mainPhoto && !blobUrl)
      errors.mainPhoto = `${t("imageUrl")} აუცილებელია.`;
    if (!description) {
      errors.description = `${t("shortDesc")} აუცილებელია.`;
    } else if (description.length > 200) {
      errors.description = "მაქსიმუმი სიმბოლოების რაოდენობა: 200.";
    }
    if (!blogPost) errors.blogPost = `${t("blogPost")} აუცილებელია.`;
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateForm()) return;
    const blogData = {
      category,
      title,
      description,
      blog_post: blogPost,
      main_photo: blobUrl || mainPhoto,
      user_id: id,
    };
    await addBlogPost(blogData);
    setCategory("");
    setTitle("");
    setDescription("");
    setBlogPost("");
    setMainPhoto("");
    setBlobUrl("");
  };

  return (
    <div className="add-blog-modal">
      <h1>{t("addBlog")}</h1>
      <AddBlogPicture setBlobUrl={setBlobUrl} />
      <form onSubmit={handleSubmit} className="add-blog-modal-form">
        <label htmlFor="category">{t("category")}</label>
        <select
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">{t("chooseCategory")}</option>
          <option value="ლაშქრობა">ლაშქრობა</option>
          <option value="პიკნიკი">პიკნიკი</option>
          <option value="აღჭურვილობა">აღჭურვილობა</option>
          <option value="თევზაობა">თევზაობა</option>
          <option value="უსაფრთხოება">უსაფრთხოება</option>
          <option value="ცოცვა">ცოცვა</option>
          <option value="ველოსპორტი">ველოსპორტი</option>
        </select>
        {errors.category && <p style={{ color: "red" }}>{errors.category}</p>}

        <label htmlFor="title">{t("title")}</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder={t("writeBlogTitle")}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}

        <label htmlFor="main_photo">{t("imageUrl")}</label>
        <input
          type="text"
          name="main_photo"
          id="main_photo"
          placeholder={t("uploadOrPasteUrl")}
          value={blobUrl || mainPhoto}
          onChange={(e) => setMainPhoto(e.target.value)}
          disabled={!!blobUrl}
        />
        {errors.mainPhoto && <p style={{ color: "red" }}>{errors.mainPhoto}</p>}

        <label htmlFor="description">{t("shortDesc")}</label>
        <textarea
          rows={3}
          name="description"
          id="description"
          value={description}
          placeholder={t("writeShortDesc")}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        {errors.description && (
          <p style={{ color: "red" }}>{errors.description}</p>
        )}

        <label htmlFor="blog_post" className="blog_post">
          {t("blogPost")} <span>{t("markdownIsSupported")}</span>
        </label>
        <textarea
          rows={10}
          name="blog_post"
          id="blog_post"
          placeholder={t("writeTextInMarkdown")}
          value={blogPost}
          onChange={(e) => setBlogPost(e.target.value)}
        />
        {errors.blogPost && <p style={{ color: "red" }}>{errors.blogPost}</p>}

        <button type="submit">{t("add")}</button>
      </form>
    </div>
  );
};

export default AddBlogModal;
