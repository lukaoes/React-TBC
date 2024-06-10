"use client";
import example from "../../public/assets/images/secondHeader/addCampsite.jpg";
import { useState } from "react";
import Image from "next/image";
import { FC } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// interface SingleProdSlider {
//   photos: string[];
//   mainphoto: string;
// }
// const SingleProdImageSlider: FC<SingleProdSlider> = ({ photos, mainphoto }) => {

const SingleCampImages = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  // const allPhotos = [mainphoto, ...photos];
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const allPhotos = [example, example, example, example];

  return (
    <section className="single-camp-slider">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="single-camp-slider-top"
      >
        {allPhotos.map((image, index) => (
          <SwiperSlide
            key={`single-camp-photo-slider-${index}`}
            onClick={() => {
              setIsOpen(true);
              setPhotoIndex(index);
            }}
          >
            <Image
              src={image}
              width={1300}
              height={1300}
              alt="product"
              className="single-camp-slider-main-photo"
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
        className="single-camp-slider-bottom single-camp-slider-thumbnails"
      >
        {allPhotos.map((image, index) => (
          <SwiperSlide key={`single-camp-slider-thumbnail-${index}`}>
            <Image src={image} width={500} height={500} alt="products" />
          </SwiperSlide>
        ))}
      </Swiper>

      {isOpen && (
        <Lightbox
          mainSrc={allPhotos[photoIndex]}
          nextSrc={allPhotos[(photoIndex + 1) % allPhotos.length]}
          prevSrc={
            allPhotos[(photoIndex + allPhotos.length - 1) % allPhotos.length]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + allPhotos.length - 1) % allPhotos.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % allPhotos.length)
          }
        />
      )}
    </section>
  );
};

export default SingleCampImages;
