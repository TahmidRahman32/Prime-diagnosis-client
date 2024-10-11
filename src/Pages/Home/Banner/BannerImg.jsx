const BannerImg = ({ banner }) => {
   const { coupon_code, discount_rate, status, text, title } = banner;

   return (
      <div className=" space-y-3  justify-between  md:block ">
         <p className="text-ms text-gray-500 font-token">Your trusted healthcare partner</p>
         <h2 className="font-bold text-5xl font-pansy ">{title}</h2>
         <div className="w-full md:w-96  mb-6">
            {status === "Active" ? (
               <div className="bg-[#E5D19F]  md:w-[550px] flex justify-between rounded-xl">
                  <div className=" w-full divide-y divide-dashed divide-[#C69F64]">
                     <h2 className="text-center my-2 font-pansy text-xl font-bold">First Login & First Appointment </h2>
                     <div></div>
                     <h2 className="uppercase text-center text-3xl py-3 ">
                        <span className="font-token font-bold">Gift </span> <br />
                        <span className="text-[#633923] font-token font-semibold">voucher </span>
                     </h2>
                     <div className="bg-black">
                        <p className="text-center text-white font-pansy text-sm">Your trusted healthcare partner</p>
                     </div>
                  </div>

                  <div className="bg-[#C69F64] py-4 px-6 relative rounded-e-xl">
                     <div className="bg-black rotate-45 h-24 w-24 mt-5 rounded-lg shadow-md border-2 border-[#E5D19F]"></div>
                     <div className="absolute top-10 left-3 right-4">
                        <h4 className="font-pansy text-sm text-center text-white px-4 py-2 ">Discount</h4>
                        <h2 className="text-5xl font-bold font-super text-white text-center">{discount_rate}</h2>
                     </div>
                  </div>
               </div>
            ) : (
               <div className="bg-[#E5D19F]  md:w-[550px] flex justify-between rounded-xl">
                  <div className=" w-full divide-y divide-dashed divide-[#C69F64]">
                     <h2 className="text-center my-2 font-pansy text-xl font-bold">First Login & First Appointment </h2>
                     <div></div>
                     <h2 className="uppercase text-center text-3xl py-3 ">
                        <span className="font-token font-bold">Gift </span> <br />
                        <span className="text-[#633923] font-token font-semibold">voucher </span>
                     </h2>
                     <div className="bg-black">
                        <p className="text-center text-white font-pansy text-sm">Your trusted healthcare partner</p>
                     </div>
                  </div>

                  <div className="bg-[#C69F64] py-4 px-6 relative rounded-e-xl">
                     <div className="bg-black rotate-45 h-24 w-24 mt-5 rounded-lg shadow-md border-2 border-[#E5D19F]"></div>
                     <div className="absolute top-10 left-3 right-4">
                        <h4 className="font-pansy text-sm text-center text-white px-4 py-2 ">Discount</h4>
                        <h2 className="text-xs font-bold font-pansy text-white text-center">Not Available</h2>
                     </div>
                  </div>
               </div>
            )}
         </div>
         <div className="md:flex pt-8 md:gap-0 text-center">
            <button className="relative mb-2 flex h-[50px] md:mx-0 mx-auto w-40 items-center justify-center overflow-hidden bg-gradient-to-r from-sky-800 to-[#43b27f] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#43b27f] before:duration-500 before:ease-out hover:shadow-[#43b27f] hover:before:h-56 hover:before:w-56">
               <span className="relative z-10 font-pansy font-bold">Find A Doctor</span>
            </button>
            <button className="relative flex md:mx-0 mx-auto h-[50px] w-40 items-center justify-center overflow-hidden bg-gradient-to-r from-sky-800 to-[#43b27f] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#43b27f] before:duration-500 before:ease-out hover:shadow-[#43b27f] hover:before:h-56 hover:before:w-56">
               <span className="relative z-10 font-pansy font-bold">Patient Preparation</span>
            </button>
         </div>
      </div>
      // <div className=" space-y-3 ">
      //    <p className="text-ms text-gray-200 font-normal">Your trusted healthcare partner</p>
      //    <h2 className="font-bold text-5xl font-pansy ">Your Good Health is Our Responsibility</h2>
      //    <p className="text-ms text-gray-200 font-normal">Get your appointment through online and remain safe at your home. Because your safety is our first priority.</p>
      //    <div className="flex pt-8">
      //       <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gradient-to-r from-sky-800 to-[#43b27f] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#43b27f] before:duration-500 before:ease-out hover:shadow-[#43b27f] hover:before:h-56 hover:before:w-56">
      //          <span className="relative z-10 font-pansy font-bold">Find A Doctor</span>
      //       </button>
      //       <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gradient-to-r from-sky-800 to-[#43b27f] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#43b27f] before:duration-500 before:ease-out hover:shadow-[#43b27f] hover:before:h-56 hover:before:w-56">
      //          <span className="relative z-10 font-pansy font-bold">Patient Preparation</span>
      //       </button>
      //    </div>
      // </div>
   );
};

export default BannerImg;
