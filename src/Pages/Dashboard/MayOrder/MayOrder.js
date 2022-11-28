import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const token = localStorage.getItem('accessToken')
const MayOrder = () => {
    const {user} = useContext(AuthContext)
    const [loading,setLoading] = useState(false)

   const url = `http://localhost:5000/bookings?email=${user?.email}`

    const {data: bookings = [] } = useQuery({
        queryKey:['bookings', user?.email],
        queryFn: async () => {
          setLoading(true)
            const res = await fetch(url, {
              headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
              }
            });
            const data = await res.json();
            console.log(data);
            setLoading(false)
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

    { loading ? <div className="mx-auto"><div className="w-16  mt-36 h-16 border-4 border-dashed rounded-full animate-spin border-violet-700"></div></div> : 
        bookings?.map((booking,index) =>   <tr key={booking._id}>
            <th>{index + 1}</th>
            <td>{booking?.displayName}</td>
            <td>{booking?.selectedProduct}</td>
            <td>{booking?.original_price}</td>
            <td>{booking?.resale_price}</td>
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