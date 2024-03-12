const Card = ({ cardData }) => {
  return (
    <>
      {cardData.map((item, index) => (
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
    </>
  );
};

export default Card
