import Image from "next/image";
import Link from "next/link";
import { Blog } from "../../types";

interface IBlog {
  blogPost: Blog;
}
const SingleBlogHeader = ({ blogPost }: IBlog) => {
  return (
    <div className="single-blog-header">
      <div className="single-blog-header-top">
        <h1>{blogPost.title}</h1>
        <div>
          <span>{blogPost.created_at.slice(0, 10)}</span>
          <span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00016 7.00016C8.84183 7.00016 10.3335 5.50849 10.3335 3.66683C10.3335 1.82516 8.84183 0.333496 7.00016 0.333496C5.1585 0.333496 3.66683 1.82516 3.66683 3.66683C3.66683 5.50849 5.1585 7.00016 7.00016 7.00016ZM7.00016 8.66683C4.77516 8.66683 0.333496 9.78349 0.333496 12.0002V12.8335C0.333496 13.2918 0.708496 13.6668 1.16683 13.6668H12.8335C13.2918 13.6668 13.6668 13.2918 13.6668 12.8335V12.0002C13.6668 9.78349 9.22516 8.66683 7.00016 8.66683Z"
                fill="white"
              />
            </svg>
            ავტორი <Link href={`user/id`}>lukaostore</Link>
          </span>
        </div>
      </div>
      <div className="blog-header-container">
        <Image
          src={blogPost.main_photo}
          width={1400}
          height={700}
          alt="nature"
        />
      </div>
      <p>{blogPost.description}</p>
    </div>
  );
};

export default SingleBlogHeader;
