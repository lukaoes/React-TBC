import BlogFilter from "./blogFilter";
import BlogPostSection from "./blogPostSection";
import BlogTopSection from "./blogTopSection";

const BlogLayout = () => {
  return (
    <div className="blog-layout">
      <BlogTopSection />
      <div className="blog-main-section">
        <BlogPostSection />
        <BlogFilter />
      </div>
    </div>
  );
};

export default BlogLayout;
