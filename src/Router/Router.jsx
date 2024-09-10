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
            path: "/booking",
            element: (
               <PrivateRouter>
                  <BookPackages />
               </PrivateRouter>
            ),
         },

         {
            path: "/ourPackage",
            element: <OurAllPackages />,
         },

         // {
         //    path: '/',
         //    element: <Home />,
         // },

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
         // {
         //    path: "item",
         //    element: <UserItem />,
         // },
         // {
         //    path: "manageItems",
         //    element: <ManageItems />,
         // },
         // {
         //    path: "manageBookings",
         //    element: <ManageBookings />,
         // },
         {
            path: "users",
            element: <AllUsers />,
         },
      ],
   },
]);

export default router;
