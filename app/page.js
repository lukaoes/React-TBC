'use client'
import SearchBar from '@/components/Home/searchBar';
import Card from '@/components/cards/Card';
import axios from 'axios';
import { Suspense, useEffect, useState } from 'react';
import Loading from './loading';
const API = 'https://dummyjson.com/products'

export default function Home() {
  const [products, setProducts] = useState([])
  const [filteredCardData, setFilteredCardData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearch = (filteredData) => {
    setFilteredCardData(filteredData);
  };

  useEffect(() => {
    axios.get(API)
      .then((res) => {
        setProducts(res.data.products);
        setFilteredCardData(res.data.products);
        setLoading(false)
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
            <Suspense fallback={<Loading />}> 
              {loading ? <Loading /> : (
                <>
                  {filteredCardData.length > 0 ? (
                    <Card cardData={filteredCardData} />
                  ) : (
                    <p style={{ fontSize: '18px', fontWeight: '700'}}>No items found :(</p>
                  )}
                </>
              )}
            </Suspense>
          </div>
        </div>
      </main>
    </>
  )
}
