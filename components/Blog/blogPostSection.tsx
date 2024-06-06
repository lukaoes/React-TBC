import MainBlogCard from "../cards/mainBlogCard";

const BlogPostSection = () => {
  return (
    <div className="blog-post-section">
      <div className="post-grid-item">
        <MainBlogCard />
      </div>
      <div className="post-grid-item">
        <MainBlogCard />
      </div>
      <div className="post-grid-item">
        <MainBlogCard />
      </div>{" "}
      <div className="post-grid-item">
        <MainBlogCard />
      </div>{" "}
      <div className="post-grid-item">
        <MainBlogCard />
      </div>
    </div>
  );
};

export default BlogPostSection;
