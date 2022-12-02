import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';

const MayProducts = () => {
    const [deletingProduct,setDeletingProduct] = useState(null)
    
   const {user} = useContext(AuthContext)
     const closeModal = () => {
         setDeletingProduct(null)
     }
     

    const {data: AddProducts,isLoading,refetch } = useQuery({
        
        queryKey:['AddProducts'],
 
        queryFn: async () => {
            try{

                const res = await  fetch(`https://wooden-olx12-server.vercel.app/AddProducts/${user?.email}`,{
                    headers:{
                        
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                      },
                })
                const data = await res.json();
                return data;
            }
            catch(error){
               console.log(error);
            }
        }
    })
    const handleDeleteProduct = (AddProducts) => {
        fetch(`https://wooden-olx12-server.vercel.app/AddProducts/${AddProducts._id}`, {
            method:'DELETE',
            headers:{
              
                authorization: `bearer ${localStorage.getItem('accessToken')}`
              },
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
            refetch()
            toast.success(`your ${AddProducts.product_name}  deleted successfully`)      
            }
        })
     }

if(isLoading){
    return <div className="mx-auto ml-12 my-6">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-900"></div>
    </div>
}

    return (
        <div>
           
            <h1>My Products : {AddProducts?.length} </h1>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Picture</th>
        <th>Product Name</th>
        <th>Original Price</th>
        <th>Resale Price</th>
        <th>Location</th>
        <th>Year of USe</th>
        <th>Delete</th>
        <th>Advertise</th>
      </tr>
    </thead>
    <tbody>

     {
         AddProducts && 
        AddProducts?.map((product,i) =>  <tr key={product._id}>
            <th>{i + 1}</th>
            <td><div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={product.image} alt='' />
  </div>
</div></td>
            <td>{product.product_name}</td>
            <td>{product.original_price}</td>
            <td>{product.resale_price}</td>
            <td>{product.location}</td>
            <td>{product.Year_of_Use}</td>
            <td>
                <label onClick={() => setDeletingProduct(product)}  htmlFor="ConfirmationModal" className="btn btn-sm btn-warning">Delete</label>
                </td>
            <td><button className="btn btn-sm btn-primary">advertise</button></td>
            
          </tr>)
     }
     
    </tbody>
  </table>
</div> 
{
    deletingProduct && <ConfirmationModal
    title={`Are you sure you want to delete ? `}
    message={`if you delete ${deletingProduct.product_name} permanently delete `}
    successAction ={handleDeleteProduct}
    successButtonName='Delete'
    modalData={deletingProduct}
    closeModal={closeModal}
    ></ConfirmationModal>
}
        </div>
    );
};

export default MayProducts;