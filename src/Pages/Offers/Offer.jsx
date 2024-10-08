import React from "react";

const Offer = ({ offer }) => {
   const { image, text, coupon_code, discount_rate, title } = offer;
   return (
      <article className="max-w-7xl px-6 py-14 mx-auto space-y-12 my-8 bg-yellow-200">
         <div className="w-full mx-auto space-y-4 text-center">
            <p className="text-xs font-semibold tracking-wider uppercase text-blue-500">#PRIME DIAGNOSIS</p>
            <div className="md:flex md:items-center md:justify-between">
               <div>
                  <div className="w-full md:w-full px-3">
                     <div className="bg-[#E5D19F]  flex justify-between rounded-xl">
                        <div className=" w-full divide-y divide-dashed divide-[#C69F64]">
                           <h2 className="text-center my-2 font-pansy text-xl font-bold">First Login & First Appointment </h2>
                           <div></div>
                           <h2 className="uppercase text-center text-3xl py-3 ">
                              <span className="font-token font-bold">Gift </span> <br />
                              <span className="text-[#633923] font-token font-semibold">voucher </span>
                           </h2>
                           <div className="bg-black">
                              <p className="text-center py-2 text-white font-pansy text-sm">
                                 <span className="font-token">Your Coupon Code: </span>
                                 <span className="bg-yellow-700 px-2 rounded">{coupon_code}</span>
                              </p>
                           </div>
                        </div>

                        <div className="bg-[#C69F64] py-4 -2 px-6 relative rounded-e-xl">
                           <div className="bg-black rotate-45 h-24 w-24 mt-5 rounded-lg shadow-md border-2 border-[#E5D19F]"></div>
                           <div className="absolute top-10 left-3 right-4">
                              <h4 className="font-pansy text-sm text-center text-white px-4 py-2 ">Discount</h4>
                              <h2 className="text-5xl font-bold font-super text-white text-center">{discount_rate}</h2>
                           </div>
                        </div>
                     </div>
                  </div>
                  <p className="my-4 font-pansy text-xl">{text}</p>
               </div>
               <img className="md:w-[800px] " src={image} alt="" />
            </div>
         </div>

         <div className="pt-12 border-t border-gray-700 hidden md:block">
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
               <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start bg-gray-500 border-gray-700" />
               <div className="flex flex-col">
                  <h4 className="text-lg font-semibold">Leroy Jenkins</h4>
                  <p className="text-gray-400">Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.</p>
               </div>
            </div>
         </div>
      </article>
   );
};

export default Offer;
