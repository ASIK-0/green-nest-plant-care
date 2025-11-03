import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";        // Swiper components
import { Autoplay, Pagination, EffectFade } from "swiper/modules"; // Swiper features
import "swiper/css";                                      // Basic Swiper styles
import "swiper/css/pagination";                           // Pagination styles
import "swiper/css/effect-fade";                          // Fade effect styles

const HeroSection = () => {
  const slides = [
    {
      image: "https://i.pinimg.com/1200x/21/c8/7e/21c87e56bbf43d40dc3605b175fafca3.jpg",
      text: "Bring Nature to Your Home 🌿",
    },
    {
      image: "https://i.pinimg.com/1200x/c4/83/c4/c483c4a1bc462067a1980fd684f0349b.jpg",
      text: "Care for Plants, Care for Life 🍃",
    },
    {
      image: "https://i.pinimg.com/1200x/27/95/ce/2795ce0f934981a1430a6a17867f4d27.jpg",
      text: "Green Today, Clean Tomorrow 🌱",
    },
  ];

  return (
    <section className="w-full h-[80vh] px-3 md:px-[70px] py-10 relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="">
                <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
                  {slide.text}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
