import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddProduct = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    const imageHostKey = process.env.REACT_APP_IMGBB_KEY;

    console.log(imageHostKey);
    const handleAddProduct  = (data) => {
      console.log(data);
        const image = data.image[0];
      const formData = new FormData();
      formData.append('image', image)
      const url = `https://api.imgbb.com/1/upload?&key=${imageHostKey}`
      fetch(url,{
        method:'POST',
        body: formData
      })
      .then(res => res.json())
      .then(imgData => {
      
            if(imgData.success){
              console.log();
              const newProduct = {
                product_name:data.product_name,
                phone:data.phone,
                price:data.price,
                location:data.location,
                description:data.description,
                image:imgData.data.url
              }

               // Save product info to the bd 
               fetch('http://localhost:5000/AddProducts',{
                method: 'POST',
                headers:{
                  'content-type': 'application/json',
                  authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(newProduct)
                .then(res => res.json())
                .then(result => {
                  console.log(result);
                  toast.success('your product added')
                })
               })

            }
      })
    }

    return (
        <div>
            <h2 className='text-4xl font-semibold'>Add A Product</h2>
            <form  onSubmit={handleSubmit(handleAddProduct)}  className=
           'w-full  my-8  max-w-sm p-6 m-auto mx-auto bg-white rounded-md shadow-md border-2 '>
                <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text"> Product name</span></label>
                        <input type="name"
                           {...register("product_name", {
                            required: 'product name is required'
                           })}
                            className="input input-bordered w-full max-w-xs" />
                       {errors.product_name && <p className='text-red-600'>{errors.product_name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Photo</span></label>
                        <input type="file"
                          {...register("image",{
                            required:'Photo is required'
                          })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.image && <p className='text-red-600'>{errors.image.message}</p>}
                    </div>
                <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Price</span></label>
                        <input type="text"
                           {...register("price", {
                            required: 'Price is required'
                           })}
                            className="input input-bordered w-full max-w-xs" />
                       {errors.price && <p className='text-red-600'>{errors.price.message}</p>}
                    </div>
                <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Phone</span></label>
                        <input type="text"
                           {...register("phone", {
                            required: 'Phone is required'
                           })}
                            className="input input-bordered w-full max-w-xs" />
                       {errors.phone && <p className='text-red-600'>{errors.phone.message}</p>}
                    </div>
                <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Location</span></label>
                        <input type="text"
                           {...register("location", {
                            required: 'Location is required'
                           })}
                            className="input input-bordered w-full max-w-xs" />
                       {errors.location && <p className='text-red-600'>{errors.location.message}</p>}
                    </div>
                  
                <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Description</span></label>
                        <textarea type="text"
                           {...register("description", {
                            required: 'Description is required'
                           })}
                            className="input input-bordered w-full max-w-xs" />
                       {errors.description && <p className='text-red-600'>{errors.description.message}</p>}
                    </div>
                  
             


                  
                    <input className='btn bg-gradient-to-r my-3 from-primary to-secondary border-0 w-full ' value="Add A Product" type="submit" />
                    
                    <div className="flex items-center justify-between mt-2">
                   
   
    </div>

                </form>
        </div>
    );
};

export default AddProduct;