import React, { useState, useEffect } from 'react';
import { Elements, useElements, CardElement, useStripe } from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';
import SharedButton from '../../Shared/SharedButton';
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';

const CheckoutForm = ({ paymentInfo }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false)

    const { _id, productName, productQuantity, totalProductPrice, mobileNumber, customerName, customerEmail, customerAddress } = paymentInfo;
    const totalPrice = parseInt(totalProductPrice);
    const date = format(new Date, 'PP');
    const navigate = useNavigate();


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://vast-forest-24784.herokuapp.com/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ totalPrice }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data?.clientSecret)
                }
            });
    }, []);
    



    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        
        if (error) {
            setCardError(error?.message)
            console.log('error', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('');
        }
        setLoading(true)
        //confirm payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: 'sagor'

                    },
                },

            },
        );
        setLoading(false);
        if (intentError) {
            setCardError(intentError?.message);
        }
        else {
            setCardError('');
            console.log('paymentIntent', paymentIntent);
            toast.success('PAYMENT SUCCESS');
            const paymentSuccessInfo = {
                paymentStatus:'paid',
                paymentDate: date,
                transactionId: paymentIntent?.id,
            }
            setLoading(true);
            fetch(`https://vast-forest-24784.herokuapp.com/order/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(paymentSuccessInfo)
            })
                .then(res => res.json())
                .then(data => { console.log(data) });
            setLoading(false);
            navigate('/dashboard/my-order')
        }
    }
    return (



        <div class="card w-96 lg:w-[500px] bg-base-100 shadow-xl mx-auto mt-12">
            {
                loading && <Loading />
            }
            <div class="card-body">
                <h2 class=" text-center text-accent text-xl">Payment Details</h2><hr />
                <div class="overflow-x-auto">
                    <table class="table table-compact w-full text-normal">

                        <thead className='uppercase '>
                            <tr>
                                <th>Customer Name</th>
                                <td>{customerName}</td>
                            </tr>
                            <tr>
                                <th>Customer Email</th>
                                <td>{customerEmail}</td>
                            </tr>
                            <tr>
                                <th>Customer Mobile</th>
                                <td>{mobileNumber}</td>
                            </tr>
                            <tr>
                                <th>Customer ADDRESS</th>
                                <td>{customerAddress}</td>
                            </tr>
                            <tr>
                                <th>Product Name</th>
                                <td>{productName}</td>
                            </tr>

                            <tr>
                                <th>Quantity</th>
                                <td>{productQuantity}</td>
                            </tr>
                            <tr className='pb-12'>
                                <th>Total Price($)</th>
                                <td>{totalProductPrice}</td>
                            </tr>

                        </thead>

                    </table>
                </div>

                <h2 class=" text-center text-accent text-xl pt-5">Card Information</h2><hr />
                <form onSubmit={handleSubmit} className="p-3 border rounded py-3">
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
                    />
                    {/* <button type="submit" disabled={!stripe}>
                        Pay
                    </button> */}
                    <div className='flex justify-center'>
                        <SharedButton disabled={!stripe}>Pay Now</SharedButton>
                    </div>
                </form>

                {
                    cardError && <p className='text-red-500'>{cardError}</p>
                }

            </div>
        </div>







    );
};

export default CheckoutForm;