import Card from '../components/cards/Card'
import BlogCard from '../components/cards/blogCard'

const cardData = [
  {
    title: 'Smart watch for all genders',
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    rating: {
      stars: 4.7,
      total: 122,
    },
    category: 'Watches',
    price: 59,
  },
  {
    title: 'Polaroid film camera',
    img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f',
    rating: {
      stars: 5.0,
      total: 273,
    },
    category: 'Cameras',
    price: 140,
  },
  {
    title: 'Ray-ban sunglasses',
    img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f',
    rating: {
      stars: 3.9,
      total: 611,
    },
    category: 'Sunglasses',
    price: 110,
  },
  {
    title: 'Sony wired headphones',
    img: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b',
    rating: {
      stars: 4.2,
      total: 72,
    },
    category: 'Headphones',
    price: 107,
  },
  {
    title: 'Adidas white shoes',
    img: 'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8',
    rating: {
      stars: 2.8,
      total: 341,
    },
    category: 'Shoes',
    price: 99,
  },
  {
    title: 'Apple airpods wireless',
    img: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a',
    rating: {
      stars: 4.8,
      total: 895,
    },
    category: 'Headphones',
    price: 100,
  },
]

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

export const Home = () => {
  return (
    <main>
      <div className="main-container">
        <h1 className="title">Blog Posts</h1>
        <div className="blog-posts">
          <BlogCard blogCardData={blogCardData} />
        </div>
        <h1 className="title">Featured Products</h1>
        <div className="featured-products">
          <Card cardData={cardData} />
        </div>
      </div>
    </main>
  )
}

export default Home
