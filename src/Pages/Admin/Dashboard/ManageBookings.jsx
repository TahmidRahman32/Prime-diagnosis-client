import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import NotPound from "../../../Sheard/NotPound";
import UseBookingData from "../../../Hooks/BookingData/UseBookingData";

const ManageBookings = () => {
   const [bookings] = UseBookingData();

   const handleDeleteBtn = (book) => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
      }).then((result) => {
         if (result.isConfirmed) {
            axiosSecure.delete(`/bookings/${book}`).then((res) => {
               console.log(res.data);
               if (res.data.deletedCount) {
                  refetch();
                  Swal.fire({
                     title: "Deleted!",
                     text: "Your Order has been deleted.",
                     icon: "success",
                  });
               }
            });
         }
      });
   };
   return (
      <div>
         <Helmet>
            <title> manageBookings</title>
         </Helmet>
         {bookings.length > 0 ? (
            <div className="max-w-screen-xl mx-auto mt-8">
               <div className="flex justify-between">
                  <h2 className="text-3xl uppercase font-bold">Your Booking List: {bookings.length}</h2>
                  <div className="flex gap-5">
                     <h2 className="text-3xl uppercase font-bold">
                        Visit Price: $<span className="text-green-600"></span>
                     </h2>
                  </div>
               </div>
               <div className="overflow-x-auto mt-8 ">
                  <table className="table ">
                     {/* head */}
                     <thead className="bg-[#02afe5] ">
                        <tr>
                           <th>#</th>

                           <th>Name</th>
                           <th>email</th>
                           <th>subject</th>
                           <th> Date And Time</th>
                           <th>Doctor</th>
                           <th>pay</th>
                           <th>delete</th>
                        </tr>
                     </thead>
                     <tbody className="mx-8">
                        {bookings.map((booking, inx) => (
                           <tr key={booking._id}>
                              <td className="font-bold">{inx + 1} </td>

                              <td>
                                 <h2 className="font-bold font-pansy">{booking.name}</h2>
                              </td>
                              <td>
                                 <h2 className="font-bold font-pansy">{booking.email}</h2>
                              </td>
                              <th>{booking.subject}</th>
                              <th>{booking.date}</th>
                              <th>{booking.doctor}</th>
                              <th>
                                 {" "}
                                 <Link to={"/dashboard/payment"}>
                                    <button className="relative rounded-xl flex h-[40px] px-4 items-center justify-center overflow-hidden bg-gradient-to-r from-[#1E2761] to-[#43b27f] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#43b27f] before:duration-500 before:ease-out hover:shadow-cyan-400 hover:before:h-56 hover:before:w-56">
                                       <span className="relative z-10 font-pansy font-bold">Pay</span>
                                    </button>
                                 </Link>
                              </th>

                              <th>
                                 <button onClick={() => handleDeleteBtn(booking._id)} title="delete" className="bg-red-500 px-2 py-2 rounded-full">
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

export default ManageBookings;
