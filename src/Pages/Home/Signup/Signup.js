import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const {register,handleSubmit,formState:{errors}} = useForm()
    const [signUpError,setSignUpError] = useState('') 
   
    const handleSignUp = data => {
      
        console.log(data);
       }
    return (
        <div className='grid lg:grid-cols-2 p-4 m-6'>
        
        <form onSubmit={handleSubmit(handleSignUp)}  className=
        'w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-md shadow-md border-2 '>
           <h2 className='text-center text-2xl font-medium'> Please Sign Up </h2>
                 <div className="form-control w-full max-w-xs">
                     <label className="label"> <span className="label-text">Name</span></label>
                     <input type="text"
                       {...register("name",{
                         required:'Name is required'
                       })}
                         className="input input-bordered w-full max-w-xs" />
                     {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                 </div>
                 <div className="form-control w-full max-w-xs">
                     <label className="label"> <span className="label-text">Email</span></label>
                     <input type="email"
                        {...register("email", {
                         required: 'Email is required'
                        })}
                         className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                 </div>
                 <div className="form-control w-full max-w-xs">
                     <label className="label"> <span className="label-text">Password</span></label>
                     <input type="password"
                           {...register("password", {
                             required: 'Password is required',
                             minLength:{value:6, message: 'Password must be 6 characters or longer'},
                             pattern:{value:/(?=.*\d)(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}/, message:'password  must have uppercase number and special characters '}
                           })}
                         className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                     <label className="label"> 
                     <span className="label-text">Forget Password?</span></label>
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}

                 </div>
               
                 <input className='btn bg-gradient-to-r from-primary to-secondary border-0 w-full ' value="Sign Up" type="submit" />
                 <p className=" text-base mt-1 font-light text-start text-gray-600">Already have an account <Link to='/login' className="font-medium text-primary dark:text-gray-200 hover:underline"> Please Login Now </Link></p>
                 <div className="flex items-center justify-between mt-2">
                

 </div>

             </form>
             <div className="">
             <img src="https://cdni.iconscout.com/illustration/premium/thumb/user-login-4268415-3551762.png" alt="" />
         </div>
     </div>
    );
};

export default Signup;