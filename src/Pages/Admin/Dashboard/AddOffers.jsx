import React from "react";
import { useForm } from "react-hook-form";

// import Swal from "sweetalert2";
import moment from "moment";

import Headers from "../../../Sheard/Headers/Headers";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/axios/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "./../../../Hooks/axios/useAxiosPublic";
import { ImSpinner9 } from "react-icons/im";
const img_hosting_key = import.meta.env.VITE_IMG_HOSTING_APIKEY;
const img_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const AddOffers = () => {
   const {loading, setLoading} = useAuth();
   const axiosSecure = useAxiosSecure();
   const axiosPublic = useAxiosPublic();

   const { register, handleSubmit } = useForm();
   const onSubmit = async (data) => {
      setLoading(true)
      const imgFile = { image: data.image[0] };

      const res = await axiosPublic.post(img_api, imgFile, {
         headers: { "content-type": "multipart/form-data" },
      });
      const OffersData = {
         title: data.title,
         image: res.data.data.display_url,
         coupon_code: data.coupon_code,
         discount_rate: data.discount_rate,
         addDate: moment().format("L"),
      };
      console.log(OffersData);

      axiosSecure.post("/offers", OffersData).then((res) => {
         // console.log(res.data);
         if (res.data.insertedId) {
            Swal.fire({
               position: "center",
               icon: "success",
               title: "Your Appointment Successfully Done",
               showConfirmButton: false,
               timer: 1500,
            });
         }
         setLoading(false)
      });
   };
   return (
      <div>
         <Headers previous={"Home"} current={"Add Offers"}></Headers>
         <div className="text-center">
            <h2 className="text-3xl font-bold font-token">Add Your Service Offers</h2>
            <p className="font-pansy">This Data Available is Slider page</p>
         </div>
         <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
            <form onSubmit={handleSubmit(onSubmit)} className="container py-8 flex flex-col mx-auto dark:bg-gray-300 rounded-lg">
               <fieldset className="grid grid-cols-3 gap-8 p-6 rounded-md shadow-sm ">
                  <div className="grid grid-cols-6 gap-12 col-span-full lg:col-span-3">
                     <div className="col-span-full sm:col-span-3">
                        <label htmlFor="title" className="text-sm">
                           title<span className="text-xl text-red-600">*</span>
                        </label>
                        <input
                           {...register("title", { required: true })}
                           id="name"
                           type="text"
                           placeholder="Title"
                           className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                        />
                     </div>
                     <div className="col-span-full sm:col-span-3">
                        <label htmlFor="email" className="text-sm">
                           Image (Please Add Background Remove Image)<span className="text-xl text-red-600">*</span>
                        </label>
                        <input
                           type="file"
                           {...register("image", { required: true })}
                           name="image"
                           placeholder="email"
                           className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                           required
                        />
                     </div>
                     <div className="col-span-full sm:col-span-3">
                        <label htmlFor="lastname" className="text-sm">
                           Coupon Code
                        </label>
                        <input
                           {...register("coupon_code")}
                           id="Phone"
                           type="text"
                           placeholder="Coupon_Code"
                           className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                        />
                     </div>
                     <div className="col-span-full sm:col-span-3">
                        <label htmlFor="lastname" className="text-sm">
                           Discount Rate
                        </label>
                        <input
                           {...register("discount_rate")}
                           id="discount_rate"
                           type="text"
                           placeholder="discount_rate"
                           className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                        />
                     </div>

                     {/* <div className="col-span-full sm:col-span-3">
                        <label htmlFor="email" className="text-sm">
                           Doctor<span className="text-xl text-red-600">*</span>
                        </label>
                        <select className="w-full rounded-md  focus:ring-opacity-75  py-3 px-3  dark:text-gray-800 focus:bg-neutral-300 appearance-none dark:border-gray-300" {...register("doctor", { required: true })}>
                           <option value="">Select Doctor...</option>
                           <option value="Dr.Sohel Mahmud">Dr. Sohel Mahmud</option>
                           <option value="Dr.Sahana Zaman">Dr. Sahana Zaman</option>
                           <option value="Dr.Md.Rowsan Masud">Dr. Md. Rowsan Masud</option>
                           <option value="Dr.Mohammad Atikur Rahman">Dr. Mohammad Atikur Rahman</option>
                           <option value="Dr. Porimol Kumar Das">Dr. Porimol Kumar Das</option>
                        </select>
                     </div> */}

                     <div className="col-span-full">
                        <label htmlFor="address" className="text-sm">
                           Text<span className="text-xl text-red-600">*</span>
                        </label>

                        <input type="text" {...register("text", { required: true })} className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" />
                     </div>
                  </div>
               </fieldset>
               <button
                  disabled={loading}
                  className="relative mx-auto flex h-[50px] w-48 rounded-lg items-center justify-center overflow-hidden bg-gradient-to-r from-sky-800 to-[#43b27f] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#43b27f] before:duration-500 before:ease-out hover:shadow-[#43b27f] hover:before:h-56 hover:before:w-56"
               >
                  {loading ? (
                     <span className="relative z-10 font-pansy text-xl animate-spin mx-auto">
                        <ImSpinner9 />
                     </span>
                  ) : (
                     <span className="relative z-10 font-pansy text-xl">Submit</span>
                  )}
               </button>
            </form>
         </section>
      </div>
   );
};

export default AddOffers;
