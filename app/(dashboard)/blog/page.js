import BlogCard from '@/components/cards/blogCard';
import BlogRecentCard from '@/components/cards/blogRecentCard';


async function fetchBlog() {
  const response = await fetch('https://dummyjson.com/posts');
  const blogPosts = await response.json();

  return blogPosts
}


export default async function Blog() {
  const blogCardData = await fetchBlog();

  return (
    <main>
      <div className="blog-recent">
        <div className="blog-recent_header">
          <h1>Our Blog</h1>
          <h5>The latest news to drive design strategy</h5>
        </div>
        <div className="blog-container">
          <div className="blog-recent-post">
            {blogCardData.posts.slice(15, 19).map((data, index) => (
              <BlogRecentCard key={`blog-card-recent-${index}`} blogRecentPost={data} />
            ))}
          </div>
        </div>
      </div>
        <div className="main-container">
          <h1 className="title">All Blog Posts</h1>
          <div className="blog-posts">
            {blogCardData.posts.map((data, index) => (
              <BlogCard key={`blog-card-${index}`} blogCardData={data} />
            ))}
          </div>
        </div>
    </main>
  );
};
