import { Link } from "next-view-transitions";
import { useEffect, useState } from "react";
import { getNicknameAction } from "../../actions";
import { useI18n } from "../../locales/client";

interface Nickname {
  nickname: string;
}

const MainBlogCardAuthor = ({ blog }: any) => {
  const userId = blog.user_id;
  const [nickname, setNickname] = useState<Nickname[]>([]);
  const t = useI18n();

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
          {t("blog.author")}:{" "}
          <Link href={`/user/${nickname[0].nickname}`}>
            {nickname[0].nickname}
          </Link>
        </>
      )}
    </h3>
  );
};

export default MainBlogCardAuthor;
