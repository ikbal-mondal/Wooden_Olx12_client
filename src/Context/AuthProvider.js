import React, {  useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import app from '../../src/Firebase/Firebase';

 

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,SetUser] = useState(null)
  const [loading,SetLoading] = useState(true)





 

    useEffect(() => {

        const unsubscribe =  onAuthStateChanged(auth,currentUser =>  {
             console.log(currentUser);
             SetUser(currentUser)
             SetLoading(false)
          });
          return () => {
             return unsubscribe();
          }
      },[])


    const authInfo = {
        loading,
        user,
       
   }

    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;