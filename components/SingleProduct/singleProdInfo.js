'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import axios from 'axios';


const SingleProdInfo = ({prodId}) => {
  const [oneProduct, setOneProduct] = useState([])

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${prodId}`)
      .then((res) => {
        setOneProduct(res.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <div className="max-w-[1024px] mx-auto my-0 p-[20px] md:flex md:gap-8 ">
        <div>
          <Image src={oneProduct.thumbnail}
            alt="product image"
            width={600}
            height={600}
            className="border mx-[auto] my-[0] border-gray-300 transition-colors duration-300 hover:border-black cursor-pointer max-h-[450px] object-cover" 
          />
        </div>
        <div>
          <h1 className="text-[30px] mb-[20px] font-bold mt-[15px] md:mt-[0px] text-center md:text-left">
            {oneProduct.title}
          </h1>
          <h2 className="mb-[10px] uppercase font-medium text-center md:text-left">
            BY <span className="text-[rgb(35,_166,_240)]"> {oneProduct.brand}</span>
          </h2>
          <h2 className="mb-[10px] uppercase font-medium text-center md:text-left">
            CATEGORY: <span className="text-[rgb(35,_166,_240)]"> {oneProduct.category}</span>
          </h2>
          <div>
            <div className="flex items-center mt-[20px] justify-center md:justify-start">
              <p className="w-[110px] h-[46px] bg-[rgb(71,_173,_151)] rounded-[10px] mr-[15px] text-[30px] text-[rgb(37,_43,_66)] flex justify-center items-center font-bold">
                ${oneProduct.price}
              </p>
              <div>
                <p className="text-[24px] font-bold m-0">
                  Save {oneProduct.discountPercentage}%
                </p>
                <p className="text-danger text-[red] text-[14px]">
                  Inclusive deal of the day
                </p>
              </div>
            </div>
            <p className="mt-[25px] text-[16px] max-w-[390px] font-light text-center md:text-left mx-auto">
              {oneProduct.description}
            </p>
            <div className="flex flex-col items-center md:block">
              <p className="mt-[20px] text-[rgb(13,_92,_99)] text-[16px] font-semibold">
                STOCK: {oneProduct.stock}
              </p>
              <p className="mt-[20px] text-[rgb(255,_123,_71)] font-normal">
                RATING: {oneProduct.rating}/5 ⭐
              </p>
              <button
                className="p-[10px] border-[1px] border-[solid] border-[rgb(13,92,99)] text-[rgb(255,_255,_255)] bg-[rgb(13,_92,_99)] rounded-[8px] mt-[25px] text-[20px] [transition:all_0.3s_ease-in-out_0s] cursor-pointer hover:opacity-70"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SingleProdInfo;
