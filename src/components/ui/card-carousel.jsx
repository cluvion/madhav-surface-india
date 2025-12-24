"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"

export const CardCarousel = ({
  images,
  products,
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
}) => {
  const css = `
  .swiper {
    width: 100%;
    padding: 10px;
  }
  
  @media (min-width: 640px) {
    .swiper {
      padding: 20px;
    }
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 280px;
  }
  
  @media (min-width: 640px) {
    .swiper-slide {
      width: 400px;
    }
  }
  
  @media (min-width: 1024px) {
    .swiper-slide {
      width: 500px;
    }
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  
  /* Apply shadow only to center/active slide */
  .swiper-slide-active .carousel-slide {
    filter: drop-shadow(-5px 0px 15px rgba(0, 0, 0, 0.1)) drop-shadow(5px 0px 15px rgba(0, 0, 0, 0.1)) !important;
  }
  
  .carousel-slide {
    filter: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .carousel-slide:hover {
    transform: translateY(-5px) scale(1.02);
  }
  
  .product-title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    color: white;
    padding: 20px 16px 16px;
    font-size: 1.25rem;
    font-weight: 400;
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .carousel-slide:hover .product-title {
    opacity: 1;
  }
  `

  return (
    <section className="w-full">
      <style>{css}</style>
      <div className="mx-auto w-full ">
        {/* <div className="mx-auto w-full max-w-7xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-[44px]"> */}
        <div className="relative mx-auto flex w-full flex-col">
          {/* <div className="relative mx-auto flex w-full flex-col rounded-[24px] border border-black/5 bg-neutral-800/5 p-4 shadow-sm md:rounded-[40px]"> */}
          <div className="w-full ">
            <Swiper
              spaceBetween={30}
              autoplay={{
                delay: autoplayDelay,
                disableOnInteraction: false,
              }}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={showPagination}
              navigation={
                showNavigation
                  ? {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }
                  : undefined
              }
              modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            >
              {(products || images)?.map((item, index) => {
                const isProduct = products && item.id;
                const imageSrc = isProduct ? item.src : item.src;
                const imageAlt = isProduct ? item.alt : item.alt;
                const productName = isProduct ? item.name : null;
                const productId = isProduct ? item.id : null;

                const slideContent = (
                  <div
                    className="aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 my-6 carousel-slide relative"
                    style={{}}
                  >
                    <Image
                      src={imageSrc}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover rounded-xl"
                      alt={imageAlt}
                    />
                    {productName && (
                      <div className="product-title">
                        {productName}
                      </div>
                    )}
                  </div>
                );

                return (
                  <SwiperSlide key={index}>
                    {isProduct ? (
                      <Link href={`/product/${productId}`}>
                        {slideContent}
                      </Link>
                    ) : (
                      slideContent
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}