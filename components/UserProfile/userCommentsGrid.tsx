import { Comments } from "../../types";
import { FC } from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";

interface ICom {
  comments: Comments;
  user: string;
  userInfo: {
    sub: string;
    picture: string;
    email: string;
  };
}

const UserCommentsGrid: FC<ICom> = ({ comments, user, userInfo }) => {
  const generateStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push("⭐");
    }
    return stars.join("");
  };
  return (
    <div className="user-comments-card-container">
      {comments.map((comments: Comments, index: any) => (
        <>
          <Link href={`/blog/${comments.blog_id}`} className="underline">
            ბლოგის ნახვა
          </Link>
          <div className="user-comments-card" key={`comments-s-${index}`}>
            <Link href={`/user/${user}`}>
              <Image
                src={userInfo.picture}
                alt={user}
                width={200}
                height={200}
                className="user-comment-profile-image"
              />
            </Link>
            <div className="user-comment-info">
              <div>
                <Link href={`/user/${user}`}>{user}</Link>
                <span>
                  {generateStars(comments.rating)} {comments.rating}/5
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
        </>
      ))}
    </div>
  );
};

export default UserCommentsGrid;
