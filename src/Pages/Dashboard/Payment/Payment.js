import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const data = useLoaderData()
    console.log('booking data ' , data);
    return (
       <div className="">
        <div className="grid lg:grid-cols-2 gap-6 md:grid-cols-2 sm:grid-cols-1 mt-12">
         <div className='text-center mt-2'>
            <h1 className='text-2xl'>Payment for :  <strong>{data.selectedProduct}</strong></h1>
            <p className='text-xl'>Please Pay <strong>{data.resale_price}</strong> </p>
           
        </div>
        <div className="">
            <Elements stripe={stripePromise}>
                <CheckoutForm
                data={data}
                ></CheckoutForm>
            </Elements>
        </div>
       </div>
       <div className="mt-6">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6oSovwLF9C1h52ckcqR7vXclNfjYb6_bma3hCFxpm08-6S1KpY_sIgrkaeI9hdvRxDA&usqp=CAU" alt="" />
       </div>
       </div>
    );
};

export default Payment;