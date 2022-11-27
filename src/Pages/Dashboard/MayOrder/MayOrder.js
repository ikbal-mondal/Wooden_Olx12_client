import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MayOrder = () => {
    const {user} = useContext(AuthContext)

   const url = `http://localhost:5000/bookings?email=${user?.email}`

    const {data: bookings = [] } = useQuery({
        queryKey:['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })


    return (
        <div>
           <h3 className='text-xl mb-3'>My Orders</h3> 
           <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Product Name</th>
        <th>Original price</th>
        <th>Resale Price</th>
      </tr>
    </thead>
    <tbody>

    {
        bookings.map((booking,index) =>   <tr key={booking._id}>
            <th>{index + 1}</th>
            <td>{booking.displayName}</td>
            <td>{booking.selectedProduct}</td>
            <td>{booking.original_price}</td>
            <td>{booking.resale_price}</td>
          </tr>
    )
    }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MayOrder;