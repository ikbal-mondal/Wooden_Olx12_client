import React, { useContext } from 'react';

import { Form } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';


const OrderModal = ({order}) => {
   const {user} = useContext(AuthContext)
   
      const {Name,resale_price,original_price } = order;

        const handleBooking = event => {
            event.preventDefault()
            const from = event.target;
            const  original_price = from.original_price.value
            const resale_price = from.resale_price.value;
            const name = from.name.vale;
            const email = from.email.value;
           const phone = from.phone.value;
            console.log(original_price,resale_price,resale_price,name , email,phone);
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
			<input readOnly resale_price value={`Resale Price: $${parseInt(resale_price)}`} disabled className="block w-full bg-gray-200 p-2 " />
		</div>
        <div>
			<input readOnly original_price value={`Original Price: $ ${parseInt(original_price)}`} disabled className="block w-full bg-gray-200 p-2 " />
		</div>
		
		<div>
			<input name='name' type="text" disabled  defaultValue={user?.displayName} placeholder="Full Name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800 border-2" />
		</div>
		
		<div>
			<input name='email'  type="text"  placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800 border-2" defaultValue={user?.email} disabled />
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