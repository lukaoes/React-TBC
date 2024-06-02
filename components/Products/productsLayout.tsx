import { FC } from "react";
import { ProductsDisplay } from "../../types";
import ProductsFilter from "./productsFilter";
import ProductsGrid from "./productsGrid";
import ProductsTopFilter from "./productsTopFilter";

interface IProductsLayout {
  products: ProductsDisplay[];
}

export const ProductsLayout: FC<IProductsLayout> = ({ products }) => {
  return (
    <>
      <ProductsTopFilter />
      <div className="products-container">
        <ProductsFilter />
        <ProductsGrid products={products} />
      </div>
    </>
  );
};

export default ProductsLayout;
