

const BannerImg = () => {
   return (
      <div className=" space-y-3 ">
         <p className="text-ms text-gray-200 font-normal">Your trusted healthcare partner</p>
         <h2 className="font-bold text-5xl font-pansy ">Your Good Health is Our Responsibility</h2>
         <p className="text-ms text-gray-200 font-normal">Get your appointment through online and remain safe at your home. Because your safety is our first priority.</p>
         <div className="flex pt-8">
            <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gradient-to-r from-sky-800 to-[#43b27f] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#43b27f] before:duration-500 before:ease-out hover:shadow-[#43b27f] hover:before:h-56 hover:before:w-56">
               <span className="relative z-10 font-pansy font-bold">Find A Doctor</span>
            </button>
            <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gradient-to-r from-sky-800 to-[#43b27f] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#43b27f] before:duration-500 before:ease-out hover:shadow-[#43b27f] hover:before:h-56 hover:before:w-56">
               <span className="relative z-10 font-pansy font-bold">Patient Preparation</span>
            </button>
         </div>
      </div>
   );
};

export default BannerImg;