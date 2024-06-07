import Image from "next/image";
import { Blog } from "../../types";
import SingleBlogHeaderAuthor from "./singleBlogHeaderAuthor";

interface IBlog {
  blogPost: Blog;
}
const SingleBlogHeader = ({ blogPost }: IBlog) => {
  return (
    <div className="single-blog-header">
      <div className="single-blog-header-top">
        <h1>{blogPost.title}</h1>
        <div>
          <span>{blogPost.created_at.slice(0, 10)}</span>
          <SingleBlogHeaderAuthor blogPost={blogPost} />
        </div>
      </div>
      <div className="blog-header-container">
        <Image
          src={blogPost.main_photo}
          width={1400}
          height={700}
          alt="nature"
        />
      </div>
      <p>{blogPost.description}</p>
    </div>
  );
};

export default SingleBlogHeader;
