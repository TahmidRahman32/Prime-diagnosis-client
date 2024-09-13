import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/Admin/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRouter = ({ children }) => {
   const { user, loading } = useAuth();
   const [isAdmin, adminLoading] = useAdmin();
   const location = useLocation();

   if (loading || adminLoading) {
      return (
         <div className="flex justify-center h-screen items-center">
            <div>
               <span className="loading loading-bars loading-xs"></span>
               <span className="loading loading-bars loading-sm"></span>
               <span className="loading loading-bars loading-md"></span>
               <span className="loading loading-bars loading-lg"></span>
            </div>
         </div>
      );
   }
   if (user && isAdmin) {
      return children;
   }
   return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default AdminRouter;
