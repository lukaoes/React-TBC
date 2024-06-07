"use client";
import { useState } from "react";
import { updateBlogAction } from "../../actions";
import { Blog } from "../../types";

interface BlogEditModalProps {
  blogPost: Blog;
  onClose: () => void;
}

const BlogEditModal = ({ blogPost, onClose }: BlogEditModalProps) => {
  const [formData, setFormData] = useState<Blog>({ ...blogPost });
  const [error, setError] = useState<string | null>(null);

  const categories = [
    "ლაშქრობა",
    "პიკნიკი",
    "აღჭურვილობა",
    "თევზაობა",
    "უსაფრთხოება",
    "ცოცვა",
    "ველოსპორტი",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateBlogAction(formData);
      onClose(); // Close the modal after a successful update
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <>
      <div
        className="main-product-card-modal-container-bg"
        onClick={onClose}
      ></div>
      <div className="blog-edit-modal">
        <div className="blog-edit-modal-content">
          <h2>ბლოგის რედაქტირება</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form onSubmit={handleFormSubmit}>
            <div>
              <label>სათაური</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>კატეგორია</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>ფოტოს URL</label>
              <input
                type="text"
                name="main_photo"
                value={formData.main_photo}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>მოკლე აღწერა</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>ბლოგ პოსტი</label>
              <textarea
                rows={10}
                name="blog_post"
                value={formData.blog_post}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="blog-edit-modal-buttons">
              <button type="button" onClick={onClose}>
                დახურვა
              </button>
              <button type="submit">ცვლილებების შენახვა</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BlogEditModal;
