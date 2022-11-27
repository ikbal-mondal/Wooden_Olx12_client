import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({children}) => {
     const location = useLocation()
     const {user,loading} = useContext(AuthContext)
     if(loading){
      return <div className="w-16 text-center mt-36 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
     }
     if(user){
        return children
     }
     return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;