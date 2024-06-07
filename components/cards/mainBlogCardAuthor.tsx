import Link from "next/link";
import { useEffect, useState } from "react";
import { getNicknameAction } from "../../actions";

interface Nickname {
  nickname: string;
}

const MainBlogCardAuthor = ({ blog }: any) => {
  const userId = blog.user_id;
  const [nickname, setNickname] = useState<Nickname[]>([]);

  useEffect(() => {
    const fetchNickname = async () => {
      const result: Nickname[] = await getNicknameAction(userId);
      setNickname(result);
    };

    fetchNickname();
  }, [blog, userId]);

  return (
    <h3>
      {nickname.length > 0 && (
        <>
          ავტორი:{" "}
          <Link href={`/user/${nickname[0].nickname}`}>
            {nickname[0].nickname}
          </Link>
        </>
      )}
    </h3>
  );
};

export default MainBlogCardAuthor;
