import { Blog } from "../../types";
import Markdown from "markdown-to-jsx";

interface IBlog {
  blogPost: Blog;
}

const SingleBlogText = ({ blogPost }: IBlog) => {
  return (
    <div className="single-blog-text">
      <div>
        <Markdown options={{ wrapper: "article" }}>
          {blogPost.blog_post}
        </Markdown>
      </div>
    </div>
  );
};

export default SingleBlogText;
