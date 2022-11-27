import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderModal from './OrderModal/OrderModal';
import ShowProduct from './ShowProduct';

const CategoryProduct = () => {
    const products = useLoaderData()
    
    const [order,setOrder] = useState(null)
    return (
        <>
        <div className="">
         
        </div>
        <div className='grid lg:grid-cols-3   md:grid-cols-2 sm:grid-cols-2 my-12   gap-6 container mx-auto '>
          {
            products?.map(product => <ShowProduct 
             
                key={product.id}
                product={product}
                setOrder={setOrder}
                ></ShowProduct> )
          }
       
        </div>
        { order &&   
        <OrderModal
        setOrder={setOrder}
        order={order}
        ></OrderModal>}
        </>
    );
};

export default CategoryProduct;