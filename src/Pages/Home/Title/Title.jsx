import React from 'react';
import { GiGloves } from "react-icons/gi";
import { MdMedicalServices, MdOutlineSupervisorAccount } from "react-icons/md";
const Title = () => {
   return (
      <div>
         <div className="md:grid grid-cols-3 max-w-7xl mx-auto my-12 gap-8 space-y-4">
            <div className="flex items-center gap-2 animate__animated animate__fadeInLeftBig animate__slow">
               <div className="rounded-full p-2 border-dotted border-2 border-sky-500">
                  <GiGloves size={35} />
               </div>
               <div className="space-y-1">
                  <h2 className="text-2xl font-bold font-pansy">Emergency Diagnostic Services</h2>
                  <p className="text-sm">Emergency Diagnostic Services without extra service charge</p>
               </div>
            </div>
            <div className="flex items-center gap-2 animate__animated animate__fadeInLeftBig animate__slow">
               <div className="rounded-full p-2 border-dotted border-2 border-sky-500">
                  <MdMedicalServices size={35} />
               </div>
               <div className="space-y-1">
                  <h2 className="text-2xl font-bold font-pansy">One-stop Quality Diagnostic Service</h2>
                  <p className="text-sm">We provide one stop service for patients for all their diagnostic and test needs</p>
               </div>
            </div>
            <div className="flex items-center gap-2 animate__animated animate__fadeInLeftBig animate__slow">
               <div className="rounded-full p-2 border-dotted border-2 border-sky-500">
                  <MdOutlineSupervisorAccount size={35} />
               </div>
               <div className="space-y-1">
                  <h2 className="text-2xl font-bold font-pansy">Get Result via Email</h2>
                  <p className="text-sm">You can request to get your lab results via Email</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Title;