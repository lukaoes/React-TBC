import { FC } from "react";
import { ProductsDisplay } from "../../types";
import MainProductCard from "../cards/mainProductCard";
import ProductWideCard from "../cards/productWideCard";

type ProductsGridProps = {
  gridView: boolean;
  products: ProductsDisplay[];
};

const ProductsGrid: FC<ProductsGridProps> = ({ products, gridView }) => {
  return (
    <>
      {gridView ? (
        <div className="products-grid-container">
          {products.map((product, index) => (
            <div className="grid-product" key={`display-products-${index}`}>
              <MainProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="products-wide-display-container">
          {products.map((product, index) => (
            <div key={`display-products-wide-${index}`}>
              <ProductWideCard product={product} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsGrid;
