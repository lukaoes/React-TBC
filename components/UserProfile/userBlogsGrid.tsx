import Image from "next/image";
import { Link } from "next-view-transitions";
import { Blog } from "../../types";
import { FC } from "react";

interface IBlog {
  blogs: Blog;
}

const UserBlogsGrid: FC<IBlog> = ({ blogs }) => {
  return (
    <div className="user-profile-products-grid">
      {blogs.map((item, index) => (
        <div
          className="user-profile-blogs-card"
          key={`user-profile-blogs-${index}`}
        >
          <Link href={`/blog/${item.id}`}>
            <Image
              src={item.main_photo}
              alt={item.title}
              width={800}
              height={800}
            />
          </Link>
          <Link href={`/blog/${item.id}`}>{item.title}</Link>
          <p className="blog-tag">{item.category}</p>
        </div>
      ))}
    </div>
  );
};

export default UserBlogsGrid;
