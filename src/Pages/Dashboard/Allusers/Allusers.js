import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import AllUerDeleteModal from '../AllUerDeleteModal/AllUerDeleteModal';

const Allusers = () => {
const [deletingUser,setDeletingUser] = useState(null);

 const closingModal = () => {
    setDeletingUser(null)
 }



const {data: users = [],refetch} = useQuery({
    queryKey:['users'],
    queryFn: async() => {
        const res = await fetch('https://wooden-olx12-server.vercel.app/users');
        const data = await res.json();
        return data;
    }
})

const handleDeleteUser = (user) => {

    fetch(`https://wooden-olx12-server.vercel.app/users/${user._id}`, {
        method:'DELETE',
        headers:{
          
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          },
    })
    .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
            toast.success(`your ${user.name}  deleted successfully`)  
            refetch()    
            }
        })
 }


    return (
        <div>
            <h1 className='text-2xl'>All Users</h1>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Delete</th>
        
      </tr>
    </thead>
    <tbody>
    {
    users?.map((user,i) =>  <tr key={user._id}>
        <th>{i+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td><label onClick={() => setDeletingUser(user)} htmlFor="AllUerDeleteModal" className='btn btn-error'>Delete</label></td>
      </tr>)
     }
    </tbody>
  </table>
</div>
{
    deletingUser && <AllUerDeleteModal
    name={'Are You sure want to delete'}
    message={` Permanently delete ${deletingUser.name} `}
    closingModal={closingModal}
    successAction={handleDeleteUser}
    modalUserData={deletingUser}
    ></AllUerDeleteModal>
}
        </div>
    );
};

export default Allusers;