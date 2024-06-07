"use client";
import { useEffect, useState } from "react";
import { BlogsDisplay } from "../../types";
import BlogFilter from "./blogFilter";
import BlogPostSection from "./blogPostSection";
import BlogTopSection from "./blogTopSection";

interface IBlog {
  displayBlogs: BlogsDisplay;
}

const BlogLayout = ({ displayBlogs }: IBlog) => {
  const [filteredBlogs, setFilteredBlogs] =
    useState<BlogsDisplay>(displayBlogs);
  const [openFilter, setOpenFilter] = useState(false);

  const toggleFilter = () => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      setOpenFilter((prevState) => !prevState);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth > 768) {
      setOpenFilter(false);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth <= 768) {
        setOpenFilter(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="blog-layout">
      <BlogTopSection toggleFilter={toggleFilter} />
      {openFilter &&
        window.innerWidth <= 768 &&
        typeof window !== "undefined" && (
          <div
            className="main-product-card-modal-container-bg"
            onClick={() => setOpenFilter(false)}
          ></div>
        )}
      <div className="blog-main-section">
        <BlogPostSection displayBlogs={filteredBlogs} />
        <BlogFilter
          displayBlogs={displayBlogs}
          setFilteredBlogs={setFilteredBlogs}
          openFilter={openFilter}
        />
      </div>
    </div>
  );
};

export default BlogLayout;
