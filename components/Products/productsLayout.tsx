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
  const minPrice = Math.min(
    ...products.map((product) => Number(product.price))
  );
  const maxPrice = Math.max(
    ...products.map((product) => Number(product.price))
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([
    minPrice,
    maxPrice,
  ]);

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
    filterProducts(term, priceRange);
  };

  const handlePriceChange = (range: [number, number]) => {
    setPriceRange(range);
    filterProducts(searchTerm, range);
  };

  const filterProducts = (term: string, range: [number, number]) => {
    let filtered = products.filter(
      (product) =>
        (product.title_ge?.toLowerCase().includes(term.toLowerCase()) ||
          product.title_en?.toLowerCase().includes(term.toLowerCase())) &&
        Number(product.price) >= range[0] &&
        Number(product.price) <= range[1]
    );
    setFilteredProducts(filtered);
    setSortedProducts(filtered);
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
        <ProductsFilter
          minPrice={minPrice}
          maxPrice={maxPrice}
          handlePriceChange={handlePriceChange}
        />
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
