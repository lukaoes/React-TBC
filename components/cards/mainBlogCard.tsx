import Image from "next/image";
import Link from "next/link";
import { BlogsDisplay } from "../../types";

interface IBlog {
  blog: BlogsDisplay;
}

const MainBlogCard = ({ blog }: IBlog) => {
  console.log(blog, "blog");
  return (
    <div className="main-blog-card-layout">
      <Image src={blog.main_photo} alt="blog" width={500} height={500} />
      <div className="main-blog-card-info">
        <div className="main-blog-card-details">
          <span>{blog.created_at.slice(0, 10)}</span>
          <h3>
            ავტორი: <Link href="">lukaostore</Link>
          </h3>
        </div>
        <Link href={`/blog/${blog.id}`}>
          <h2>{blog.title.slice(0, 42)}</h2>
        </Link>
        <Link href={`/blog/${blog.id}`}>ვრცლად </Link>
      </div>
    </div>
  );
};

export default MainBlogCard;
