import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
  } from "swiper/modules";
  
  import { Swiper, SwiperSlide } from "swiper/react";
  
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  
  import saviper from "../../assets/seviper.jpg"
  import saviper2 from "../../assets/6489641736aff.png"
  import saviper3 from "../../assets/17.png"

  
  export const Carusel = () => {
    const imgList = [
      saviper,
      saviper2,
      saviper3
    ];
  
    return (
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {imgList.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="w-full h-[550px] pt-3 ">
                <img
                  className="w-full h-full   object-fill object-center rounded-xl"
                  src={item}
                  alt="Carusel img"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  };
