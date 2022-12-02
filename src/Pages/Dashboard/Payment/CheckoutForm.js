import { CardElement,  useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const CheckoutForm = ({data}) => {
  const [cardError,setCardError] = useState('')
    const stripe = useStripe();
    const elements = useElements()
    const [success,setSuccess] = useState('');
    const [processing,setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState("");
    const {resale_price,displayName,email} = data
   const {user} = useContext(AuthContext)
console.log(clientSecret);
    useEffect(() => {

      // Create PaymentIntent as soon as the page loads
      fetch("https://wooden-olx12-server.vercel.app/create-payment-intent", {
        method: "POST",
        headers: {
           "Content-Type": "application/json" ,
           authorization: `bearer ${localStorage.getItem('accessToken')}`
          },
        body: JSON.stringify({ resale_price }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
        
    }, [resale_price]);




    const handleSubmit = async(event) => {
      
        event.preventDefault();
        console.log(clientSecret);
        if (!stripe || !elements) {
           
            return;
          }

          const card = elements.getElement(CardElement);
          if(card === null){
            return;
          }
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
          });
          if(error){
           console.log(error);
           setCardError(error.message)
          }
          else{
            setCardError('');
          }
    console.log(user?.email);
          const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email:user?.email
                },
              },

            },
          );
          if(confirmError){
            setCardError(confirmError.message);
            return;
          }
          console.log('paymentIntent:',paymentIntent);
          toast.success('payment successfully done')
    }
    return (
       <div className="">
    <form className='bg-slate-200 shadow-2xl p-8  rounded-lg' onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '18px',
                color: '#424770',
                '::placeholder': {
                  color: '#000',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <div className="inline mx-auto ">
        <button className='btn bg-emerald-500 px-6 mt-8 ' type="submit" disabled={!stripe }>
          Pay
        </button>
        </div>
      </form>
      <p className='text-red-600'>{cardError}</p>
       </div>
    );
};

export default CheckoutForm;