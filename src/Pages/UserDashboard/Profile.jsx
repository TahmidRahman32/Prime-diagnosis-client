import React from "react";
import useAuth from "../../Hooks/useAuth";

import NotPound from "../../Sheard/NotPound";

const Profile = () => {
   // const { user } = useAuth();
   return (
      <div>
         <NotPound title={"this Data is Not Available"}></NotPound>
         {/* <div className="flex flex-col  max-w-7xl mx-auto p-6 my-8 shadow-md rounded-xl sm:px-12 bg-gray-900 text-gray-100">
            <img src={user?.photoURL} alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square" />
            <div className="space-y-4 text-center divide-y divide-gray-700">
               <div className="my-2 space-y-1">
                  <h2 className="text-xl font-semibold sm:text-2xl">{user.displayName}</h2>
                  <p className="px-5 text-xs sm:text-base text-gray-400">Full-stack developer</p>
               </div>
            </div>
         </div> */}
      </div>
   );
};

export default Profile;
