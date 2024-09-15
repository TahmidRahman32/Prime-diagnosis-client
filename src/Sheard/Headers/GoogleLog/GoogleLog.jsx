import { FcGoogle } from "react-icons/fc";

import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/axios/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";

const GoogleLog = () => {
   const { googleLogin } = useAuth();
   const navigate = useNavigate();
   const axiosPublic = useAxiosPublic();
   const handleGoogleBtn = () => {
      googleLogin()
         .then((result) => {
            // console.log(result.user);
            const userInfo = {
               email: result.user.email,
               name: result.user.displayName,
            };
            axiosPublic
               .post("/users", userInfo)
               .then((res) => {
                  console.log(res.data);
               })
               .catch((err) => {
                  console.log(err);
               });
            navigate("/");
         })
         .catch((error) => {
            console.log(error);
         });
   };
   return (
      <div>
         <button
            onClick={handleGoogleBtn}
            className="appearance-none flex items-center justify-center w-full bg-gray-100 text-gray-700 shadow border border-web-color rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none"
         >
            <FcGoogle size={24} />
         </button>
      </div>
   );
};

export default GoogleLog;
