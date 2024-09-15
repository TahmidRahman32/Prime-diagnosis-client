import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/axios/useAxiosSecure";
import UseBookingData from "../../../Hooks/BookingData/UseBookingData";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
   const [error, setError] = useState("");
   const [clientSecret, setClientSecret] = useState("");
   const { user } = useAuth();
   const stripe = useStripe();
   const elements = useElements();
   const navigate = useNavigate();
   const axiosSecure = useAxiosSecure();
   const [bookings] = UseBookingData();
   const totalPrice = bookings.reduce((total, item) => total + item.price, 0);

   useEffect(() => {
      if (totalPrice > 0) {
         axiosSecure.post("/create-payment-intent", { price: totalPrice }).then((res) => {
            // console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
         });
      }
   }, []);
   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!stripe || !elements) {
         return;
      }
      const card = elements.getElement(CardElement);

      if (card == null) {
         return;
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
         type: "card",
         card,
      });
      if (error) {
         setError(error.message);
      } else {
         console.log("payment Method", paymentMethod);
         setError("");
      }

      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
         payment_method: {
            card: card,
            billing_details: {
               email: user.email || "anonymous",
               name: user.displayName || "anonymous",
            },
         },
      });

      if (confirmError) {
         console.log("confirm Error", confirmError);
      } else {
         // console.log("payment ...", paymentIntent);

         if (paymentIntent.status === "succeeded") {
            Swal.fire({
               position: "center",
               icon: "success",
               title: "Your payment successful",
               showConfirmButton: false,
               timer: 1500,
            });
            const payment = {
               email: user.email,
               price: totalPrice,
               date: moment().format("L"),
               transactionId: paymentIntent.id,
               bookingId: bookings.map((item) => item.bookingId),
               paymentId: bookings.map((item) => item._id),
               status: "pending",
            };
            const res = await axiosSecure.post("/payment", payment);
            console.log(res.data, "payment save");
            navigate("/dashboard/paymentHistory");
         }
      }
   };
   return (
      <form onSubmit={handleSubmit}>
         <CardElement
            options={{
               style: {
                  base: {
                     fontSize: "16px",
                     color: "#424770",
                     "::placeholder": {
                        color: "#aab7c4",
                     },
                  },
                  invalid: {
                     color: "#9e2146",
                  },
               },
            }}
         />
         <button
            type="submit"
            disabled={!stripe || !clientSecret}
            className="relative rounded-xl flex h-[40px] px-4 items-center justify-center overflow-hidden bg-gradient-to-r from-[#1E2761] to-[#43b27f] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#43b27f] before:duration-500 before:ease-out hover:shadow-cyan-400 hover:before:h-56 hover:before:w-56 mt-4"
         >
            <span className="relative z-10 font-pansy font-bold">Pay</span>
         </button>
         <div className="mt-3">
            <p className="font-bold font-pansy text-red-600">{error}</p>
         </div>
      </form>
   );
};

export default CheckoutForm;
