import Image from "next/image";
import { Product } from "../../app/[locale]/(dashboard)/page";
import { FC } from "react";
import AddToCartButton from "./addToCartButton";

interface ProductCardProps {
  newProds: Product[];
}

const ProductCard: FC<ProductCardProps> = ({ newProds }) => {
  return (
    <div className="flex">
      {newProds.map((item: Product, index: number) => (
        <div key={`own-prods-${index}`} className="w-[250px] mr-[40px]">
          <h2>{item.title}</h2>
          <p className="h-[100px] overflow-hidden">{item.description}</p>
          <p>Price: ${item.price}</p>
          <p>Discount: {item.discount}%</p>
          <p>Stock: {item.stock}</p>
          <p>Brand: {item.brand}</p>
          <p>Category: {item.category}</p>
          <AddToCartButton
            productId={String(item.id)}
          />
          <Image
            src={item.thumbnail}
            alt={item.title}
            width={200}
            height={400}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
