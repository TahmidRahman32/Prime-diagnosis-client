import React from "react";
import Headers from "../../../Sheard/Headers/Headers";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_SECRET_PK);
const Payment = () => {
   return (
      <div>
         <Headers previous={"home"} current={"Payment"} title={"Payment Dashboard"}></Headers>
         <div className="max-w-2xl mx-auto ">
            <div>
               <h2></h2>
            </div>
            <Elements stripe={stripePromise}>
               <CheckoutForm></CheckoutForm>
            </Elements>
         </div>
      </div>
   );
};

export default Payment;
