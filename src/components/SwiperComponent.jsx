import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const SwiperComponent = () => {
  const slides = [
    {
      src: "https://i.pinimg.com/736x/9a/17/ca/9a17cac29e32653c5294123bbb1e088d.jpg",
    },
    {
      src: "https://mrwallpaper.com/images/thumbnail/pikachu-3d-pokemon-of-ash-gywmnxvp8i06wpmb.webp",
    },
    {
      src: "https://c.wallhere.com/photos/51/ef/Pok_mon_Ash_Ketchum_Pikachu-2131525.jpg!d",
    },
    {
      src: "https://www.chromethemer.com/wallpapers/android/images/640/pokemon-hd-wallpaper-for-android.png",
    },
    {
      src: "https://i.pinimg.com/736x/ba/fc/c3/bafcc35ea8edbbf65ed442ee267bad05.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2023/05/23/12/48/squirtle-8012702_1280.jpg",
    },
    {
      src: "https://cdn.openart.ai/uploads/image_LlXV3wjb_1684859280243_512.webp",
    }
  ];

  return (
    <div className="flex justify-center items-center py-6 md:py-12">
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        initialSlide={3} // Set the initial slide index to 3 (4th image)
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 350,
          modifier: 1,
          slideShadows: true
        }}
        pagination={{ clickable: true }}
        className="swiper-container max-w-screen-md"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="swiper-slide bg-transparent rounded-lg overflow-hidden" style={{ width: '200px', height: '350px' }}>
            <div className="picture w-full h-full overflow-hidden">
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
