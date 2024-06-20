import Image from "next/image";
import { Blog } from "../../types";
import { Link } from "next-view-transitions";

interface BlogPageRecentCardProps {
  blog: Blog;
}

const BlogPageRecentCard = ({ blog }: BlogPageRecentCardProps) => {
  return (
    <div className="blog-page-recent-card">
      <Link href={`/blog/${blog.id}`}>
        <Image
          src={blog.main_photo}
          alt={blog.title}
          width={200}
          height={200}
        />
      </Link>
      <div>
        <span>{blog.created_at.slice(0, 10)}</span>
        <h3>
          <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
        </h3>
      </div>
    </div>
  );
};

export default BlogPageRecentCard;
