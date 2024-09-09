import React from 'react';
import { LuArrowBigRight } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const Headers = ({previous,current, title}) => {
   return (
      <div className="bg-headersImg bg-center bg-cover h-72 mb-16 ">
         <div className="h-72 text-white gap-3 bg-gradient-to-r from-[#030911E0]  to-[#050627E0]">
            <div className="text-center pt-28 space-y-3">
               <div>
                  <h2 className="text-4xl font-bold font-pansy">{title}</h2>
               </div>
               <div className="flex items-center justify-center gap-2 ">
                  <Link to={"/"} className="hover:text-[#060cd6] font-pansy">
                     {previous}
                  </Link>
                  <LuArrowBigRight size={20} color="#060cd6" />
                  <Link className="font-pansy text-xl text-[#060cd6]">{current}</Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Headers;