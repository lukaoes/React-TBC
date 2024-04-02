import Image from "next/image"

const BlogRecentCard = ({blogRecentPost}) => {
  return (
    <div>
      <a href={blogRecentPost.link}>
        <Image src={blogRecentPost.blogImg} alt={blogRecentPost.title} className="recent-post-img" width={600} height={180} />
      </a>
      <div className="blog-recent-right">
        <span className="blog-recent-tag">{blogRecentPost.tag}</span>
        <a href="./details">
          {blogRecentPost.title}
        </a>
        <div className="blog-card_info_author">
          <Image src={blogRecentPost.authorImg} alt="author" width={40} height={40} />
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