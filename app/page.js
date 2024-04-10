'use client'
import FeaturedProducts from '@/components/Home/featuredProducts';
import SearchBar from '@/components/Home/searchBar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from './loading';
const API = 'https://dummyjson.com/products'

const DynamicFeaturedProducts = dynamic(() => import('@/components/Home/featuredProducts'), {
  ssr: false,
  loading: <Loading />,
})

export default function Home() {
  const [products, setProducts] = useState([])
  const [filteredCardData, setFilteredCardData] = useState([]);

  const handleSearch = (filteredData) => {
    setFilteredCardData(filteredData);
  };

  useEffect(() => {
    axios.get(API)
      .then((res) => {
        setProducts(res.data.products);
        setFilteredCardData(res.data.products);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <SearchBar cardData={products} onSearch={handleSearch} />
      <main>
        <div className="main-container">
          <h1 className="title">Featured Products</h1>
          <div className="featured-products">
            <DynamicFeaturedProducts filteredCardData={filteredCardData} />
          </div>
        </div>
      </main>
    </>
  )
}
