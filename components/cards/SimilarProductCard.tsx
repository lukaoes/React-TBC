import Image from "next/image";
import { Product } from "../../types";
import { FC } from "react";
import { getCurrentLocale } from "../../locales/server";

interface ISimilar {
  products: Product[];
}

const SimilarProductCard: FC<ISimilar> = (products) => {
  const locale = getCurrentLocale();

  return (
    <div className="single-prod-similar">
      {products.products.map((item, index) => (
        <div
          className="similar-product-card"
          key={`similar-single-prod-bottom-${index}`}
        >
          <Image
            src={item.main_photo}
            alt={item.title_en}
            width={400}
            height={400}
          />
          <div className="single-product-card-info">
            <h3>
              {locale === "ge"
                ? item.title_ge
                  ? item.title_ge
                  : item.title_en
                : item.title_en
                ? item.title_en
                : item.title_ge}
            </h3>
            <span>
              {item.negotiable
                ? "ფასი შეთანხმებით"
                : item.type === "sell"
                ? `${item.price} ₾`
                : `${item.price} ₾/დღე`}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SimilarProductCard;
