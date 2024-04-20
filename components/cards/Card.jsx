import Image from "next/image";
import { getDictionary } from "@/app/[lang]/dictionaries";


async function Card({ cardData, lang }) {
  const dict = await getDictionary(lang)

  return (
    <>
      {cardData.map((item, index) => (
        <div key={`feat-card-${index}`} className="featured-card">
          <a href={item.id}>
            <Image
              className="featured-card_img"
              width={600}
              height={200}
              src={item.thumbnail}
              alt={item.title}
            />
          </a>
          <div className="featured-card_joint"></div>
          <div className="featured-card_info"> 
            <a href={item.id}>
              <h4>{item.title}</h4>
              <div className="cate-rating">
                <span>
                  <span>{dict.main.category}:</span>
                  {item.category}
                </span>
                <span>⭐ {item.rating} ({item.rating.stock})</span>
              </div>
            </a>
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
