import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/removebg-preview.png";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAdmin from "../../Hooks/Admin/useAdmin";

const Nav = () => {
   const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin();
   
    
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
               .catch((err) => {
                  console.log(err);
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
      <div className="flex gap-4">
         <NavLink to={"/"} className={({ isActive }) => (isActive ? "font-bold text-blue-600 text-lg font-pansy border-b-2 border-blue-600" : "text-lg font-bold font-pansy")}>
            Home
         </NavLink>
         {/* <NavLink to={"/booking"} className={({ isActive }) => (isActive ? "font-bold text-blue-600 text-lg font-pansy border-b-2 border-blue-600" : "text-lg font-bold font-pansy")}>
            Booking
         </NavLink> */}
         {isAdmin ? (
            <NavLink to={"/dashboard"} className={({ isActive }) => (isActive ? "font-bold text-blue-600 text-lg font-pansy border-b-2 border-blue-600" : "text-lg font-bold font-pansy")}>
               Dashboard
            </NavLink>
         ) : (
            <NavLink to={"/dashboard"} className={({ isActive }) => (isActive ? "font-bold text-blue-600 text-lg font-pansy border-b-2 border-blue-600" : "text-lg font-bold font-pansy")}>
              My Profile
            </NavLink>
         )}
         {user ? (
            <button onClick={handleLogOut} className={"text-lg font-bold font-pansy"}>
               LogOut
            </button>
         ) : (
            <NavLink to={"/login"} className={({ isActive }) => (isActive ? "font-bold text-blue-600 text-lg font-pansy border-b-2 border-blue-600" : "text-lg font-bold font-pansy")}>
               LogIn
            </NavLink>
         )}
         <NavLink to={"/register"} className={({ isActive }) => (isActive ? "font-bold text-blue-600 text-lg font-pansy border-b-2 border-blue-600" : "text-lg font-bold font-pansy")}>
            Register
         </NavLink>
      </div>
   );
   return (
      <div className="navbar shadow bg-slate-300 fixed ">
         <div className="navbar-start">
            <div className="dropdown">
               <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
               </div>
               <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  {Links}
               </ul>
            </div>
            <div className="text-center">
               <img className="w-12 mx-auto" src={logo} alt="" />
               <a className="uppercase font-bold font-pansy">PRIME DIAGNOSIS</a>
            </div>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{Links}</ul>
         </div>
         <div className="navbar-end">
            {/* profile */}
            {user && <h4 className="font-bold mx-2">{user?.displayName}</h4>}
            {user ? (
               <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                     <div className="w-12 rounded-full">{user && <img alt="" src={user?.photoURL} />}</div>
                  </div>
               </div>
            ) : null}
         </div>
      </div>
   );
};

export default Nav;
