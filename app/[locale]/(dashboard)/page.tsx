// 'use client'
import FeaturedProducts from "../../../components/Home/featuredProducts";
// import SearchBar from '@/components/Home/searchBar';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
const API = "https://dummyjson.com/products";
import { getI18n } from "../../../locales/server";
import { setStaticParamsLocale } from "next-international/server";
import { getStaticParams } from "../../../locales/server";
import { getProducts } from "../../../api";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  discount: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
}

export function generateStaticParams() {
  return getStaticParams();
}

async function fetchMain() {
  const response = await fetch(API);
  const mainData = await response.json();

  return mainData;
}

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);
  const products = await fetchMain();
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
            {newProds.map((item: Product, index: number) => (
              <div key={`own-prods-${index}`} className="w-[250px]">
                <h2>{item.title}</h2>
                <p className="h-[100px] overflow-hidden">{item.description}</p>
                <p>Price: ${item.price}</p>
                <p>Discount: {item.discount}%</p>
                <p>Stock: {item.stock}</p>
                <p>Brand: {item.brand}</p>
                <p>Category: {item.category}</p>
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={200}
                  height={400}
                />
              </div>
            ))}
            <FeaturedProducts products={products.products} />
          </div>
        </div>
      </main>
    </>
  );
}
