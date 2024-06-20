import Image from "next/image";
import { Link } from "next-view-transitions";
import MainBlogCardAuthor from "./mainBlogCardAuthor";
import { useI18n } from "../../locales/client";

const MainBlogCard = ({ blog }: any) => {
  const t = useI18n();
  return (
    <div className="main-blog-card-layout">
      <Image src={blog.main_photo} alt="blog" width={500} height={500} />
      <div className="main-blog-card-info">
        <div className="main-blog-card-details">
          <span>{blog.created_at.slice(0, 10)}</span>
          <MainBlogCardAuthor blog={blog} />
        </div>
        <Link href={`/blog/${blog.id}`}>
          <h2>{blog.title.slice(0, 42)}</h2>
        </Link>
        <Link href={`/blog/${blog.id}`}>{t("blog.details")}</Link>
      </div>
    </div>
  );
};

export default MainBlogCard;
