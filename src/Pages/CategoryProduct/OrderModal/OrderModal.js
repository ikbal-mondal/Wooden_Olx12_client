import React, { useContext } from 'react';
import toast from 'react-hot-toast';

import { Form } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';


const OrderModal = ({order,setOrder}) => {
   const {user} = useContext(AuthContext)
   
      const {Name,resale_price,original_price } = order;

        const handleBooking = event => {
            event.preventDefault()
            const from = event.target;
            const  original_price = from.original_price.value
            const resale_price = from.resale_price.value;
            const name = user?.displayName;
            const email = from.email.value;
           const location = from.location.value;
           const phone = from.phone.value;

           const Booking = {
              selectedProduct: Name,
              displayName:  name,
              original_price,
              resale_price,
              email,
              location,
              phone

              
           }
           // send data to the server 
           
           fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers:{
              'content-type' : 'application/json'
            },
            body: JSON.stringify(Booking)
           })  
           .then(res => res.json())
           .then(data => {
            console.log(data);
            if(data.acknowledged){
              setOrder(null)
              toast.success('confirmed your booking ')
            }
           
           })

             

            // console.log(original_price,resale_price,resale_price,name , email,phone);

        }


    return (
        <section>
           <input type="checkbox" id="order-modal" className="modal-toggle"  />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{Name}</h3>
    <Form onSubmit={handleBooking}  className="container my-2  w-full max-w-xl p-8 mx-auto space-y-6   ">
         
        <div>
			<input readOnly name='resale_price' value={`$ ${parseInt(resale_price)}`} disabled className="block w-full bg-gray-200 p-2 " />
		</div>
        <div>
			<input readOnly name='original_price' value={` $ ${parseInt(original_price)}`} disabled className="block w-full bg-gray-200 p-2 " />
		</div>
		
		<div>
			<input name='name' type="text" disabled  defaultValue={user?.displayName} placeholder="Full Name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800 border-2" />
		</div>
		
		<div>
			<input name='email'  type="text"  placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800 border-2" defaultValue={user?.email} disabled />
		</div>
		<div>
			<input name='location' type="text" placeholder=" Location" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800 border-2" />
		</div>
		<div>
			<input name='phone' type="text" placeholder="Phone Number" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800 border-2" />
		</div>
		
		<div>
			<button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 text-white bg-gradient-to-r from-primary to-secondary border-0 uppercase">Submit</button>
		</div>
	</Form>
  </div>
</div>
        </section>
    );
};

export default OrderModal;