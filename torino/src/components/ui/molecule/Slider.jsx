"use client";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { useRef } from "react";
import "swiper/css/effect-cards";
import { e2p } from "@/utils/numbers";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderImages } from "@/constants/constant";
import styles from "@/ui/molecule/Slider.module.css";
import { EffectCards, Pagination } from "swiper/modules";

function Slider() {
  const swiperRef = useRef(null);

  return (
    <div className={styles.slider}>
      <Swiper
        pagination={{
          type: "fraction",
          el: ".swiper-pagination",
          formatFractionTotal: (number) => e2p(number),
          formatFractionCurrent: (number) => e2p(number),
        }}
        modules={[Pagination, EffectCards]}
        cardsEffect={{ slideShadows: false }}
        effect={"cards"}
        spaceBetween={1}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <div>
          {sliderImages.map((image) => (
            <SwiperSlide key={image.id}>
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
                quality={100}
              />
            </SwiperSlide>
          ))}
        </div>
        <div className="swiper-nav-btns">
          <button onClick={() => swiperRef.current.slideNext()}>
            <GoArrowLeft />
          </button>
          <span className="swiper-pagination"></span>
          <button onClick={() => swiperRef.current.slidePrev()}>
            <GoArrowRight />
          </button>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;
