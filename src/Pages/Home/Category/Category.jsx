import { Link } from "react-router-dom";


const Category = () => {
   return (
      <div className="grid grid-cols-4 max-w-7xl mx-auto my-3 gap-8">
         <div className="bg-sky-700 text-center text-white py-8 space-y-1 rounded-lg">
            <h5 className="font-pansy">Looking for doctors?</h5>
            <h2 className=" text-2xl font-bold">Find here</h2>
            <button className="relative mx-auto rounded-xl flex h-[40px] px-4 items-center justify-center overflow-hidden bg-gradient-to-r from-[#1E2761] to-[#43b27f] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#43b27f] before:duration-500 before:ease-out hover:shadow-cyan-400 hover:before:h-56 hover:before:w-56">
               <span className="relative z-10 font-pansy font-bold">Find A Doctor</span>
            </button>
         </div>
         <div className="bg-[#1995ad] text-center text-white py-8 space-y-1 rounded-lg">
            <h5 className="font-pansy">When to come in?</h5>
            <h2 className=" text-2xl font-bold">Book here</h2>
            <button className="relative mx-auto rounded-xl flex h-[40px] px-4 items-center justify-center overflow-hidden bg-gradient-to-r from-[#1E2761] to-[#43b27f] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#43b27f] before:duration-500 before:ease-out hover:shadow-cyan-400 hover:before:h-56 hover:before:w-56">
               <span className="relative z-10 font-pansy font-bold"> Appointment</span>
            </button>
         </div>
         <div className="bg-[#75bece] text-center text-white py-8 space-y-1 rounded-lg">
            <h5 className="font-pansy">Need test information?</h5>
            <h2 className=" text-2xl font-bold">Our Packages</h2>
            <Link to={"/ourPackage"}>
               <button className="relative mx-auto rounded-xl flex h-[40px] px-4 items-center justify-center overflow-hidden bg-gradient-to-r from-[#1E2761] to-[#43b27f] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#43b27f] before:duration-500 before:ease-out hover:shadow-cyan-400 hover:before:h-56 hover:before:w-56">
                  <span className="relative z-10 font-pansy font-bold">Packages</span>
               </button>
            </Link>
         </div>
         <div className="bg-[#848696] text-center text-white py-8 space-y-1 rounded-lg">
            <h5 className="font-pansy">Got a question?</h5>
            <h2 className=" text-2xl font-bold">Send us your query</h2>
            <Link to={"/location"}>
               <button className="relative mx-auto rounded-xl flex h-[40px] px-4 items-center justify-center overflow-hidden bg-gradient-to-r from-[#1E2761] to-[#43b27f] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#43b27f] before:duration-500 before:ease-out hover:shadow-cyan-400 hover:before:h-56 hover:before:w-56">
                  <span className="relative z-10 font-pansy font-bold">Our Location</span>
               </button>
            </Link>
         </div>
      </div>
   );
};

export default Category;