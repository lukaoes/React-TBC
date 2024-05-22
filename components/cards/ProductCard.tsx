import Image from "next/image";
import { Product } from "../../app/[locale]/(dashboard)/page";
import { FC } from "react";
import AddToCartButton from "./addToCartButton";

interface ProductCardProps {
  newProds: Product[];
}

const ProductCard: FC<ProductCardProps> = ({ newProds }) => {
  return (
    <>
      {newProds.map((item: Product, index: number) => (
        // <div key={`own-prods-${index}`} className="w-[250px] mr-[40px]">
        //   <h2>{item.title}</h2>
        //   <p className="h-[100px] overflow-hidden">{item.description}</p>
        //   <p>Price: ${item.price}</p>
        //   <p>Discount: {item.discount}%</p>
        //   <p>Stock: {item.stock}</p>
        //   <p>Brand: {item.brand}</p>
        //   <p>Category: {item.category}</p>
        //   <AddToCartButton
        //     productId={String(item.id)}
        //   />
        //   <Image
        //     src={item.thumbnail}
        //     alt={item.title}
        //     width={200}
        //     height={400}
        //   />
        // </div>
        <div key={`feat-card-${index}`} className="featured-card">
          <a href={String(item.id)}>
            <Image
              className="featured-card_img"
              width={200}
              height={400}
              src={item.thumbnail}
              alt={item.title}
            />
          </a>
          <div className="featured-card_joint"></div>
          <div className="featured-card_info">
            <a href={String(item.id)}>
              <h4>{item.title}</h4>
              <div className="cate-rating">
                <span>
                  <span>category:</span>
                  {item.category}
                </span>
                <span>
                  ⭐ {item.stock} ({item.stock})
                </span>
              </div>
            </a>
            <div className="price-cart">
              <span>${item.price}</span>
              <AddToCartButton productId={String(item.id)} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
