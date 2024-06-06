import BlogLayout from "../../../../components/Blog/blogLayout";
import SecondHeader from "../../../../components/layout/secondHeader";
import blogImage from "../../../../public/assets/images/secondHeader/blog.webp";

const Blog = () => {
  return (
    <div>
      <SecondHeader title="ბლოგი" backgroundImage={blogImage} />
      <BlogLayout />
    </div>
  );
};

export default Blog;
