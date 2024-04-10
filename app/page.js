'use client'
import FeaturedProducts from '@/components/Home/featuredProducts';
import SearchBar from '@/components/Home/searchBar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from './loading';
const API = 'https://dummyjson.com/products'


export default function Home() {
  const [products, setProducts] = useState([])
  const [filteredCardData, setFilteredCardData] = useState([]);
  const [loading, setLoading] = useState(true)

  const handleSearch = (filteredData) => {
    setFilteredCardData(filteredData);
  };

  useEffect(() => {
    axios.get(API)
      .then((res) => {
        setProducts(res.data.products);
        setFilteredCardData(res.data.products);
        setLoading(false);
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
            {loading ? <Loading /> : 
              <FeaturedProducts filteredCardData={filteredCardData} />
            }
          </div>
        </div>
      </main>
    </>
  )
}
