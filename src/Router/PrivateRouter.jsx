import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRouter = ({ children }) => {
   const { user, loading } = useAuth();
   const location = useLocation();
   if (user) {
      return children;
   }
   if (loading) {
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
   return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivateRouter;
