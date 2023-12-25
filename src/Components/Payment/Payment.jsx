import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";


// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const specclass=useLoaderData()
    return (
        <div className="my-8 mx-auto w-max">
          
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm specclass={specclass}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;