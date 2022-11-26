import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowProduct from './ShowProduct';

const CategoryProduct = () => {
    const products = useLoaderData()

    return (
        <div className='grid lg:grid-cols-3   md:grid-cols-2 sm:grid-cols-2 my-12   gap-6 container mx-auto '>
          {
            products.map(product => <ShowProduct 
                key={product.id}
                product={product}
                ></ShowProduct> )
          }
        </div>
    );
};

export default CategoryProduct;