import { GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';

import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';



const Login = () => {
   const location = useLocation()
   const {handleSubmit, formState:{errors},register } = useForm()
   const [loginError,setLoginError] = useState('')
   const [loginUserEmail,setLoginUserEmail] = useState('')
   const {loginWithGoogle,userLogin} = useContext(AuthContext)
 const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
   
  const getUserToken = email => {
    fetch(`http://localhost:5000/jwt?email=${email}`)
    .then(res => res.json())
    .then(data => {
      if(data.accessToken){
      localStorage.setItem('accessToken' , data.accessToken)
      navigate('/');
       
      }
    })
   }

   const googleProvider = new GoogleAuthProvider()

   const handleGoogleSigIn = () =>  {
    loginWithGoogle(googleProvider)
    .then(result => {
        const user = result.user;
        getUserToken(user.email)
    })
    .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
       
      });

}


const handleLogin = (data) => {
    // setCreatedUserEmail(data.email)
    setLoginError('')
     console.log(data);
     userLogin(data.email, data.password)
     .then(result => {
        const user = result.user;
       console.log(user);
       setLoginUserEmail(data.email)
       toast.success('User login successfully done')
       getUserToken(user.email)
      navigate(from,{replace: true})
       
     })
     .catch(error => {
        console.log(error.message);
        setLoginError(error.message)
     })

   }


    return (
      <div>
        <div className="grid lg:grid-cols-2 p-4 m-6">
          <div className="">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/002/223/426/small_2x/banner-design-of-folder-with-a-password-and-username-security-for-personal-data-protection-illustration-concept-be-used-for-landing-page-template-ui-web-mobile-app-poster-banner-website-free-vector.jpg"
              alt=""
            />
          </div>
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-md shadow-md border-2 "
          >
            <h2 className="text-center text-2xl font-medium"> Please LogIn</h2>
            <div className="form-control w-full max-w-xs">
              <label className="label">
               
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                {...register("email", {
                  required: "Email Address is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters or longer",
                  },
                })}
                className="input input-bordered w-full max-w-xs"
              />

              <label className="label">
                <span className="label-text">Forget Password?</span>
              </label>
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
              {loginError && <p className="text-red-700">{loginError}</p>}
            </div>
            
            <input
              className="btn bg-gradient-to-r from-primary to-secondary border-0 w-full"
              value="Login"
              type="submit"
            />
            <p className=" text-base mt-1 font-light text-start text-gray-600">
              New to Wooden OLX{" "}
              <Link
                to="/signup"
                className="font-medium text-primary dark:text-gray-200 hover:underline"
              >
                Create New Account{" "}
              </Link>
            </p>
            <div className="flex items-center justify-between mt-2">
              <span className="w-1/5 border-b border-2 dark:border-gray-900 lg:w-3/7"></span>

              <div className="divider">OR</div>

              <span className="w-1/5 border-b border-2 dark:border-gray-900 lg:w-3/7"></span>
            </div>

            <div className="flex items-center mt-2 -mx-2">
              <button
                onClick={handleGoogleSigIn}
                type="button"
                className="flex items-center justify-center w-full px-6 py-3 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-gradient-to-r from-primary to-secondary border-0 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
              >
                <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                  <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
                </svg>

                <span className="hidden mx-2 sm:inline uppercase">
                  {" "}
                  Continue with Google
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Login;