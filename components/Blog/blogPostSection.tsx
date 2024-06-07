import { BlogsDisplay } from "../../types";
import MainBlogCard from "../cards/mainBlogCard";

const BlogPostSection = ({ displayBlogs }: any) => {
  return (
    <div className="blog-post-section">
      {displayBlogs.map((blog: BlogsDisplay, index: any) => (
        <div key={`main-blog-${index}`} className="post-grid-item">
          <MainBlogCard blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default BlogPostSection;
