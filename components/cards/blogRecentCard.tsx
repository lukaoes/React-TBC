import Image from "next/image"
import { FC } from "react";

interface BlogRecentCardProps {
  blogRecentPost: {
    id: string;
    title: string;
    tags: string[];
  };
}

const BlogRecentCard: FC<BlogRecentCardProps> = ({blogRecentPost}) => {
  return (
    <div>
      <a href={`/blog/${blogRecentPost.id}`}>
        <Image src="https://picsum.photos/554/554" alt={blogRecentPost.title} className="recent-post-img" width={600} height={180} />
      </a>
      <div className="blog-recent-right">
        <span className="blog-recent-tag">{blogRecentPost.tags[0]}</span>
        <a href={`/blog/${blogRecentPost.id}`}>
          {blogRecentPost.title.slice(0, 20)}...
        </a>
        <div className="blog-card_info_author">
          <Image src="https://picsum.photos/254/254" alt="author" width={40} height={40} />
          <div>
            <h5>Jondi Baghaturia</h5>
            <span>100 Years Later</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogRecentCard