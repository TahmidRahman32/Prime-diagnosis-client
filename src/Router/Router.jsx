import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Location from "../Pages/Home/Category/Location";
import LogIn from "../Auth/Login/LogIn";
import Register from "../Auth/Register/Register";
import Details from "../Pages/Home/Details/Details";
import BookPackages from "../Pages/BookPackages/BookPackages";
import PrivateRouter from "./PrivateRouter";
import OurAllPackages from "../Pages/Home/Category/OurAllPackages";
import Dashboard from "../Pages/Admin/Dashboard/Dashboard";
import AllUsers from "../Pages/Admin/Dashboard/AllUsers";
import UserHome from "../Pages/UserDashboard/UserHome";
import Reservation from "../Pages/UserDashboard/Reservation";
import MyCart from "../Pages/UserDashboard/MyCart";
import AddReview from "../Pages/UserDashboard/AddReview";
import Settings from "../Pages/UserDashboard/Settings";
import Logout from "../Pages/UserDashboard/Logout";
import Payment from "../Pages/Admin/Dashboard/Payment";
import AdminRouter from "./AdminRouter";
import ManageItems from "../Pages/Admin/Dashboard/ManageItems";
import HomeAdmin from "../Pages/Admin/Dashboard/HomeAdmin";
import ManageBookings from "../Pages/Admin/Dashboard/ManageBookings";
import Doctors from "../Pages/Home/Doctors/Doctors";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/location",
            element: <Location />,
         },
         {
            path: "/login",
            element: <LogIn />,
         },
         {
            path: "/register",
            element: <Register />,
         },
         {
            path: "/details/:id",
            element: (
               <PrivateRouter>
                  <Details />
               </PrivateRouter>
            ),
            loader: ({ params }) => fetch(`http://localhost:8000/service/${params.id}`),
         },
         {
            path: "/booking/:id",
            element: (
               <PrivateRouter>
                  <BookPackages />
               </PrivateRouter>
            ),
            loader: ({ params }) => fetch(`http://localhost:8000/service/${params.id}`),
         },

         {
            path: "/ourPackage",
            element: <OurAllPackages />,
         },

         {
            path: "/doctors",
            element: <Doctors />,
         },

         // {
         //    path: '/',
         //    element: <Home />,
         // },
      ],
   },
   {
      path: "dashboard",
      element: (
         <PrivateRouter>
            <Dashboard />
         </PrivateRouter>
      ),
      children: [
         {
            path: "home",
            element: <UserHome />,
         },
         {
            path: "item",
            element: <Reservation />,
         },
         {
            path: "myCart",
            element: <MyCart />,
         },
         {
            path: "payment",
            element: <Payment />,
         },
         {
            path: "addReview",
            element: <AddReview />,
         },
         {
            path: "settings",
            element: <Settings />,
         },
         {
            path: "logout",
            element: <Logout />,
         },

         // admin router
         {
            path: "users",
            element: (
               <AdminRouter>
                  <AllUsers />
               </AdminRouter>
            ),
         },
         {
            path: "adminHome",
            element: <HomeAdmin />,
         },
         {
            path: "manageItems",
            element: <ManageItems />,
         },

         {
            path: "manageBookings",
            element: <ManageBookings />,
         },
         // {
         //    path: "",
         //    element: <AllUsers />,
         // },
         // {
         //    path: "",
         //    element: <AllUsers />,
         // },
         // {
         //    path: "",
         //    element: <AllUsers />,
         // },
      ],
   },
]);

export default router;
