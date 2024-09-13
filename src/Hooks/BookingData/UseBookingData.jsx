
import useAxiosSecure from '../axios/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../useAuth';

const UseBookingData = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();
  const { data: bookings = [], refetch } = useQuery({
     queryKey: ["services", user?.email],
     queryFn: async () => {
        const res = await axiosSecure.get(`/bookings?email=${user.email}`);
        return res?.data;
     },
  });

  return [bookings, refetch];
};

export default UseBookingData;