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
  const [filteredProducts, setFilteredProducts] =
    useState<ProductsDisplay[]>(products);
  const [sortedProducts, setSortedProducts] =
    useState<ProductsDisplay[]>(products);
  const [, setSortBy] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredProducts(products);
    setSortedProducts(products);
  }, [products]);

  const handleSortByPrice = (order: "high-low" | "low-high") => {
    const sortedByPrice = sortByPrice(filteredProducts, order);
    setSortedProducts(sortedByPrice);
    setSortBy(`price:${order}`);
  };

  const handleSortByDate = (order: "new-old" | "old-new") => {
    const sortedByDate = sortByDate(filteredProducts, order);
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

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term === "") {
      setFilteredProducts(products);
      setSortedProducts(products);
    } else {
      const filteredProducts = products.filter((product) => {
        const titleGe = product.title_ge ? product.title_ge.toLowerCase() : "";
        const titleEn = product.title_en ? product.title_en.toLowerCase() : "";
        return (
          titleGe.includes(term.toLowerCase()) ||
          titleEn.includes(term.toLowerCase())
        );
      });
      setFilteredProducts(filteredProducts);
      setSortedProducts(filteredProducts);
    }
  };

  return (
    <>
      <ProductsTopFilter
        gridView={gridView}
        setGridView={setGridView}
        sortByPrice={handleSortByPrice}
        sortByDate={handleSortByDate}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
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
