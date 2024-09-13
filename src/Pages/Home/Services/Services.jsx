import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import useServiceData from "../../../Hooks/useServiceData/useServiceData";



const Services = () => {
   const [servicesData] = useServiceData();
   // const [services, setService] = useState([]);

   // useEffect(()=>{
   //    fetch("http://localhost:8000/service")
   //       .then((res) => res.json())
   //       .then((data) => {

   //          setService(data);
   //       });
   // },[])

   return (
      <div className="max-w-7xl mx-auto my-8">
         <h2 className="text-2xl font-bold font-pansy">Popular Packages</h2>
         <div className="divider my-0"></div>
         <div className="grid grid-cols-3 gap-5">
            {
               servicesData.slice(0,6).map(service => <ServiceCard key={service._id} service={service}></ServiceCard> )
            } </div>
      </div>
   );
};

export default Services;
