const BlogCard = ({ blogCardData }) => {
  return (
    <div className="blog-card">
      <a href={blogCardData.link}>
        <img
          src={blogCardData.blogImg}
          alt={blogCardData.title}
          className="blog-card_image"
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
          <img src={blogCardData.authorImg} alt="author" />
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
