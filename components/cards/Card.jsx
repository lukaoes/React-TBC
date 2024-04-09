import Image from "next/image";

const Card = ({ cardData }) => {
  console.log(cardData)
  return (
    <>
      {cardData.map((item, index) => (
        <div key={`feat-card-${index}`} className="featured-card">
          <Image
            className="featured-card_img"
            width={600}
            height={200}
            src={item.thumbnail}
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
              <span>⭐ {item.rating} ({item.rating.stock})</span>
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
