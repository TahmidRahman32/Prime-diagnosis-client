import { useQuery } from "@tanstack/react-query";
import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import useAxiosSecure from "../../Hooks/axios/useAxiosSecure";
import NotPound from "../../Sheard/NotPound";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const UserHome = () => {
   const axiosSecure = useAxiosSecure();
   const { data: bookings = [], refetch } = useQuery({
      queryKey: ["booking"],
      queryFn: async () => {
         const res = await axiosSecure.get(`/bookings`);
         return res.data;
      },
   });

   const handleDeleteBtn = (book) => {
      console.log("add", book);

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
            <title>Dashboard || Home</title>
         </Helmet>
         {bookings.length > 0 ? (
            <div className="max-w-screen-xl mx-auto mt-8">
               <div className="flex">
                  <h2 className="text-3xl uppercase font-bold">Your Booking List: {bookings.length}</h2>
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
                              <th>{booking.date},</th>
                              <th>{booking.doctor},</th>

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

export default UserHome;
