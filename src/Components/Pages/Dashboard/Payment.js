import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const stripePromise = loadStripe('pk_test_51L5FSGDos8bAPmLSM25LX03XW7kucPERzUmGWSMjBe9P4ziFW4s4yBfHIBrvwxhxNhlgQcInsoaHcTME4LhSh6QC00ceykYiAJ');

const Payment = () => {
    const { id } = useParams();
    const { data: paymentInfo, isLoading } = useQuery('paymentProduct', () => fetch(`http://localhost:5000/payment-info/${id}`).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }
    
    return (
        <div>
            

            <Elements stripe={stripePromise}>
                <CheckoutForm paymentInfo={paymentInfo}  id={id}/>
            </Elements>
        </div>
    );
};

export default Payment;