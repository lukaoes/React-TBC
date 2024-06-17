import { getBlogDisplay } from "../../../../actions";
import BlogLayout from "../../../../components/Blog/blogLayout";
import SecondHeader from "../../../../components/layout/secondHeader";
import { getI18n } from "../../../../locales/server";
import blogImage from "../../../../public/assets/images/secondHeader/blog.png";

const Blog = async () => {
  const displayBlogs = await getBlogDisplay();
  const t = await getI18n();
  return (
    <div>
      <SecondHeader title={t("blog.blog")} backgroundImage={blogImage} />
      <BlogLayout displayBlogs={displayBlogs} />
    </div>
  );
};

export default Blog;
