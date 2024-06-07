import { getSingleBlog } from "../../../../../actions";
import SingleBlogAddComment from "../../../../../components/SingleBlogPage/singleBlogAddComment";
import SingleBlogFooter from "../../../../../components/SingleBlogPage/singleBlogFooter";
import SingleBlogHeader from "../../../../../components/SingleBlogPage/singleBlogHeader";
import SingleBlogText from "../../../../../components/SingleBlogPage/singleBlogText";

const SingleBlogPage = async ({ params }: { params: { id: string } }) => {
  const blogId = params.id;
  const singBlog = await getSingleBlog(blogId);
  const blogPost = singBlog[0];
  return (
    <div>
      <SingleBlogHeader blogPost={blogPost} />
      <SingleBlogText blogPost={blogPost} />
      <SingleBlogFooter blogPost={blogPost} />
      <SingleBlogAddComment blogPost={blogPost} />
    </div>
  );
};

export default SingleBlogPage;
