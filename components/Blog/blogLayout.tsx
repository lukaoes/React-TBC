import { BlogsDisplay } from "../../types";
import BlogFilter from "./blogFilter";
import BlogPostSection from "./blogPostSection";
import BlogTopSection from "./blogTopSection";

interface IBlog {
  displayBlogs: BlogsDisplay;
}

const BlogLayout = ({ displayBlogs }: IBlog) => {
  return (
    <div className="blog-layout">
      <BlogTopSection />
      <div className="blog-main-section">
        <BlogPostSection displayBlogs={displayBlogs} />
        <BlogFilter />
      </div>
    </div>
  );
};

export default BlogLayout;
