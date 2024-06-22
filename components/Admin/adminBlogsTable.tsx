"use client";
import React, { useState, useEffect } from "react";
import { deleteBlog, getBlogDisplay, getSingleBlog } from "../../actions";
import { Blog } from "../../types";
import BlogEditModal from "../modals/blogEditModal";

const AdminBlogsTable = () => {
  const [displayBlogs, setDisplayBlogs] = useState<Blog[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await getBlogDisplay();
      setDisplayBlogs(blogs);
    };

    fetchBlogs();
  }, []);

  const handleEditClick = async (id: number) => {
    const blog = await getSingleBlog(id.toString());
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const handleDeleteClick = async (id: number) => {
    try {
      await deleteBlog(id);
      // setDisplayProds((prevProds) =>
      //   prevProds.filter((prod) => prod.id !== id)
      // );
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };

  // const handleSave = (updatedProduct: Blog) => {
  //   setDisplayBlogs((prevBlogs) =>
  //     prevBlogs.map((prod) =>
  //       prod.id === updatedProduct.id ? updatedProduct : prod
  //     )
  //   );
  //   handleCloseModal();
  // };

  return (
    <div className="admin-table">
      <div className="row admin-table-header blue">
        <div className="cell">ID</div>
        <div className="cell">სახელი</div>
        <div className="cell">კატეგორია</div>
        <div className="cell">edit</div>
        <div className="cell">წაშლა</div>
      </div>
      {displayBlogs.map((product, index) => (
        <div className="row" key={`product-admin-${index}`}>
          <div className="cell" data-title="ID">
            {product.id}
          </div>
          <div className="cell" data-title="სახელი">
            {product.title}
          </div>
          <div className="cell" data-title="კატეგორია">
            {product.category}
          </div>
          <div className="cell" data-title="edit">
            <button onClick={() => handleEditClick(product.id)}>edit</button>
          </div>
          <div className="cell" data-title="წაშლა">
            <button onClick={() => handleDeleteClick(product.id)}>del</button>
          </div>
        </div>
      ))}
      {isModalOpen && selectedBlog && (
        // @ts-ignore
        <BlogEditModal blogPost={selectedBlog[0]} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default AdminBlogsTable;
