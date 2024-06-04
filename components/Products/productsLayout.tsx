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
  const [priceRange, setPriceRange] = useState<[number, number]>([
    Math.min(...products.map((product) => Number(product.price))),
    Math.max(...products.map((product) => Number(product.price))),
  ]);
  const [selectedCondition, setSelectedCondition] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [filterState, setFilterState] = useState(false);

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
    filterProducts(
      term,
      priceRange,
      selectedCondition,
      selectedType,
      selectedLocation
    );
  };

  const handlePriceChange = (range: [number, number]) => {
    setPriceRange(range);
    filterProducts(
      searchTerm,
      range,
      selectedCondition,
      selectedType,
      selectedLocation
    );
  };

  const handleConditionChange = (condition: string) => {
    setSelectedCondition(condition);
    filterProducts(
      searchTerm,
      priceRange,
      condition,
      selectedType,
      selectedLocation
    );
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    filterProducts(
      searchTerm,
      priceRange,
      selectedCondition,
      type,
      selectedLocation
    );
  };

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
    filterProducts(
      searchTerm,
      priceRange,
      selectedCondition,
      selectedType,
      location
    );
  };

  const filterProducts = (
    term: string,
    range: [number, number],
    condition: string,
    type: string,
    location: string
  ) => {
    let filtered = products.filter(
      (product) =>
        (product.title_ge?.toLowerCase().includes(term.toLowerCase()) ||
          product.title_en?.toLowerCase().includes(term.toLowerCase())) &&
        Number(product.price) >= range[0] &&
        Number(product.price) <= range[1] &&
        (condition === "" || product.condition === condition) &&
        (type === "" || product.type === type) &&
        (location === "" || product.location === location)
    );
    setFilteredProducts(filtered);
    setSortedProducts(filtered);
  };

  const getCategoryCount = (category: string) => {
    return products.filter((product) => product.category === category).length;
  };

  return (
    <>
      <ProductsTopFilter
        setFilterState={setFilterState}
        filterState={filterState}
        gridView={gridView}
        setGridView={setGridView}
        sortByPrice={handleSortByPrice}
        sortByDate={handleSortByDate}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
      />
      <div className="products-container">
        <ProductsFilter
          filterState={filterState}
          minPrice={priceRange[0]}
          maxPrice={priceRange[1]}
          handlePriceChange={handlePriceChange}
          handleConditionChange={handleConditionChange}
          handleTypeChange={handleTypeChange}
          handleLocationChange={handleLocationChange}
          getCategoryCount={getCategoryCount}
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
