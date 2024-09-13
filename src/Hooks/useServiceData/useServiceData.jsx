import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../axios/useAxiosSecure";
import useAxiosPublic from "../axios/useAxiosPublic";

const useServiceData = () => {
   const axiosPublic = useAxiosPublic();
   const { data: servicesData = [] } = useQuery({
      queryKey: ["services"],
      queryFn: async () => {
         const res = await axiosPublic.get(`/service`);

         return res?.data;
      },
   });

   return [servicesData];
};

export default useServiceData;
