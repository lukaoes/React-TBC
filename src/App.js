import './App.scss';

const data = [
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

function App() {
  let openBurger = false;

  const toggleBurgerMenu = () => {
    openBurger = !openBurger;

    const burgerMenu = document.getElementById("burger");
    const menu = document.getElementById("menu");

    if (burgerMenu && menu) {
      burgerMenu.classList.toggle("is-active", openBurger);
      menu.classList.toggle("is-active", openBurger);
    }
  };

  return (
    <div>
      <header className="header">
        <nav className="navbar container">
            <a href="/" className="brand">LUKMART</a>
            <div 
              className={`burger ${openBurger ? 'is-active' : ''}`} 
              id="burger" 
              onClick={() => toggleBurgerMenu()}
            >
              <span className="burger-line"></span>
              <span className="burger-line"></span>
              <span className="burger-line"></span>
            </div>
            <div className={`menu ${openBurger ? 'is-active' : ''}`} id="menu">
              <ul className="menu-inner">
                  <li className="menu-item"><a href="/" className="menu-link">Home</a></li>
                  <li className="menu-item"><a href="/" className="menu-link">Products</a></li>
                  <li className="menu-item"><a href="/" className="menu-link">About</a></li>
                  <li className="menu-item"><a href="/" className="menu-link">Contact</a></li>
              </ul>
            </div>
            <a href="/" className="menu-block">REGISTER</a>
        </nav>
      </header>
      <main>
        <div className="main-container">
          <h1>Featured Products</h1>
          <div className="featured-products">
            {data.map((item, index) => (
              <div key={`feat-card-${index}`} className="featured-card">
                <img
                  className="featured-card_img"
                  src={item.img}
                  alt={item.title}
                />
                <div className="featured-card_joint"></div>
                <div className="featured-card_info"> 
                  <h4>{item.title}</h4>
                  <div className="cate-rating">
                    <span>
                      <span>Category:</span>
                      {item.category}
                    </span>
                    <span>⭐ {item.rating.stars} ({item.rating.total})</span>
                  </div>
                  <div className="price-cart">
                    <span>${item.price}</span>
                    <button>🛒</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer>
        <div className="footer-container">
          <div className="footer-newsteller"> 
            <p>
              Want to know what we're up to? Sign up for the newsteller and join our tribe.
            </p>
            <div>
              <input type="email" name="email" placeholder="Email Address" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
          <div className="footer-links">
            <div className="company">
              <h2>Company</h2>
              <a href="/">Terms & Conditions</a>
              <a href="/">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
