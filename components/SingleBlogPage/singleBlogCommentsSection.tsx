import { getBlogComments } from "../../actions";
import { getI18n } from "../../locales/server";
import { Blog, Comments } from "../../types";
import UserCommentsCard from "./userCommentsCard";

interface IBlog {
  blogPost: Blog;
}

const SingleBlogCommentsSection = async ({ blogPost }: IBlog) => {
  const comments = await getBlogComments(String(blogPost.id));
  const t = await getI18n();
  return (
    <div className="single-blog-comments-section">
      <h1>
        {t("singleBlog.allComments")} ({comments.length}) :
      </h1>
      <div className="user-comments-card-container">
        {comments.map((comments: Comments, index: any) => (
          <UserCommentsCard key={`comments-${index}`} comments={comments} />
        ))}
      </div>
    </div>
  );
};

export default SingleBlogCommentsSection;
