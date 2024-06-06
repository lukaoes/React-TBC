import { getSingleBlog } from "../../../../../actions";
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
      <div>{blogId}</div>
    </div>
  );
};

export default SingleBlogPage;
