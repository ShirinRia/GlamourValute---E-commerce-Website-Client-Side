import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiossecure from "../../../Hooks/useAxios/useAxiossecure";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form"
const CheckoutForm = ({ specclass }) => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiossecure();
    const { user } = useAuth();

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const totalPrice = specclass.price
    console.log(totalPrice)
    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosSecure, totalPrice])

    const onSubmit = async (data) => {
        // event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            // console.log('payment error', error);
            setError(error.message);
        }
        else {
            // console.log('payment method', paymentMethod)
            setError('');
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // now save the payment in the database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), // utc date convert. use moment js to 
                    courseId: specclass._id,
                    totalenrollment: specclass.totalenrollment + 1,
                    // menuItemIds: cart.map(item => item.menuId),
                    status: 'pending'
                }

                const res = await axiosSecure.post('/payments', payment);
                console.log('payment saved', res.data);
                // refetch();
                if (res.data?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for the Transaction",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    reset()
                    navigate(`/dashboard/enroll`)
                }

            }
        }

    }

    return (

        <div className="w-[70%] md:w-full border-1 p-4 rounded-lg ">
            <div className="flex mb-4 justify-center text-3xl font-medium"
            >
                <p>Pay Only {specclass.price} and Start Learning!!!</p>
            </div>

            <div className="flex mb-4 flex-col md:flex-row justify-center md:justify-between text-xl"
            >
                <p >{specclass.title}</p>
                <p>$ {specclass.price}</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',

                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',

                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },

                        },

                    }}
                    className="w-full border-1 p-4 rounded-lg"

                />
                <button className="mt-4 w-full btn-primary font-medium text-lg"

                    type="submit" disabled={!stripe || !clientSecret}>
                    Pay</button>

                <p className="text-red-600">{error}</p>
                {transactionId &&
                    <p className="text-green-600"> Your transaction id: {transactionId}</p>}
            </form>


        </div>

    );
};

export default CheckoutForm;