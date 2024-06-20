import Image from "next/image";
import { Link } from "next-view-transitions";
import { Comments } from "../../types";
import { getNicknameAction, getPictureAction } from "../../actions";
import SingleBlogCommentDel from "./singleBlogCommentDel";

interface IComment {
  comments: Comments;
}

const UserCommentsCard = async ({ comments }: IComment) => {
  const nickname = await getNicknameAction(comments.user_id);
  const userPic = await getPictureAction(comments.user_id);

  const generateStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push("⭐");
    }
    return stars.join("");
  };
  return (
    <div className="user-comments-card">
      <Link href={`/user/${nickname[0].nickname}`}>
        <Image
          src={userPic[0].picture}
          alt={nickname[0].nickname}
          width={200}
          height={200}
          className="user-comment-profile-image"
        />
      </Link>
      <div className="user-comment-info">
        <div>
          <Link href={`/user/${nickname[0].nickname}`}>
            {nickname[0].nickname}
          </Link>
          <span>
            {generateStars(comments.rating)} {comments.rating}/5
          </span>
          <span>
            <SingleBlogCommentDel comments={comments} />
          </span>
        </div>
        <h4>{comments.created_at.slice(0, 10)}</h4>
        <p>{comments.comment}</p>
        {comments.main_photo && (
          <Image
            src={comments.main_photo}
            alt={comments.comment}
            width={280}
            height={280}
            className="user-comment-image"
          />
        )}
      </div>
    </div>
  );
};

export default UserCommentsCard;
