import BlogCard from '../components/cards/blogCard'
import BlogRecentCard from '../components/cards/blogRecentCard';

const blogCardData = [
  {
    blogImg: 'https://cdn.motor1.com/images/mgl/W8Gjg3/s3/tesla-cybertruck.jpg',
    link: '/',
    tag: 'technology',
    title: 'Why is the Tesla Cybertruck designed the way it is?',
    description: 'An exploration into the trucks polarising design.',
    authorImg: 'https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg',
    authorName: 'Carrie Brewer',
    time: '2h ago',
  },
  {
    blogImg: 'https://res.cloudinary.com/adrenalinecomau/image/upload/q_auto,f_auto/v1621578916/adventures/eps_13899.jpg',
    link: '/',
    tag: 'popular',
    title: 'How to Keep Going When You Dont Know Whats Next',
    description: 'The future can be scary, but there are ways to deal with that fear.',
    authorImg: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
    authorName: 'Jerome Walton',
    time: 'Yesterday',
  },
  {
    blogImg: 'https://media.cntraveler.com/photos/63483e15ef943eff59de603a/1:1/w_2001,h_2001,c_limit/New%20York%20City_GettyImages-1347979016.jpg',
    link: '/',
    tag: 'design',
    title: '10 Rules of Dashboard Design',
    description: 'Dashboard Design Guidelines',
    authorImg: 'https://img.freepik.com/free-photo/handsome-cheerful-man-with-happy-smile_176420-18028.jpg',
    authorName: 'Lewis Daniels',
    time: '23 Dec 2019',
  },
  {
    blogImg: 'https://www.michigan.org/sites/default/files/styles/image_main_content_desktop/public/legacy_drupal_7_images/camping-hero.jpeg?itok=rjnLWQzf',
    link: '/',
    tag: 'camping',
    title: 'Top 10 Must-Have Camping Gear for Your Next Adventure!',
    description: 'explore the latest must-have camping gear and essential tools.',
    authorImg: 'https://img.freepik.com/free-photo/front-view-beautiful-woman-portrait_23-2149479366.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710288000&semt=ais',
    authorName: 'Camille Short',
    time: '1w ago',
  },
]

const blogRecentPost = [
  {
    blogImg: 'https://res.cloudinary.com/adrenalinecomau/image/upload/q_auto,f_auto/v1621578916/adventures/eps_13899.jpg',
    link: '/',
    tag: 'popular',
    title: 'How to Keep Going When You Dont Know Whats Next',
    authorImg: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
    authorName: 'Jerome Walton',
    time: 'Yesterday',
  },
  {
    blogImg: 'https://www.michigan.org/sites/default/files/styles/image_main_content_desktop/public/legacy_drupal_7_images/camping-hero.jpeg?itok=rjnLWQzf',
    link: './details',
    tag: 'camping',
    title: 'Top 10 Must-Have Camping Gear for Your Next Adventure!',
    authorImg: 'https://img.freepik.com/free-photo/front-view-beautiful-woman-portrait_23-2149479366.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710288000&semt=ais',
    authorName: 'Camille Short',
    time: '1w ago',
  },
]

const Blog = () => {
  return (
    <main>
      <div className="blog-recent">
        <div className="blog-recent_header">
          <h1>Our Blog</h1>
          <h5>The latest news to drive design strategy</h5>
        </div>
        <div className="blog-container">
          <div>
            <BlogCard blogCardData={blogCardData[0]} />
          </div>
          <div className="blog-recent-post">
            {blogRecentPost.map((data, index) => (
              <BlogRecentCard key={`blog-card-recent-${index}`} blogRecentPost={data} />
            ))}
          </div>
        </div>
      </div>
      <div className="main-container">
        <h1 className="title">All Blog Posts</h1>
        <div className="blog-posts">
          {blogCardData.map((data, index) => (
            <BlogCard key={`blog-card-${index}`} blogCardData={data} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blog;

