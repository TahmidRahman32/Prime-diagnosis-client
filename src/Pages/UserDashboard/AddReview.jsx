import React from "react";
import NotPound from "../../Sheard/NotPound";
import { Helmet } from "react-helmet";
import useAuth from "../../Hooks/useAuth";
import Headers from "../../Sheard/Headers/Headers";

const AddReview = () => {
   const { user } = useAuth();
   return (
      <div>
         <Helmet>
            <title>Dashboard || add Review</title>
         </Helmet>
         <div>
            <Headers previous={"Home"} current={"Add Reviews"} title={"Please Add your reviews"}></Headers>
            <section className="bg-white py-4">
               <div className="container px-4 mx-auto">
                  <div className="flex flex-wrap -m-3 mb-3">
                     <div className="w-full md:w-3/4 p-3">
                        <div className="p-6 h-full overflow-hidden bg-white rounded-md">
                           <div className="flex flex-wrap pb-3 -m-3">
                              <div className="w-full md:w-1/2 p-3">
                                 <p className="mb-1.5 font-medium text-base text-coolGray-800">First name</p>
                                 <input className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-[#02afe5] border border-coolGray-200 rounded-lg shadow-input" type="text" defaultValue={user.displayName} />
                              </div>
                              <div className="w-full md:w-1/2 p-3">
                                 <p className="mb-1.5 font-medium text-base text-coolGray-800">Service Name</p>
                                 <select className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-[#02afe5] border border-coolGray-200 rounded-lg shadow-input">
                                    <option value="default">Select Blood...</option>
                                    <option value="Complete Blood Count (CBC) with Blood Film">Complete Blood Count (CBC) with Blood Film</option>
                                    <option value="Diabetes Screening">Diabetes Screening</option>
                                    <option value="Liver Function Test (LFT)">Liver Function Test (LFT)</option>
                                    <option value="Kidney Function Test">Kidney Function Test</option>
                                    <option value="Lipid Profile">Lipid Profile</option>
                                    <option value="Cardiac Risk Assessment">Cardiac Risk Assessment</option>
                                 </select>
                              </div>
                              <div className="w-full md:w-1/2 p-3">
                                 <p className="mb-1.5 font-medium text-base text-coolGray-800">Email</p>
                                 <input className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-[#02afe5] border border-coolGray-200 rounded-lg shadow-input" type="text" defaultValue={user.email} />
                              </div>
                              <div className="w-full md:w-1/2 p-3">
                                 <p className="mb-1.5 font-medium text-base text-coolGray-800">Phone number</p>
                                 <input className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-[#02afe5] border border-coolGray-200 rounded-lg shadow-input" type="text" placeholder="017......." />
                              </div>
                           </div>
                           <div className="py-3">
                              <div className="w-full">
                                 <div className="flex flex-wrap">
                                    <div className="w-full">
                                       <p className="mb-1 text-sm text-coolGray-800 font-semibold">Bio</p>
                                       <textarea className="block w-full h-64 p-4 text-base text-coolGray-900 font-normal outline-none focus:border-[#02afe5] border border-coolGray-200 rounded-lg shadow-input resize-none"></textarea>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div className="py-3">
                              <div className="w-full">
                                 <div className="flex flex-wrap -m-3">
                                    <div className="w-full p-3">
                                       <p className="mb-1.5 font-medium text-coolGray-800 text-base">Coverphoto</p>
                                       <div className="relative flex flex-col items-center justify-center mb-6 p-6 h-44 text-center text-[#02afe5] focus-within:border-[#02afe5] border border-dashed border-coolGray-200 rounded-lg">
                                          <svg className="mb-1.5" width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path
                                                d="M8.71 7.71L11 5.41V15C11 15.2652 11.1054 15.5196 11.2929 15.7071C11.4804 15.8946 11.7348 16 12 16C12.2652 16 12.5196 15.8946 12.7071 15.7071C12.8946 15.5196 13 15.2652 13 15V5.41L15.29 7.71C15.383 7.80373 15.4936 7.87813 15.6154 7.92889C15.7373 7.97966 15.868 8.0058 16 8.0058C16.132 8.0058 16.2627 7.97966 16.3846 7.92889C16.5064 7.87813 16.617 7.80373 16.71 7.71C16.8037 7.61704 16.8781 7.50644 16.9289 7.38458C16.9797 7.26272 17.0058 7.13202 17.0058 7C17.0058 6.86799 16.9797 6.73729 16.9289 6.61543C16.8781 6.49357 16.8037 6.38297 16.71 6.29L12.71 2.29C12.6149 2.19896 12.5028 2.1276 12.38 2.08C12.1365 1.97999 11.8635 1.97999 11.62 2.08C11.4972 2.1276 11.3851 2.19896 11.29 2.29L7.29 6.29C7.19676 6.38324 7.1228 6.49393 7.07234 6.61575C7.02188 6.73758 6.99591 6.86814 6.99591 7C6.99591 7.13186 7.02188 7.26243 7.07234 7.38425C7.1228 7.50607 7.19676 7.61677 7.29 7.71C7.38324 7.80324 7.49393 7.8772 7.61575 7.92766C7.73757 7.97812 7.86814 8.00409 8 8.00409C8.13186 8.00409 8.26243 7.97812 8.38425 7.92766C8.50607 7.8772 8.61676 7.80324 8.71 7.71ZM21 12C20.7348 12 20.4804 12.1054 20.2929 12.2929C20.1054 12.4804 20 12.7348 20 13V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V13C4 12.7348 3.89464 12.4804 3.70711 12.2929C3.51957 12.1054 3.26522 12 3 12C2.73478 12 2.48043 12.1054 2.29289 12.2929C2.10536 12.4804 2 12.7348 2 13V19C2 19.7957 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7957 22 19V13C22 12.7348 21.8946 12.4804 21.7071 12.2929C21.5196 12.1054 21.2652 12 21 12Z"
                                                fill="currentColor"
                                             ></path>
                                          </svg>
                                          <p className="mb-1 text-sm text-coolGray-800 font-medium">
                                             <span className="text-[#02afe5]">Click to Upload a file</span>
                                             <span>or drag and drop</span>
                                          </p>
                                          <p className="text-xs text-coolGray-500 font-medium">PNG, JPG, GIF or up to 10MB</p>
                                          <input className="absolute top-0 left-0 w-full h-full opacity-0" type="file" />
                                       </div>
                                       <button className="relative mx-auto rounded-xl flex h-[40px] px-4 items-center justify-center overflow-hidden bg-gradient-to-r from-[#1E2761] to-[#02afe5] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#02afe5] before:duration-500 before:ease-out hover:shadow-cyan-400 hover:before:h-56 hover:before:w-56">
                                          <span className="relative z-10 font-pansy font-bold">Save</span>
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>

         <NotPound title={"this Data is Not Available"}></NotPound>
      </div>
   );
};

export default AddReview;
