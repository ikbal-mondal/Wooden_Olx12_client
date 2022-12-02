import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import AdminMenu from '../AdminMenu/AdminMenu';
import BuyerMenu from '../BuyerMenu/BuyerMenu';
import SellerMenu from '../SellerMenu/SellerMenu';

const SideBar = () => {
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
            setUserRole(data.userRole)
        })

	 },[user?.email])

    return (
        <ul className="menu">
       
        <ul className='mt-6'>
                            {
                                userRole === "Admin" && <li><AdminMenu></AdminMenu></li>
                            }
                            {
                                userRole === "Seller" && <li><SellerMenu></SellerMenu></li>
                            }
                            {
                                userRole === "Buyer" && <li><BuyerMenu></BuyerMenu></li>
                            }
                        </ul>

      </ul>
    );
};

export default SideBar;