"use client";

import { useState } from "react";
import Image from "next/image";
import { FC } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface SingleProdSlider {
  photos: string[];
  mainphoto: string;
}

const SingleProdImageSlider: FC<SingleProdSlider> = ({ photos, mainphoto }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const allPhotos = [mainphoto, ...photos];

  return (
    <section className="single-product-slider">
      <div>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="single-prod-slider-top"
        >
          {allPhotos.map((image, index) => (
            <SwiperSlide key={`single-product-photo-slider-${index}`}>
              <Image
                src={image}
                width={400}
                height={400}
                alt="product"
                className="single-product-slider-main-photo"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={12}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="single-prod-slider-bottom single-prod-slider-thumbnails"
        >
          {allPhotos.map((image, index) => (
            <SwiperSlide key={`single-prod-slider-thumbnail-${index}`}>
              <Image src={image} width={150} height={150} alt="products" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SingleProdImageSlider;
