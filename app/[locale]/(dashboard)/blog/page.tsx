import { getBlogDisplay } from "../../../../actions";
import BlogLayout from "../../../../components/Blog/blogLayout";
import SecondHeader from "../../../../components/layout/secondHeader";
import blogImage from "../../../../public/assets/images/secondHeader/blog.png";

const Blog = async () => {
  const displayBlogs = await getBlogDisplay();
  return (
    <div>
      <SecondHeader title="ბლოგი" backgroundImage={blogImage} />
      <BlogLayout displayBlogs={displayBlogs} />
    </div>
  );
};

export default Blog;
