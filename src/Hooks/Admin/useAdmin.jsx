import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../axios/useAxiosSecure";
import useAuth from "../useAuth";

const useAdmin = () => {
   const { user } = useAuth();

   const axiosSecure = useAxiosSecure();
   const { data: isAdmin } = useQuery({
      queryKey: ["isAdmin", user?.email],
      queryFn: async () => {
         const res = await axiosSecure.get(`/users/admin/${user.email}`);

         return res?.data?.admin;
      },
   });

   return [isAdmin];
};

export default useAdmin;
