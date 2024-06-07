"use client";
import { useState } from "react";
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

  return (
    <div className="blog-layout">
      <BlogTopSection />
      <div className="blog-main-section">
        <BlogPostSection displayBlogs={filteredBlogs} />
        <BlogFilter
          displayBlogs={displayBlogs}
          setFilteredBlogs={setFilteredBlogs}
        />
      </div>
    </div>
  );
};

export default BlogLayout;
