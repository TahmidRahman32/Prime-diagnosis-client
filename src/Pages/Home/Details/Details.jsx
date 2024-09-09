import useAuth from "../../../Hooks/useAuth";

import { useLoaderData } from "react-router-dom";
import Headers from "../../../Sheard/Headers/Headers";

const Details = () => {
   const { user } = useAuth();

   const detailsData = useLoaderData();

   const { description, image_url, title, price, _id, included_tests } = detailsData;

   // const handleAddToCraft = () => {
   //    fetch("http://localhost:5000/myCraft", {
   //       method: "POST",
   //       headers: {
   //          "content-type": "application/json",
   //       },
   //       body: JSON.stringify(detail),
   //    })
   //       .then((res) => res.json())
   //       .then((data) => {
   //          console.log(data);
   //          Swal.fire({
   //             title: "Success!",
   //             text: "Art added successfully",
   //             icon: "success",
   //             confirmButtonText: "Cool",
   //          });
   //       });
   // };

   return (
      <div>
         <Headers previous={"Home"} current={"Details"} title={title}></Headers>
         <article className="max-w-6xl px-6 py-12 mx-auto space-y-12 border rounded-t-xl">
            <div className="flex gap-8">
               <img className=" h-96 mx-auto rounded-2xl" src={image_url} alt="" />
               <div className="w-full  space-y-4  ">
                  <h4 className="text-xl font-bold font-pansy">{title}</h4>

                  <p className="text-sm text-gray-600">
                     {" "}
                     <span className="font-bold">{description}</span>
                  </p>
                  <div className="">
                     <span className="font-bold font-pansy">Included Tests:</span>
                     <div className="divider my-0"></div>
                     <div>
                        <div className="overflow-x-auto">
                           <table className="table table-zebra">
                              <thead>
                                 <tr>
                                    <th></th>
                                    <th>Tests Name</th>
                                 </tr>
                              </thead>

                              {included_tests.map((tst, inx) => (
                                 <tbody key={inx}>
                                    <tr>
                                       <th>{inx + 1}</th>
                                       <td className="font-bold">{tst}</td>
                                    </tr>
                                 </tbody>
                              ))}
                           </table>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="pt-3 border-t border-gray-700 lg:flex lg:justify-around ">
               <div className="border-2 border-[#43b27f33] bg-[#43b27f33] rounded-lg w-48 px-2  text-center pt-2 font-bold text-xl font-pansy">Price: ${price}</div>

               <div className="flex flex-col">
                  <button className="relative flex h-[50px] w-48 rounded-lg items-center justify-center overflow-hidden bg-gradient-to-r from-sky-800 to-[#43b27f] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#43b27f] before:duration-500 before:ease-out hover:shadow-[#43b27f] hover:before:h-56 hover:before:w-56">
                     <span className="relative z-10 font-pansy text-xl ">Book Packages</span>
                  </button>
               </div>
            </div>
         </article>
      </div>
   );
};

export default Details;
