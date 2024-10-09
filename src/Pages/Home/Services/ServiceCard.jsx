import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { ImSpinner9 } from "react-icons/im";
import "animate.css";
const ServiceCard = ({ service }) => {
   const { description, image_url, title, price, _id } = service;

   const { loading, setLoading } = useAuth();

   return (
      <div className="card bg-base-100  shadow-xl animate__animated animate__fadeInUp animate__slow">
         <figure>
            <img src={image_url} alt="Shoes" />
         </figure>
         <div className="card-body">
            <h2 className="card-title font-pansy font-bold">{title}</h2>
            <p className="font-normal">{description}</p>
            <div className="border-2 border-[#43b27f33] bg-[#43b27f33] rounded-lg w-1/3 px-2 py-1">
               <span className="font-bold font-pansy">Price:</span> ${price}
            </div>
            <div className="card-actions justify-end">
               <Link to={`details/${_id}`}>
                  <button className="relative flex h-[40px] w-28 rounded-lg items-center justify-center overflow-hidden bg-gradient-to-r from-sky-800 to-[#43b27f] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#43b27f] before:duration-500 before:ease-out hover:shadow-[#43b27f] hover:before:h-56 hover:before:w-56">
                     {loading ? (
                        <span className="relative z-10 font-pansy text-xl animate-spin mx-auto">
                           <ImSpinner9 />
                        </span>
                     ) : (
                        <span className="relative z-10 font-pansy text-xl">Details</span>
                     )}
                  </button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default ServiceCard;
