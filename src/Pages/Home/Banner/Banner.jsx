// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules

import { Pagination, Autoplay, A11y } from "swiper/modules";

import slider1 from "../../../assets/slider/slider-1.png";
// import slider2 from "../../../assets/slider/slider-2.jpg";
// import slider3 from "../../../assets/slider/slider-3.png";
import BannerImg from "./BannerImg";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./../../../Hooks/axios/useAxiosPublic";
const Banner = () => {
   const axiosPublic = useAxiosPublic();
   const { data: bannerData = [] } = useQuery({
      queryKey: ["bannerData"],
      queryFn: async () => {
         const res = await axiosPublic.get("/offers");
         return res.data;
      },
   });

   return (
      <div className="mt-16 md:my-0 md:mx-12 lg:mx-16">
         <Swiper modules={[Autoplay, Pagination, A11y]} autoplay pagination={{ clickable: true }} className="mySwiper">
            {bannerData.map((banner, inx) => (
               <SwiperSlide key={inx}>
                  <div className="md:flex  justify-center items-center ">
                     <BannerImg banner={banner}></BannerImg>
                     <img className="md:w-[930px] md:h-[600px] w-96" src={banner.image} alt="" />
                  </div>
               </SwiperSlide>
            ))}

            {/* <SwiperSlide>
               <div className="flex bg-[#02afe5] justify-center items-center">
                  <BannerImg></BannerImg>
                  <img className="w-[930px]" src={slider2} alt="" />
               </div>
            </SwiperSlide> */}
            {/* <SwiperSlide>
               {" "}
               <div className="flex bg-[#02afe5] justify-center items-center">
                  <BannerImg></BannerImg>
                  <img className="w-[930px]" src={slider3} alt="" />
               </div>
            </SwiperSlide> */}
         </Swiper>
      </div>
   );
};

export default Banner;
