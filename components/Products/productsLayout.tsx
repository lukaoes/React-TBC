"use client";
import { FC, useEffect, useState } from "react";
import { ProductsDisplay } from "../../types";
import ProductsFilter from "./productsFilter";
import ProductsGrid from "./productsGrid";
import ProductsTopFilter from "./productsTopFilter";
import MainProductCardModal from "../modals/mainProductCardModal";
import { sortByDate, sortByPrice } from "../../utilis/sortingProducts";

interface IProductsLayout {
  products: ProductsDisplay[];
}

export const ProductsLayout: FC<IProductsLayout> = ({ products }) => {
  const [gridView, setGridView] = useState(true);
  const [modal, setModal] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<ProductsDisplay | null>(null);
  const [sortedProducts, setSortedProducts] =
    useState<ProductsDisplay[]>(products);
  const [, setSortBy] = useState("");

  useEffect(() => {
    setSortedProducts(products);
  }, [products]);

  const handleSortByPrice = (order: "high-low" | "low-high") => {
    const sortedByPrice = sortByPrice(products, order);
    setSortedProducts(sortedByPrice);
    setSortBy(`price:${order}`);
  };

  const handleSortByDate = (order: "new-old" | "old-new") => {
    const sortedByDate = sortByDate(products, order);
    setSortedProducts(sortedByDate);
    setSortBy(`date:${order}`);
  };

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
      <ProductsTopFilter
        gridView={gridView}
        setGridView={setGridView}
        sortByPrice={handleSortByPrice}
        sortByDate={handleSortByDate}
      />
      <div className="products-container">
        <ProductsFilter />
        <ProductsGrid
          products={sortedProducts}
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
