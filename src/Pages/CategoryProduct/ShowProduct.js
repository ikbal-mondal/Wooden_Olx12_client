import React from 'react';

const ShowProduct = ({product,setOrder}) => {

    const {Name,details,img,location,original_price,resale_price,seller_name,years_of_use} = product;
    return (
        <div>
           <div className="card  bg-base-100 shadow-2xl">
  <figure><img  style={{height:'250px'}} src={img} alt="img" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {Name}
    </h2>
    <p>{details.slice(0,100)}...</p>
    <div className=" justify-start">
      <div className="my-2">Location: {location}</div> 
      <div className="my-2">Original Price: ${original_price}</div>
      <div className="my-2">Resale Price: ${resale_price}</div> 
      <div className="my-2">Seller Name: {seller_name}</div>
      <div className="my-2">Years Of Use: {years_of_use}</div>
    </div>
    <label onClick={() => setOrder(product)} className='btn bg-gradient-to-r from-primary to-secondary border-0' htmlFor="order-modal">Book Now</label>
   

  </div>
</div>
        </div>
    );
};

export default ShowProduct;