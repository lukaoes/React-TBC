import Image from "next/image";

const BlogCard = ({ blogCardData }) => {
  return (
    <div className="blog-card">
      <a href={blogCardData.link}>
        <Image
          src={blogCardData.blogImg}
          alt={blogCardData.title}
          className="blog-card_image"
          width={600}
          height={200}
        />
      </a>
      <div className="blog-card_info">
        <div className="blog-card_info_about">
          <span>{blogCardData.tag}</span>
          <h4>
            <a href={blogCardData.link}>{blogCardData.title}</a>
          </h4>
          <p>{blogCardData.description}</p>
        </div>
        <div className="blog-card_info_author">
          <Image src={blogCardData.authorImg} alt="author" width={40} height={40} />
          <div>
            <h5>{blogCardData.authorName}</h5>
            <span>{blogCardData.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
