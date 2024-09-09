// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules

import { Navigation, Autoplay } from "swiper/modules";

import slider1 from "../../../assets/slider/slider-1.png";
import slider2 from "../../../assets/slider/slider-2.jpg";
import slider3 from "../../../assets/slider/slider-3.png";
import BannerImg from "./BannerImg";
const Banner = () => {
   return (
      <div>
         <Swiper navigation={true} modules={[Navigation, Autoplay]} autoplay className="mySwiper">
            <SwiperSlide>
               <div className="flex  bg-[#02afe5] justify-center items-center">
                  <BannerImg></BannerImg>
                  <img className="w-[930px]" src={slider1} alt="" />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="flex bg-[#02afe5] justify-center items-center">
                  <BannerImg></BannerImg>
                  <img className="w-[930px]" src={slider2} alt="" />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               {" "}
               <div className="flex bg-[#02afe5] justify-center items-center">
                  <BannerImg></BannerImg>
                  <img className="w-[930px]" src={slider3} alt="" />
               </div>
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

export default Banner;
