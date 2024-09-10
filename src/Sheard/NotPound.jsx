import React from "react";

import { Link } from "react-router-dom";

const NotPound = ({ title }) => {
   return (
      <section className="flex items-center h-full ">
         <div className=" flex flex-col min-h-[calc(100vh-64px)]  items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
               <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
                  <span className="sr-only">Error</span>404
               </h2>
               <p className="text-2xl font-semibold font-pansy md:text-3xl">{title}</p>
               <p className="mt-4 mb-8 text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
               <Link to={"/"} className="font-semibold rounded">
                  <button className="relative mx-auto flex h-[50px] w-48 rounded-lg items-center justify-center overflow-hidden bg-gradient-to-r from-sky-800 to-[#43b27f] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#43b27f] before:duration-500 before:ease-out hover:shadow-[#43b27f] hover:before:h-56 hover:before:w-56">
                     <span className="relative z-10 font-pansy text-xl "> Back to homepage</span>
                  </button>
               </Link>
            </div>
         </div>
      </section>
   );
};

export default NotPound;
