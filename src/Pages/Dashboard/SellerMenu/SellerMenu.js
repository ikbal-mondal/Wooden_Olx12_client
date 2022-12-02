import React from 'react';
import { Link } from 'react-router-dom';

const SellerMenu = () => {
    return (
     
          <div className="border-2 shadow-2xl h-96">
          <div className="flex flex-col h-5/6 p-3 w-60 bg-gray-900 text-gray-100">
      <div className="space-y-3">
          <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                  <li className="rounded-sm border-b-2 border-slate-800 py-2 hover:text-black hover:bg-slate-200 ">
                      <Link to='/dashboard/addproduct' className="flex items-center p-2 space-x-3 rounded-md">
                     
                          <span>Add A Product</span>
                      </Link>
                  </li>
                  <li className="rounded-sm border-b-2 border-slate-800 py-2  hover:text-black hover:bg-slate-200">
                      <Link to='/dashboard/myproducts' className="flex items-center p-2 space-x-3 rounded-md">
                       
                          <span>My Product</span>
                      </Link>
                  </li>
             
                 
              </ul>
          </div>
      </div>
     
  </div>
      </div>
    );
};

export default SellerMenu;