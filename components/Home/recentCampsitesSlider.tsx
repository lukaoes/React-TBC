"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CampsitesDisplay } from "../../types";
import RecentCampsitesCard from "../cards/recentCampsitesCard";

interface ICamp {
  campsites: CampsitesDisplay;
}

const RecentCampsitesSlider = ({ campsites }: ICamp) => {
  return (
    <div>
      <div className="recent-products-slider">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={3}
          scrollbar={{ draggable: true }}
        >
          {campsites.map((campsite: CampsitesDisplay, index: number) => (
            <SwiperSlide key={`recent-campsites-slide-${index}`}>
              <RecentCampsitesCard campsite={campsite} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecentCampsitesSlider;
