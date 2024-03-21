const BlogRecentCard = ({blogRecentPost}) => {
  return (
    <div>
      <a href={blogRecentPost.link}>
        <img src={blogRecentPost.blogImg} alt={blogRecentPost.title} className="recent-post-img" />
      </a>
      <div className="blog-recent-right">
        <span className="blog-recent-tag">{blogRecentPost.tag}</span>
        <a href="./details">
          {blogRecentPost.title}
        </a>
        <div className="blog-card_info_author">
          <img src={blogRecentPost.authorImg} alt="author" />
          <div>
            <h5>{blogRecentPost.authorName} </h5>
            <span>{blogRecentPost.time}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogRecentCard