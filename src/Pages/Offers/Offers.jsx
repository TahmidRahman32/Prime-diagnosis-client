import { useQuery } from "@tanstack/react-query";
import React from "react";
import Offer from "./Offer";

const Offers = () => {
   const { data: offers = [] } = useQuery({
      queryKey: ["bannerData"],
      queryFn: () => {
         const res = fetch("banner.json").then((resp) => resp.json());
         return res;
      },
   });
   console.log(offers);

   return (
      <div>
         <div className="">
            {offers.map((offer, inx) => (
               <Offer key={inx} offer={offer}></Offer>
            ))}
         </div>
      </div>
   );
};

export default Offers;
