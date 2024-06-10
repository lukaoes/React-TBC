"use client";
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
import { Campsite } from "../../types";

interface ICamp {
  camp: Campsite;
}

const SingleCampImages: FC<ICamp> = ({ camp }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const allPhotos = [camp.main_photo, ...camp.photo_urls];
  console.log(allPhotos, "alsdasdasd");
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

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
