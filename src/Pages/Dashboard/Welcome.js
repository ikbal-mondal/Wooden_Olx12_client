import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Welcome = () => {
    const {user} = useContext(AuthContext)
    const [userRole, setUserRole] = useState("")
 
	 useEffect(() => {
        fetch(`https://wooden-olx12-server.vercel.app/user/${user?.email}`,{
            headers:{
                        
                authorization: `bearer ${localStorage.getItem('accessToken')}`
              },
        })
		.then(res => res.json())
		.then(data => {
            console.log(data.useruserRole);
            setUserRole(data.userRole)
        })

	 },[user?.email])

    return (
        <div className='container mx-auto  text-center'>
            <h1 className='text-5xl mt-12 text-emerald-600'> Welcome  to <b className='text-blue-700 '>{userRole}</b> Dashboard  </h1>
           <div className="mx-auto">
           <img className=' inline' src="https://cge.usil.edu.pe/hubfs/conoce-las-ramas-que-te-ofrece-la-carrera-de-administracion.jpg#keepProtocol" alt="" />
           </div>
        </div>
    );
};

export default Welcome;