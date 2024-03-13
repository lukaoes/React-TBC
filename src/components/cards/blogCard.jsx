const BlogCard = ({blogCardData}) => {
  return (
    <>
      {blogCardData.map((item, index) => (
        <div key={`blog-card-${index}`} className="blog-card">
          <a href={item.link}>
            <img 
              src={item.blogImg}
              alt={item.title} 
              className="blog-card_image"
            />
          </a>
          <div className="blog-card_info">
            <div className="blog-card_info_about">
              <span>{item.tag}</span>
              <h4><a href={item.link}>{item.title}</a></h4>
              <p>{item.description}</p>
            </div>
            <div className="blog-card_info_author">
              <img src={item.authorImg} alt="author" />
              <div>
                <h5>{item.authorName}</h5>
                <span>{item.time}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default BlogCard
