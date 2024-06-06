import Image from "next/image";
import blogImage from "../../public/assets/images/secondHeader/blog.webp";

const BlogPageRecentCard = () => {
  return (
    <div className="blog-page-recent-card">
      <Image src={blogImage} alt="blogimage" width={200} height={200} />
      <div>
        <span>11-20-2024</span>
        <h3>როგორ გადავკვეთოთ მდინარე ლაშქრობის დროს და არ წაგვიღოს წყალმა</h3>
      </div>
    </div>
  );
};

export default BlogPageRecentCard;
