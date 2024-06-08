import { getBlogComments } from "../../actions";
import { Blog, Comments } from "../../types";
import UserCommentsCard from "./userCommentsCard";

interface IBlog {
  blogPost: Blog;
}

const SingleBlogCommentsSection = async ({ blogPost }: IBlog) => {
  const comments = await getBlogComments(String(blogPost.id));
  return (
    <div className="single-blog-comments-section">
      <h1>ყველა კომენტარი ({comments.length}) :</h1>
      <div className="user-comments-card-container">
        {comments.map((comments: Comments, index: any) => (
          <UserCommentsCard key={`comments-${index}`} comments={comments} />
        ))}
      </div>
    </div>
  );
};

export default SingleBlogCommentsSection;
