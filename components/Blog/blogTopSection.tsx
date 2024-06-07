import AddBlogButton from "./addBlogButton";

const BlogTopSection = () => {
  return (
    <div className="blog-top-section">
      <div>
        <span>ყველა ბლოგი</span>
        <AddBlogButton />
      </div>
      <div>ფილტრი</div>
    </div>
  );
};

export default BlogTopSection;
