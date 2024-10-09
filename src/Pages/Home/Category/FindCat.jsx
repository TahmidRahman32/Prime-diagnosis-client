import React from "react";
import { Link } from "react-router-dom";

const FindCat = ({ title, text, path, btn }) => {
   return (
      <div className="bg-sky-700 text-center text-white py-8 space-y-1 rounded-lg animate__animated animate__fadeInRightBig animate__slow">
         <h5 className="font-pansy">{title}</h5>
         <h2 className=" text-2xl font-bold">{text}</h2>
         <Link to={path}>
            <button className="relative mx-auto rounded-xl flex h-[40px] px-4 items-center justify-center overflow-hidden bg-gradient-to-r from-[#1E2761] to-[#43b27f] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#43b27f] before:duration-500 before:ease-out hover:shadow-cyan-400 hover:before:h-56 hover:before:w-56">
               <span className="relative z-10 font-pansy font-bold">{btn}</span>
            </button>
         </Link>
      </div>
   );
};

export default FindCat;
