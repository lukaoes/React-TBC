// BlogPageRecentCard.tsx
import Image from "next/image";
import { Blog } from "../../types";

interface BlogPageRecentCardProps {
  blog: Blog;
}

const BlogPageRecentCard = ({ blog }: BlogPageRecentCardProps) => {
  return (
    <div className="blog-page-recent-card">
      <Image src={blog.main_photo} alt={blog.title} width={200} height={200} />
      <div>
        <span>{blog.created_at.slice(0, 10)}</span>
        <h3>{blog.title}</h3>
      </div>
    </div>
  );
};

export default BlogPageRecentCard;
