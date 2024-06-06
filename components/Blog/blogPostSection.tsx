import { BlogsDisplay } from "../../types";
import MainBlogCard from "../cards/mainBlogCard";
interface IBlog {
  displayBlogs: BlogsDisplay;
}
const BlogPostSection = ({ displayBlogs }: IBlog) => {
  return (
    <div className="blog-post-section">
      {displayBlogs.map((blog, index) => (
        <div key={`main-blog-${index}`} className="post-grid-item">
          <MainBlogCard blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default BlogPostSection;
