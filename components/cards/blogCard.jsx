import Image from "next/image";

const BlogCard = ({ blogCardData }) => {
  console.log(blogCardData)
  return (
    <div className="blog-card">
      <a href={`/blog/${blogCardData.id}`}>
        <Image
          src="https://picsum.photos/450/450"
          alt={blogCardData.title}
          className="blog-card_image"
          width={600}
          height={200}
        />
      </a>
      <div className="blog-card_info">
        <div className="blog-card_info_about">
          <span>{blogCardData.tags[0]}</span>
          <h4>
            <a href={`/blog/${blogCardData.id}`}>{blogCardData.title}</a>
          </h4>
          <p>{blogCardData.body.slice(0, 120)}...</p>
        </div>
        <div className="blog-card_info_author">
          <Image src="https://picsum.photos/451/451" alt="author" width={40} height={40} />
          <div>
            <h5>Jondi Baghaturia</h5>
            <span>100 Years Later</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
