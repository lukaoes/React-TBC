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
  {
    blogImg: 'https://picsum.photos/450/450',
    link: '/',
    tag: 'technology',
    title: 'The Future of Artificial Intelligence: Trends and Predictions',
    description: 'Exploring the latest developments and future prospects of AI technology.',
    authorImg: 'https://picsum.photos/200/200',
    authorName: 'Emily Smith',
    time: '4h ago',
  },
  {
    blogImg: 'https://picsum.photos/451/451',
    link: '/',
    tag: 'health',
    title: '5 Healthy Habits to Boost Your Immune System',
    description: 'Learn simple lifestyle changes to enhance your immune health.',
    authorImg: 'https://picsum.photos/201/201',
    authorName: 'David Johnson',
    time: '6h ago',
  },
  {
    blogImg: 'https://picsum.photos/452/452',
    link: '/',
    tag: 'travel',
    title: 'Exploring the Hidden Gems of Italy: Off the Beaten Path Destinations',
    description: 'Discover lesser-known treasures and charming locations in Italy.',
    authorImg: 'https://picsum.photos/202/202',
    authorName: 'Sophia Brown',
    time: '8h ago',
  },
  {
    blogImg: 'https://picsum.photos/453/453',
    link: '/',
    tag: 'food',
    title: 'Delicious Vegan Recipes for Every Occasion',
    description: 'Indulge in cruelty-free and flavorful vegan dishes with these recipes.',
    authorImg: 'https://picsum.photos/203/203',
    authorName: 'Michael Clark',
    time: '10h ago',
  },
  {
    blogImg: 'https://picsum.photos/454/454',
    link: '/',
    tag: 'finance',
    title: 'The Basics of Personal Finance: Essential Tips for Financial Success',
    description: 'Learn how to manage your money wisely and achieve your financial goals.',
    authorImg: 'https://picsum.photos/204/204',
    authorName: 'Jennifer Lee',
    time: '12h ago',
  },
  {
    blogImg: 'https://picsum.photos/455/455',
    link: '/',
    tag: 'fitness',
    title: 'Effective Workouts for Building Muscle and Strength',
    description: 'Discover powerful exercises and training techniques for muscle growth.',
    authorImg: 'https://picsum.photos/205/205',
    authorName: 'Matthew Davis',
    time: '14h ago',
  },
  {
    blogImg: 'https://picsum.photos/456/456',
    link: '/',
    tag: 'food',
    title: 'The Art of Baking: Tips for Perfecting Your Bread',
    description: 'Master the techniques and secrets to bake delicious bread at home.',
    authorImg: 'https://picsum.photos/206/206',
    authorName: 'Olivia Johnson',
    time: '18h ago',
  },
  {
    blogImg: 'https://picsum.photos/457/457',
    link: '/',
    tag: 'technology',
    title: 'The Future of Quantum Computing: Possibilities and Challenges',
    description: 'Delve into the emerging field of quantum computing and its potential applications.',
    authorImg: 'https://picsum.photos/207/207',
    authorName: 'Daniel Brown',
    time: '20h ago',
  },
  {
    blogImg: 'https://picsum.photos/458/458',
    link: '/',
    tag: 'fitness',
    title: 'Yoga for Beginners: Essential Poses and Practices',
    description: 'Embark on your yoga journey with fundamental poses and relaxation techniques.',
    authorImg: 'https://picsum.photos/208/208',
    authorName: 'Sophie Wilson',
    time: '22h ago',
  },
  {
    blogImg: 'https://picsum.photos/459/459',
    link: '/',
    tag: 'finance',
    title: 'Investment Strategies for Building Long-Term Wealth',
    description: 'Learn effective investment approaches to secure your financial future.',
    authorImg: 'https://picsum.photos/209/209',
    authorName: 'Benjamin Taylor',
    time: '1d ago',
  },
  {
    blogImg: 'https://picsum.photos/460/460',
    link: '/',
    tag: 'travel',
    title: 'Exploring the Wonders of Patagonia: Nature\'s Playground',
    description: 'Discover the breathtaking landscapes and adventures awaiting in Patagonia.',
    authorImg: 'https://picsum.photos/210/210',
    authorName: 'Lucas Garcia',
    time: '1d ago',
  },
  {
    blogImg: 'https://picsum.photos/461/461',
    link: '/',
    tag: 'health',
    title: 'Mindful Eating: The Key to a Healthier Relationship with Food',
    description: 'Practice mindfulness techniques to foster a positive and balanced approach to eating.',
    authorImg: 'https://picsum.photos/211/211',
    authorName: 'Isabella Martinez',
    time: '1d ago',
  },
  {
    blogImg: 'https://picsum.photos/462/462',
    link: '/',
    tag: 'design',
    title: 'Minimalist Interior Design: Achieving Simplicity and Elegance',
    description: 'Transform your living space with minimalist design principles for a tranquil ambiance.',
    authorImg: 'https://picsum.photos/212/212',
    authorName: 'Nathan Harris',
    time: '1d ago',
  },
  {
    blogImg: 'https://picsum.photos/463/463',
    link: '/',
    tag: 'technology',
    title: 'The Impact of Augmented Reality in Education: Enhancing Learning Experiences',
    description: 'Explore the educational benefits and innovative applications of augmented reality.',
    authorImg: 'https://picsum.photos/213/213',
    authorName: 'Emma Thompson',
    time: '1d ago',
  },
  {
    blogImg: 'https://picsum.photos/464/464',
    link: '/',
    tag: 'fitness',
    title: 'HIIT Workouts: Maximizing Fat Burn and Fitness Gains',
    description: 'Achieve your fitness goals with high-intensity interval training (HIIT) workouts.',
    authorImg: 'https://picsum.photos/214/214',
    authorName: 'Liam Wilson',
    time: '1d ago',
  },
  {
    blogImg: 'https://picsum.photos/465/465',
    link: '/',
    tag: 'food',
    title: 'Healthy Meal Prep Ideas for Busy Weekdays',
    description: 'Simplify your meal planning with nutritious and delicious meal prep recipes.',
    authorImg: 'https://picsum.photos/215/215',
    authorName: 'Sophia Rodriguez',
    time: '1d ago',
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
            {blogCardData.slice(2, 4).map((data, index) => (
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

