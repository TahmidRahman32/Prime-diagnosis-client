import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/removebg-preview.png";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAdmin from "../../Hooks/Admin/useAdmin";
import { useEffect, useState } from "react";

const Nav = () => {
   const { user, logOut } = useAuth();
   const [isAdmin] = useAdmin();
   const [theme, setTheme] = useState("light");

   const handleThemeBtn = (e) => {
      if (e.target.checked) {
         setTheme("dark");
      } else {
         setTheme("light");
      }
   };

   useEffect(() => {
      localStorage.setItem("theme", theme);
      const localTheme = localStorage.getItem("theme");
      document.querySelector('html').setAttribute('data-theme', localTheme)
   }, [theme]);

   const handleLogOut = () => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, LogOut!",
      }).then((result) => {
         if (result.isConfirmed) {
            logOut()
               .then(() => {})
               .catch(() => {
                  // console.log(err);
               });
            Swal.fire({
               title: "LogOut ",
               text: "Your LogOut successfully",
               icon: "success",
            });
         }
      });
   };
   const Links = (
      <div className="md:flex gap-3 flex md:items-center mt-2">
         <NavLink to={"/"} className={({ isActive }) => (isActive ? "font-bold text-blue-600 text-lg font-pansy border-b-2 border-blue-600" : "text-lg font-bold font-pansy text-gray-600")}>
            Home
         </NavLink>
         <NavLink to={"/offers"} className={({ isActive }) => (isActive ? "font-bold text-blue-600 text-lg font-pansy border-b-2 border-blue-600" : "text-lg font-bold font-pansy text-gray-600")}>
            Offers
         </NavLink>
         {isAdmin ? (
            <NavLink to={"/dashboard"} className={({ isActive }) => (isActive ? "font-bold text-blue-600 text-lg font-pansy border-b-2 border-blue-600" : "text-lg font-bold font-pansy text-gray-600")}>
               Dashboard
            </NavLink>
         ) : (
            <NavLink to={"/dashboard"} className={({ isActive }) => (isActive ? "font-bold text-blue-600 text-lg font-pansy border-b-2 border-blue-600" : "text-lg font-bold font-pansy text-gray-600")}>
               Profile
            </NavLink>
         )}
         {user ? (
            <button onClick={handleLogOut} className={"text-lg font-bold font-pansy text-gray-600"}>
               LogOut
            </button>
         ) : (
            <NavLink to={"/login"} className={({ isActive }) => (isActive ? "font-bold text-blue-600 text-lg font-pansy border-b-2 border-blue-600" : "text-lg font-bold font-pansy text-gray-600")}>
               LogIn
            </NavLink>
         )}
         <NavLink to={"/register"} className={({ isActive }) => (isActive ? "font-bold text-blue-600 text-lg font-pansy border-b-2 border-blue-600" : "text-lg font-bold font-pansy text-gray-600")}>
            Register
         </NavLink>
      </div>
   );
   return (
      <div className="navbar shadow bg-slate-300 fixed z-50">
         <div className="navbar-start">
            <div className="dropdown">
               <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
               </div>
               <ul tabIndex={0} className="menu menu-sm dropdown-content md:bg-base-100 md:rounded-box z-[1] mt-3 md:w-52 p-2 md:shadow ">
                  {Links}
               </ul>
            </div>
            <div className="text-center">
               <img className="w-12 mx-auto" src={logo} alt="" />
               <a className="uppercase font-bold font-pansy text-gray-800">PRIME DIAGNOSIS</a>
            </div>
         </div>
         <div className="navbar-center hidden lg:flex  z-50 ">
            <ul className="menu menu-horizontal px-1">{Links}</ul>
         </div>
         <div className="navbar-end">
            <div className="mx-3">
               <label title="Dark Mode" className="grid cursor-pointer place-items-center">
                  <input onChange={handleThemeBtn} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
                  <svg
                     className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                     xmlns="http://www.w3.org/2000/svg"
                     width="14"
                     height="14"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  >
                     <circle cx="12" cy="12" r="5" />
                     <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                  </svg>
                  <svg
                     className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                     xmlns="http://www.w3.org/2000/svg"
                     width="14"
                     height="14"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  >
                     <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
               </label>
            </div>
            {/* profile */}
            {user && <h4 className="font-bold mx-2 text-gray-800 hidden md:block">{user?.displayName}</h4>}
            {user ? (
               <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                     <div className="w-12 rounded-full ">{user && <img alt="" src={user?.photoURL} />}</div>
                  </div>
               </div>
            ) : null}
         </div>
      </div>
   );
};

export default Nav;
