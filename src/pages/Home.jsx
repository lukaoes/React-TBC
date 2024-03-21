import Card from '../components/cards/Card'

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

export const Home = () => {
  return (
    <main>
      <div className="main-container">
        <h1 className="title">Featured Products</h1>
        <div className="featured-products">
          <Card cardData={cardData} />
        </div>
      </div>
    </main>
  )
}

export default Home
