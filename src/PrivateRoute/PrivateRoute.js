import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({children}) => {
     const location = useLocation()
     const {user} = useContext(AuthContext)
     if(user){
        return children
     }
     return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;