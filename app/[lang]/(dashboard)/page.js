// 'use client'
import FeaturedProducts from '@/components/Home/featuredProducts';
import { getDictionary } from '../dictionaries';
import SearchBar from '@/components/Home/searchBar';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
const API = 'https://dummyjson.com/products'

async function fetchMain() {
    const response = await fetch(API);
    const mainData = await response.json();
  
    return mainData
}


export default async function Home({params}) {
  const {lang} = params
  const dict = await getDictionary(lang)

  const products = await fetchMain();

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
          <h1 className="title">{dict.main.popular}</h1>
          <div className="featured-products"> 
            <FeaturedProducts products={products.products} lang={lang} />
          </div>
        </div>
      </main>
    </>
  )
}
