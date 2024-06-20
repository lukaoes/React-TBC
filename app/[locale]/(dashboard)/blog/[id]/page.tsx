import { getSingleBlog } from "../../../../../actions";
import SingleBlogAddComment from "../../../../../components/SingleBlogPage/singleBlogAddComment";
import SingleBlogCommentsSection from "../../../../../components/SingleBlogPage/singleBlogCommentsSection";
import SingleBlogFooter from "../../../../../components/SingleBlogPage/singleBlogFooter";
import SingleBlogHeader from "../../../../../components/SingleBlogPage/singleBlogHeader";
import SingleBlogText from "../../../../../components/SingleBlogPage/singleBlogText";
import NotFoundPage from "../../not-found";

const SingleBlogPage = async ({ params }: { params: { id: string } }) => {
  const blogId = params.id;
  const singBlog = await getSingleBlog(blogId);
  if (!singBlog || singBlog.length === 0 || !singBlog[0]) {
    return <NotFoundPage />;
  }
  const blogPost = singBlog[0];
  return (
    <div>
      <SingleBlogHeader blogPost={blogPost} />
      <SingleBlogText blogPost={blogPost} />
      <SingleBlogFooter blogPost={blogPost} />
      <SingleBlogAddComment blogPost={blogPost} />
      <SingleBlogCommentsSection blogPost={blogPost} />
    </div>
  );
};

export default SingleBlogPage;
