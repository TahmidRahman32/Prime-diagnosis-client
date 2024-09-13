import React from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import { IoIosPeople, IoMdCart } from "react-icons/io";
import { IoHome, IoSettings } from "react-icons/io5";
import { MdDateRange, MdEmail, MdPayments } from "react-icons/md";
import { PiToolboxFill } from "react-icons/pi";
import { RiLogoutBoxFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import useAdmin from "../../Hooks/Admin/useAdmin";
import useAuth from "../../Hooks/useAuth";

const SiteBar = () => {
   const { user } = useAuth();
   const [isAdmin] = useAdmin();
   return (
      <div>
         <div className="flex flex-col h-screen p-3 w-60 bg-[#02afe5] text-gray-100">
            <div className="space-y-3">
               <div className="flex items-center justify-between">
                  <h2 className="text-2xl">Dashboard</h2>
                  <button className="p-2">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-gray-100">
                        <rect width="352" height="32" x="80" y="96"></rect>
                        <rect width="352" height="32" x="80" y="240"></rect>
                        <rect width="352" height="32" x="80" y="384"></rect>
                     </svg>
                  </button>
               </div>
               <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center py-4">
                     <button type="submit" className="p-2 focus:outline-none focus:ring">
                        <svg fill="currentColor" viewBox="0 0 512 512" className="w-5 h-5 text-gray-400">
                           <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                        </svg>
                     </button>
                  </span>
                  <input type="search" name="Search" placeholder="Search..." className="w-full py-2 pl-10 text-sm dark:border- rounded-md focus:outline-none bg-gray-800 text-gray-100 focus:bg-gray-900" />
               </div>
               <div className="flex-1">
                  <ul className="pt-2  space-y-1 text-sm">
                     {isAdmin ? (
                        <>
                           <li className="rounded-sm">
                              <NavLink to={"/dashboard/adminHome"} className={({ isActive }) => (isActive ? "flex items-center p-2 space-x-3 rounded-md uppercase bg-slate-800 " : "font-medium text-black flex items-center p-2 space-x-3 rounded-md ")}>
                                 <IoHome size={20} color="#050227 " />
                                 <span className="uppercase">Admin Home</span>
                              </NavLink>
                           </li>

                           <li className="rounded-sm">
                              <NavLink
                                 to={"/dashboard/manageItems"}
                                 className={({ isActive }) => (isActive ? "flex items-center p-2 space-x-3 rounded-md uppercase bg-slate-800 " : "font-medium text-black flex items-center p-2 space-x-3 rounded-md ")}
                              >
                                 <AiOutlineMenuUnfold size={20} />
                                 <span className="uppercase">manage items</span>
                              </NavLink>
                           </li>
                           <li className="rounded-sm">
                              <NavLink
                                 to={"/dashboard/manageBookings"}
                                 className={({ isActive }) => (isActive ? "flex items-center p-2 space-x-3 rounded-md uppercase bg-slate-800 " : "font-medium text-black flex items-center p-2 space-x-3 rounded-md ")}
                              >
                                 <FaBook size={20} />
                                 <span className="uppercase">Manage bookings</span>
                              </NavLink>
                           </li>
                           <li className="rounded-sm">
                              <NavLink to={"/dashboard/paymentHistory"} className={({ isActive }) => (isActive ? "flex items-center p-2 space-x-3 rounded-md uppercase bg-slate-800 " : "font-medium text-black flex items-center p-2 space-x-3 rounded-md ")}>
                                 <MdPayments size={20} />
                                 <span className="uppercase">payment history</span>
                              </NavLink>
                           </li>
                           <li className="rounded-sm  ">
                              <NavLink to={"/dashboard/users"} className={({ isActive }) => (isActive ? "flex items-center p-2 space-x-3 rounded-md uppercase bg-slate-800" : "font-medium text-black flex items-center p-2 space-x-3 rounded-md ")}>
                                 <IoIosPeople size={20} />
                                 <span className="uppercase">All User</span>
                              </NavLink>
                           </li>
                           <li className="rounded-sm">
                              <NavLink to={"/dashboard/settings"} className="flex items-center p-2 space-x-3 rounded-md">
                                 <IoSettings size={20} color="#050227 " />
                                 <span className="uppercase">Settings</span>
                              </NavLink>
                           </li>
                           <li className="rounded-sm">
                              <NavLink to={"/dashboard/Logout"} className="flex items-center p-2 space-x-3 rounded-md">
                                 <RiLogoutBoxFill size={20} color="#050227 " />
                                 <span className="uppercase">Logout</span>
                              </NavLink>
                           </li>
                        </>
                     ) : (
                        <>
                           <li className="rounded-sm">
                              <NavLink to={"/dashboard/home"} className={({ isActive }) => (isActive ? "flex items-center p-2 space-x-3 rounded-md uppercase bg-slate-800 " : "font-medium text-black flex items-center p-2 space-x-3 rounded-md ")}>
                                 <IoHome size={20} color="#050227 " />
                                 <span className="uppercase">User Home</span>
                              </NavLink>
                           </li>
                           <li className="rounded-sm">
                              <NavLink to={"/dashboard/item"} className={({ isActive }) => (isActive ? "flex items-center p-2 space-x-3 rounded-md uppercase bg-slate-800 " : "font-medium text-black flex items-center p-2 space-x-3 rounded-md ")}>
                                 <MdDateRange size={20} color="#050227 " />
                                 <span className="uppercase">Reservation</span>
                              </NavLink>
                           </li>

                           <li className="rounded-sm">
                              <NavLink to={"/dashboard/myCart"} className={({ isActive }) => (isActive ? "flex items-center p-2 space-x-3 rounded-md uppercase bg-slate-800 " : "font-medium text-black flex items-center p-2 space-x-3 rounded-md ")}>
                                 <IoMdCart size={20} />
                                 <span className="uppercase">my cart</span>
                              </NavLink>
                           </li>
                           <li className="rounded-sm  ">
                              <NavLink to={"/dashboard/addReview"} className={({ isActive }) => (isActive ? "flex items-center p-2 space-x-3 rounded-md uppercase bg-slate-800" : "font-medium text-black flex items-center p-2 space-x-3 rounded-md ")}>
                                 <PiToolboxFill size={20} />
                                 <span className="uppercase">add review</span>
                              </NavLink>
                           </li>
                           <li className="rounded-sm">
                              <NavLink to={"/dashboard/settings"} className={({ isActive }) => (isActive ? "flex items-center p-2 space-x-3 rounded-md uppercase bg-slate-800" : "font-medium text-black flex items-center p-2 space-x-3 rounded-md ")}>
                                 <IoSettings size={20} color="#050227 " />
                                 <span className="uppercase">Settings</span>
                              </NavLink>
                           </li>
                           <li className="rounded-sm">
                              <NavLink to={"/dashboard/logout"} className={({ isActive }) => (isActive ? "flex items-center p-2 space-x-3 rounded-md uppercase bg-slate-800" : "font-medium text-black flex items-center p-2 space-x-3 rounded-md ")}>
                                 <RiLogoutBoxFill size={20} color="#050227 " />
                                 <span className="uppercase">Logout</span>
                              </NavLink>
                           </li>
                        </>
                     )}
                  </ul>
                  {/* main Link */}
                  <div className="divider divide-slate-50"></div>
                  <ul className="pt-2  space-y-1 text-sm">
                     <li className="rounded-sm">
                        <NavLink to={"/"} className="flex items-center p-2 space-x-3 rounded-md">
                           <IoHome size={20} color="#050227 " />
                           <span className="uppercase">Go to Home</span>
                        </NavLink>
                     </li>

                     <li className="rounded-sm">
                        <NavLink to={"/dashboard/home"} className="flex items-center p-2 space-x-3 rounded-md">
                           <MdEmail size={20} color="#050227 " />
                           <span className="uppercase">Contact</span>
                        </NavLink>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
               <img src={user?.photoURL} alt="" className="w-12 h-12 rounded-lg bg-gray-500" />
               <div>
                  <h2 className="text-lg font-semibold">{user?.displayName}</h2>
                  <span className="flex items-center space-x-1">
                     <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">
                        View profile
                     </a>
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SiteBar;
