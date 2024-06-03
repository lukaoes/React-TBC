"use client";
import { FC, useState } from "react";
import { ProductsDisplay } from "../../types";
import ProductsFilter from "./productsFilter";
import ProductsGrid from "./productsGrid";
import ProductsTopFilter from "./productsTopFilter";

interface IProductsLayout {
  products: ProductsDisplay[];
}

export const ProductsLayout: FC<IProductsLayout> = ({ products }) => {
  const [gridView, setGridView] = useState(true);
  return (
    <>
      <ProductsTopFilter gridView={gridView} setGridView={setGridView} />
      <div className="products-container">
        <ProductsFilter />
        <ProductsGrid products={products} gridView={gridView} />
      </div>
    </>
  );
};

export default ProductsLayout;
