import Image from "next/image";
import { getI18n } from "../../locales/server";

interface CardProps {
  cardData: {
    id: string;
    title: string;
    thumbnail: string;
    category: string;
    rating: number;
    stock: number;
    price: number;
  }[];
}

async function Card({ cardData }: CardProps) {
  const t = await getI18n()

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
                  <span>{t('main.category')}:</span>
                  {item.category}
                </span>
                <span>⭐ {item.rating} ({item.stock})</span>
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
