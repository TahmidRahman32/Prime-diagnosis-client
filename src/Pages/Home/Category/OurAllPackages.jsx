import React, { useEffect, useState } from "react";
import ServiceCard from "../Services/ServiceCard";
import Headers from "../../../Sheard/Headers/Headers";

const OurAllPackages = () => {
   const [services, setService] = useState([]);
   useEffect(() => {
      fetch("https://assignment-12-server-alpha-eight.vercel.app/service")
         .then((res) => res.json())
         .then((data) => {
            setService(data);
         });
   }, []);

   return (
      <div>
         <Headers previous={"Home"} current={"Packages"} title={"Our Packages"}></Headers>
         <div className="max-w-7xl mx-auto my-8">
            <h2 className="text-2xl font-bold font-pansy">Popular Packages</h2>
            <div className="divider my-0"></div>
            <div className="md:grid grid-cols-3 gap-5 space-y-4">
               {services.map((service) => (
                  <ServiceCard key={service._id} service={service}></ServiceCard>
               ))}{" "}
            </div>
         </div>
      </div>
   );
};

export default OurAllPackages;
