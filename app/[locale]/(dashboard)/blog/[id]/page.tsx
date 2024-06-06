import SingleBlogHeader from "../../../../../components/SingleBlogPage/singleBlogHeader";
import SingleBlogText from "../../../../../components/SingleBlogPage/singleBlogText";

const SingleBlogPage = ({ params }: { params: { id: string } }) => {
  const blogId = params.id;

  return (
    <div>
      <SingleBlogHeader />
      <SingleBlogText />
      <div>{blogId}</div>
    </div>
  );
};

export default SingleBlogPage;
