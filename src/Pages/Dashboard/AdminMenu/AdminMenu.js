import React from 'react';
import { Link } from 'react-router-dom';

const AdminMenu = () => {
    return (
       
    <div className="border-2 shadow-2xl h-96">
         <div className="flex flex-col h-full p-3 w-60  bg-black text-gray-100">
        <div className="space-y-3">
            <div className="flex-1">
                <ul className="pt-2 pb-4 space-y-1 text-sm">
                    <li className="rounded-sm border-b-2 border-slate-800 py-2 hover:text-black hover:bg-slate-200 ">
                        <Link to='/dashboard/allusers' className="flex items-center p-2 space-x-3 rounded-md">
                            
                            <span>All Users</span>
                        </Link>
                    </li>
                    <li className="rounded-sm border-b-2 border-slate-800 py-2 hover:text-black hover:bg-slate-200 ">
                        <Link to='' className="flex items-center p-2 space-x-3 rounded-md">
                           
                            <span>All Buyers</span>
                        </Link>
                    </li>
                     
                </ul>
            </div>
        </div>
       
    </div>
    </div>
    );
};

export default AdminMenu;