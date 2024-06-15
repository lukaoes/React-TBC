"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import RecentProductCard from "../cards/recentProductCard";
import { ProductsDisplay } from "../../types";

interface IProd {
  products: ProductsDisplay;
}

const RecentProductsSlider = ({ products }: IProd) => {
  return (
    <div>
      <div className="recent-products-slider">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={4}
          scrollbar={{ draggable: true }}
        >
          {products.map((product, index) => (
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
