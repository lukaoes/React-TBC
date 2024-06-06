import Image from "next/image";
import blogImage from "../../public/assets/images/secondHeader/blog.webp";
import Link from "next/link";

const MainBlogCard = () => {
  return (
    <div className="main-blog-card-layout">
      <Image src={blogImage} alt="blog" width={500} height={500} />
      <div className="main-blog-card-info">
        <div className="main-blog-card-details">
          <span>11-02-2024</span>
          <h3>
            ავტორი: <Link href="">lukaostore</Link>
          </h3>
        </div>
        <h2>როგორ გადავკვეთოთ მდინარე ლაშქრობის დროს და არ წაგვიღოს წყალმა</h2>
        <Link href="/blog">წაიკითხეთ ვრცლად </Link>
      </div>
    </div>
  );
};

export default MainBlogCard;
