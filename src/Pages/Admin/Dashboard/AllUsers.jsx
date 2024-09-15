import { useQuery } from "@tanstack/react-query";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/axios/useAxiosSecure";

const AllUsers = () => {
   const axiosSecure = useAxiosSecure();
   const { data: users = [], refetch } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
         const res = await axiosSecure.get(`/users`);
         return res.data;
      },
   });

   const handleDeleteBtn = (user) => {
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
            axiosSecure.delete(`/users/${user._id}`).then((res) => {
               // console.log(res.data);
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

   const handleMakeAdmin = (user) => {
      axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
         // console.log(res.data);
         if (res.data.modifiedCount) {
            refetch();
            Swal.fire({
               position: "top-end",
               icon: "success",
               title: `${user.name} is an admin now!`,
               showConfirmButton: false,
               timer: 1500,
            });
         }
      });
   };

   return (
      <div>
         <div className="max-w-screen-lg mx-auto mt-8">
            <div className="flex">
               <h2 className="text-3xl uppercase font-bold">Total items:{users.length} </h2>
            </div>
            <div className="overflow-x-auto mt-8 ">
               <table className="table ">
                  {/* head */}
                  <thead className="bg-[#02afe5] ">
                     <tr>
                        <th>#</th>
                        <th>image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>action</th>
                        <th>delete</th>
                     </tr>
                  </thead>
                  <tbody className="mx-8">
                     {users.map((item, index) => (
                        <tr key={item._id}>
                           <td>{index + 1}</td>
                           <td>
                              <div className="flex items-center gap-3">
                                 <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                       <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                 </div>
                              </div>
                           </td>
                           <td>
                              <h2>{item.name}</h2>
                           </td>
                           <td>${item.price}</td>
                           <th>
                              {item.role === "admin" ? (
                                 "Admin"
                              ) : (
                                 <button onClick={() => handleMakeAdmin(item)} className="btn btn-ghost btn-xs">
                                    <FaRegEdit size={25} />
                                 </button>
                              )}
                           </th>
                           <th>
                              <button onClick={() => handleDeleteBtn(item)} title="delete" className="bg-red-500 px-2 py-2 rounded-full">
                                 <RiDeleteBin5Fill size={25} />
                              </button>
                           </th>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default AllUsers;
