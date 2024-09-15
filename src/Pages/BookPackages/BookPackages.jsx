import React from "react";
import Headers from "../../Sheard/Headers/Headers";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/axios/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import moment from "moment";
import { useLoaderData } from "react-router-dom";

const BookPackages = () => {
   const { user } = useAuth();
   const bookings = useLoaderData();
   const { title, price ,_id } = bookings;

   const axiosSecure = useAxiosSecure();

   const { register, handleSubmit } = useForm();
   const onSubmit = async (data) => {
      const bookingData = {
         bookingId: _id,
         name: data.name,
         email: data.email,
         subject: data.subject,
         doctor: data.doctor,
         price: price,
         date: moment().format("L"),
      };

      axiosSecure.post("/bookings", bookingData).then((res) => {
         // console.log(res.data);
         if (res.data.insertedId) {
            Swal.fire({
               position: "center",
               icon: "success",
               title: "Your Appointment Successfully Done",
               showConfirmButton: false,
               timer: 1500,
            });
         }
      });
   };
   return (
      <div>
         <Headers previous={"Home"} current={"Booking"} title={"Drop us a message for any query"}></Headers>
         <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
            <form onSubmit={handleSubmit(onSubmit)} className="container py-8 flex flex-col mx-auto dark:bg-gray-300 rounded-lg">
               <fieldset className="grid grid-cols-3 gap-8 p-6 rounded-md shadow-sm ">
                  <div className="grid grid-cols-6 gap-12 col-span-full lg:col-span-3">
                     <div className="col-span-full sm:col-span-3">
                        <label htmlFor="firstname" className="text-sm">
                           First name
                        </label>
                        <input
                           {...register("name", { required: true })}
                           defaultValue={user?.displayName}
                           id="name"
                           type="text"
                           placeholder="Name"
                           className="w-full rounded-md  focus:ring-opacity-75  py-3 px-3  dark:text-gray-800 focus:bg-neutral-300 appearance-none dark:border-gray-300"
                        />
                     </div>
                     <div className="col-span-full sm:col-span-3">
                        <label htmlFor="email" className="text-sm">
                           Email
                        </label>
                        <input
                           {...register("email", { required: true })}
                           id="email"
                           defaultValue={user?.email}
                           type="email"
                           placeholder="Email"
                           className="w-full rounded-md  focus:ring-opacity-75  py-3 px-3  dark:text-gray-800 focus:bg-neutral-300 appearance-none dark:border-gray-300"
                        />
                     </div>
                     <div className="col-span-full sm:col-span-3">
                        <label htmlFor="lastname" className="text-sm">
                           Phone<span className="text-xl text-red-600">*</span>
                        </label>
                        <input
                           {...register("phoneNum", { required: true })}
                           id="lastname"
                           type="tel"
                           placeholder="Inter your Phone Number "
                           className="w-full rounded-md  focus:ring-opacity-75  py-3 px-3  dark:text-gray-800 focus:bg-neutral-300 appearance-none dark:border-gray-300"
                        />
                     </div>

                     <div className="col-span-full sm:col-span-3">
                        <label htmlFor="email" className="text-sm">
                           Doctor<span className="text-xl text-red-600">*</span>
                        </label>
                        <select className="w-full rounded-md  focus:ring-opacity-75  py-3 px-3  dark:text-gray-800 focus:bg-neutral-300 appearance-none dark:border-gray-300" {...register("doctor", { required: true })}>
                           <option value="">Select Doctor...</option>
                           <option value="Dr.Sohel Mahmud">Dr. Sohel Mahmud</option>
                           <option value="Dr.Sahana Zaman">Dr. Sahana Zaman</option>
                           <option value="Dr.Md.Rowsan Masud">Dr. Md. Rowsan Masud</option>
                           <option value="Dr.Mohammad Atikur Rahman">Dr. Mohammad Atikur Rahman</option>
                           <option value="Dr. Porimol Kumar Das">Dr. Porimol Kumar Das</option>
                        </select>
                     </div>

                     <div className="col-span-full">
                        <label htmlFor="address" className="text-sm">
                           SUbject<span className="text-xl text-red-600">*</span>
                        </label>

                        <input
                           type="text"
                           {...register("subject", { required: true })}
                           defaultValue={title}
                           className="w-full rounded-md  focus:ring-opacity-75  py-3 px-3  dark:text-gray-800 focus:bg-neutral-300 appearance-none dark:border-gray-300"
                        />
                     </div>
                  </div>
               </fieldset>
               <button className="relative mx-auto flex h-[50px] w-48 rounded-lg items-center justify-center overflow-hidden bg-gradient-to-r from-sky-800 to-[#43b27f] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#43b27f] before:duration-500 before:ease-out hover:shadow-[#43b27f] hover:before:h-56 hover:before:w-56">
                  <span className="relative z-10 font-pansy text-2xl ">Submit</span>
               </button>
            </form>
         </section>
      </div>
   );
};

export default BookPackages;
