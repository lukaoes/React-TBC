"use client";
import { FC, useEffect, useState } from "react";
import { ProductsDisplay } from "../../types";
import ProductsFilter from "./productsFilter";
import ProductsGrid from "./productsGrid";
import ProductsTopFilter from "./productsTopFilter";
import MainProductCardModal from "../modals/mainProductCardModal";

interface IProductsLayout {
  products: ProductsDisplay[];
}

export const ProductsLayout: FC<IProductsLayout> = ({ products }) => {
  const [gridView, setGridView] = useState(true);
  const [modal, setModal] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<ProductsDisplay | null>(null);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modal]);

  const openModal = (product: ProductsDisplay) => {
    setSelectedProduct(product);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <ProductsTopFilter gridView={gridView} setGridView={setGridView} />
      <div className="products-container">
        <ProductsFilter />
        <ProductsGrid
          products={products}
          gridView={gridView}
          openModal={openModal}
        />
      </div>
      {modal && selectedProduct && (
        <MainProductCardModal
          product={selectedProduct}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default ProductsLayout;
