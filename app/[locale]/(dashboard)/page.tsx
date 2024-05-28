// 'use client'
// import FeaturedProducts from "../../../components/Home/featuredProducts";
// import SearchBar from '@/components/Home/searchBar';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// const API = "https://dummyjson.com/products";
import { getI18n } from "../../../locales/server";
import { setStaticParamsLocale } from "next-international/server";
import { getProducts } from "../../../api";
// import Image from "next/image";
import ProductCard from "../../../components/cards/ProductCard";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  discount: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  descriptionge: string;
}

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);
  // const products = await fetchMain();
  const t = await getI18n();
  const newProds = await getProducts();

  // const [products, setProducts] = useState([])
  // const [filteredCardData, setFilteredCardData] = useState([]);

  // const handleSearch = (filteredData) => {
  //   setFilteredCardData(filteredData);
  // };

  // useEffect(() => {
  //   axios.get(API)
  //     .then((res) => {
  //       setProducts(res.data.products);
  //       setFilteredCardData(res.data.products);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  return (
    <>
      {/* <SearchBar cardData={products} onSearch={handleSearch} /> */}
      <main>
        <div className="main-container">
          <h1 className="title">{t("main.popular")}</h1>
          <div className="featured-products">
            <ProductCard newProds={newProds} />
            {/* <FeaturedProducts products={products.products} /> */}
          </div>
        </div>
      </main>
    </>
  );
}
