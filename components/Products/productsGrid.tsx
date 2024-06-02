import { FC } from "react";
import { ProductsDisplay } from "../../types";
import MainProductCard from "../cards/mainProductCard";

type ProductsGridProps = {
  products: ProductsDisplay[];
};

const ProductsGrid: FC<ProductsGridProps> = ({ products }) => {
  return (
    <div className="products-grid-container">
      {products.map((product, index) => (
        <div className="grid-product" key={`display-products-${index}`}>
          <MainProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
