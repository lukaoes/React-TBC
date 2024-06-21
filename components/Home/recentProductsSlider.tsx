"use client";
import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import RecentProductCard from "../cards/recentProductCard";
import { ProductsDisplay } from "../../types";

interface IProd {
  products: ProductsDisplay;
}

const RecentProductsSlider = ({ products }: IProd) => {
  const limitedProducts = products.slice(0, 8);

  return (
    <div>
      <div className="recent-products-slider">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={40}
          slidesPerView={4}
          navigation
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            450: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {limitedProducts.map((product: ProductsDisplay, index: number) => (
            <SwiperSlide key={`recent-prods-slide-${index}`}>
              <RecentProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecentProductsSlider;
