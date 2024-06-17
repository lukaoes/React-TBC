"use client";
import { useState, useEffect } from "react";
import BlogPageRecentCard from "../cards/blogPageRecentCard";
import { BlogsDisplay } from "../../types";
import { useI18n } from "../../locales/client";

interface BlogFilterProps {
  displayBlogs: BlogsDisplay;
  setFilteredBlogs: (blogs: BlogsDisplay) => void;
  openFilter: boolean;
}

const BlogFilter = ({
  displayBlogs,
  setFilteredBlogs,
  openFilter,
}: BlogFilterProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ყველა");
  const t = useI18n();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const filteredBlogs = displayBlogs.filter((blog) => {
      const matchesCategory =
        selectedCategory === "ყველა" || blog.category === selectedCategory;
      const matchesSearch = blog.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    setFilteredBlogs(filteredBlogs);
  }, [searchQuery, selectedCategory, displayBlogs, setFilteredBlogs]);

  const getCategoryCount = (category: string) => {
    return category === "ყველა"
      ? displayBlogs.length
      : displayBlogs.filter((blog) => blog.category === category).length;
  };

  const categories = [
    "ყველა",
    "ლაშქრობა",
    "პიკნიკი",
    "აღჭურვილობა",
    "თევზაობა",
    "უსაფრთხოება",
    "ცოცვა",
    "ველოსპორტი",
  ];

  return (
    <div className={`blog-filter ${openFilter ? "active" : ""}`}>
      <div className="blog-filter-search">
        <h2>{t("blog.search")}</h2>
        <input
          type="text"
          name="search"
          placeholder={`${t("blog.search")}...`}
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.58317 17.4998C13.9554 17.4998 17.4998 13.9554 17.4998 9.58317C17.4998 5.21092 13.9554 1.6665 9.58317 1.6665C5.21092 1.6665 1.6665 5.21092 1.6665 9.58317C1.6665 13.9554 5.21092 17.4998 9.58317 17.4998Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.3332 18.3332L16.6665 16.6665"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <h2>{t("blog.category")}</h2>
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => handleCategorySelect(category)}
              style={{
                cursor: "pointer",
                fontWeight: selectedCategory === category ? "bold" : "normal",
              }}
            >
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_45_18679)">
                    <path
                      d="M9.395 2.84912L8.8129 3.50763L13.933 8.03367H0.5V8.91258H13.933L8.8129 13.4386L9.395 14.0971L15.5 8.7005V8.24575L9.395 2.84912Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_45_18679">
                      <rect
                        width="15"
                        height="15"
                        fill="white"
                        transform="translate(0.5 0.973145)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                {category}
              </div>
              <span>({getCategoryCount(category)})</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>{t("blog.latestPosts")}</h2>
        <div className="blog-filter-recent-posts">
          {displayBlogs.slice(0, 3).map((blog, index) => (
            <BlogPageRecentCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogFilter;
