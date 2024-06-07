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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Edit Blog Post</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Main Photo URL</label>
            <input
              type="text"
              name="main_photo"
              value={formData.main_photo}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Blog Post</label>
            <textarea
              name="blog_post"
              value={formData.blog_post}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default BlogEditModal;
