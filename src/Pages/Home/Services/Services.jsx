import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import useServiceData from "../../../Hooks/useServiceData/useServiceData";
// import useAuth from "../../../Hooks/useAuth";

const Services = () => {
   const [servicesData, isPending] = useServiceData();

   
   return (
      <div className="max-w-7xl mx-auto my-8">
         <h2 className="text-2xl font-bold font-pansy">Popular Packages</h2>
         <div className="divider my-0"></div>
         {isPending ? (
            <div className="text-center text-3xl">
               <span className="loading loading-bars loading-xs"></span>
               <span className="loading loading-bars loading-sm"></span>
               <span className="loading loading-bars loading-md"></span>
               <span className="loading loading-bars loading-lg"></span>
            </div>
         ) : (
            <div className="md:grid grid-cols-3 gap-5 space-y-3 z-0">
               {servicesData.slice(0, 6).map((service) => (
                  <ServiceCard key={service._id} service={service}></ServiceCard>
               ))}{" "}
            </div>
         )}
      </div>
   );
};

export default Services;
