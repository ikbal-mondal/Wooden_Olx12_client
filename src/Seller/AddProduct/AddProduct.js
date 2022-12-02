import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Form, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const AddProduct = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    const imageHostKey = process.env.REACT_APP_IMGBB_KEY;
   const navigate = useNavigate()
  const {user,} = useContext(AuthContext)
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
                Category_id:parseInt(data.product_category),
                Year_of_Use:data.Year_of_Use,
                phone:data.phone,
                original_price:data.original_price,
                resale_price:data.resale_price,
                location:data.location,
                details:data.description,
                img:imgData.data.url,
                name:user?.displayName,
                email:user?.email
              
              }

  
       
               fetch('https://wooden-olx12-server.vercel.app/AddProducts',{
            
                method: 'POST',
                headers:{
                  'content-type': 'application/json',
                  authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(newProduct)
                
               })
               .then(res => res.json())
                .then(result => {
                  console.log(result);
                  toast.success('your product added')
                  navigate('/dashboard/myproducts')
                })
            }
      })
    }

    return (
      
    <section className="p-6 dark:text-gray-100 ">
    <Form onSubmit={handleSubmit(handleAddProduct)} className="  rounded-md  bg-slate-900 shadow-2xl shadow-slate-500 text-white p-8 ng-untouched ng-pristine ng-valid">
      <h2 className=" text-3xl text-center mb-3 font-bold leading-tight">Add Product </h2>
         <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 ">
      <div>
        <label for="name" className="block mb-1 ml-1">Product name</label>
        <input type="name"
                           {...register("product_name", {
                            required: 'product name is required'
                           })}
                            className="block w-full p-2 rounded focus:outline-none focus:ring  text-black focus:ring-blue-600 dark:bg-gray-800" />
                       {errors.product_name && <p className='text-red-600'>{errors.product_name.message}</p>}
      </div>
      <div>
        <label for="name" className="block mb-1 ml-1"> Product Category</label>
        <input type="name"
                           {...register("product_category", {
                            required: 'Product Category is required'
                           })}
                            className="block w-full p-2 rounded focus:outline-none focus:ring  text-black focus:ring-blue-600 dark:bg-gray-800" />
                       {errors.product_category && <p className='text-red-600'>{errors.product_category.message}</p>}
      </div>
      <div>
        <label for="name" className="block mb-1 ml-1"> Year of USe</label>
        <input type="name"
                           {...register("Year_of_Use", {
                            required: 'Year use is required'
                           })}
                            className="block w-full p-2 rounded focus:outline-none focus:ring  text-black focus:ring-blue-600 dark:bg-gray-800" />
                       {errors.Year_of_Use && <p className='text-red-600'>{errors.Year_of_Use.message}</p>}
      </div>
      <div>
        <label  className="block mb-1 ml-1">Photo</label>
        <input type="file"
                          {...register("image",{
                            required:'Photo is required'
                          })}
                           className="block w-full p-2 rounded focus:outline-none focus:ring text-white    focus:ring-blue-600  dark:bg-gray-800"  readOnly />
                        {errors.image && <p className='text-red-600'>{errors.image.message}</p>}
      </div>
      
      <div>
        <label  className="block mb-1 ml-1"> Original Price  </label>
        <input type="text"
                           {...register("original_price", {
                            required: 'Original Price is required'
                           })}
                            className="block w-full p-2 rounded focus:outline-none focus:ring   text-black  focus:ring-blue-600 "  />
                       {errors.original_price && <p className='text-red-600'>{errors.original_price.message}</p>}
      </div>
      <div>
        <label  className="block mb-1 ml-1"> Resale Price  </label>
        <input type="text"
                           {...register("resale_price", {
                            required: 'Resale Price is required'
                           })}
                            className="block w-full p-2 rounded focus:outline-none focus:ring   text-black  focus:ring-blue-600 "  />
                       {errors.resale_price && <p className='text-red-600'>{errors.resale_price.message}</p>}
      </div>
      
      <div>
        <label for="name" className="block mb-1 ml-1">Mobile Number</label>
       <input type="text"
                           {...register("phone", {
                            required: 'Phone is required'
                           })}
                            className="block w-full p-2 rounded focus:outline-none focus:ring  text-black focus:ring-blue-600  dark:bg-gray-800" />
                       {errors.phone && <p className='text-red-600'>{errors.phone.message}</p>}
      </div>
   
      <div>
        <label for="name" className="block mb-1 ml-1">Location</label>
        <input type="text"
                           {...register("location", {
                            required: 'Location is required'
                           })}
                            className="block w-full p-2 rounded focus:outline-none focus:ring  text-black focus:ring-blue-600  dark:bg-gray-800" />
                       {errors.location && <p className='text-red-600'>{errors.location.message}</p>}
      </div>
      
           </div>
      <div>
        <label for="message" className="block mb-1 ml-1 my-3">Description</label>
        <textarea required name='description' type="text" placeholder=" Service Description..." 
         {...register("description", {
          required: 'Description is required'
         })}
        className="block w-full p-5 rounded autoexpand focus:outline-none focus:ring  text-black  focus:ring-violet-400 dark:bg-gray-800"></textarea>
        {errors.description && <p className='text-red-600'>{errors.description.message}</p>}
      </div>
      <div>
        <input value="Add A Product" type="submit"  className="w-full px-4 text-white  py-2 mt-6 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-white hover:ring-violet-400 bg-blue-700"></input>
   
      </div>
    </Form>
  </section>

    );
};

export default AddProduct;