import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/axios/useAxiosSecure";
import { Helmet } from "react-helmet";
import NotPound from "../../../Sheard/NotPound";
import { RiDeleteBin5Fill } from "react-icons/ri";

const PaymentHistory = () => {
   const axiosSecure = useAxiosSecure();
   const { data: payment = [] } = useQuery({
      queryKey: ["payment"],
      queryFn: async () => {
         const res = await axiosSecure.get(`/payment`);
         return res?.data;
      },
   });
   const { email, price, date } = payment;

   return (
      <div>
         <Helmet>
            <title> Home</title>
         </Helmet>
         {payment.length > 0 ? (
            <div className="max-w-screen-xl mx-auto mt-8">
               <div className="flex justify-between">
                  <h2 className="text-3xl uppercase font-bold">User Payment List: {payment.length}</h2>
                  {/* <div className="flex gap-5">
                     <h2 className="text-3xl uppercase font-bold">
                        total Price: $<span className="text-green-600">{totalPrice}</span>
                     </h2>
                     <Link to={"/dashboard/payment"}>
                        <button className="relative rounded-xl flex h-[40px] px-4 items-center justify-center overflow-hidden bg-gradient-to-r from-[#1E2761] to-[#43b27f] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#43b27f] before:duration-500 before:ease-out hover:shadow-cyan-400 hover:before:h-56 hover:before:w-56">
                           <span className="relative z-10 font-pansy font-bold">Pay</span>
                        </button>
                     </Link>
                  </div> */}
               </div>
               <div className="overflow-x-auto mt-8 ">
                  <table className="table ">
                     {/* head */}
                     <thead className="bg-[#02afe5] ">
                        <tr>
                           <th>#</th>
                           {/* <th>Name</th> */}
                           <th>email</th>
                           {/* <th>subject</th> */}
                           <th> Date And Time</th>
                           <th>Doctor</th>
                           <th>Price</th>

                           <th>delete</th>
                        </tr>
                     </thead>
                     <tbody className="mx-8">
                        {payment.map((pay, inx) => (
                           <tr key={pay._id}>
                              <td className="font-bold">{inx + 1} </td>

                              <td>
                                 {/* <h2 className="font-bold font-pansy">{pay.name}</h2> */}
                              </td>
                              <td>
                                 <h2 className="font-bold font-pansy">{pay.email}</h2>
                              </td>
                              {/* <th>{pay.subject}</th> */}
                              <th>{pay.date}</th>
                              {/* <th>{pay.doctor}</th> */}
                              <th>${pay.price}</th>

                              <th>
                                 <button title="delete" className="bg-red-500 px-2 py-2 rounded-full">
                                    <RiDeleteBin5Fill size={25} />
                                 </button>
                              </th>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         ) : (
            <NotPound title={"Your Booking Not Available"} />
         )}
      </div>
   );
};

export default PaymentHistory;
