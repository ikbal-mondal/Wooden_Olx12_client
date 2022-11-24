import React, {  useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../src/Firebase/Firebase';
import { createContext } from 'react';

 

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,SetUser] = useState(null)
  const [loading,SetLoading] = useState(true)


  
  const  createUser = (email,password) => {
      
      return createUserWithEmailAndPassword(auth,email,password);
    }
 
    const updateUser = (userInfo) => {
       
          return updateProfile(auth.currentUser,userInfo)
     }

const loginWithGoogle = (provider) => {
      return signInWithPopup(auth, provider);
    };
 
    const userLogin = (email,password) => {
     
        return signInWithEmailAndPassword(auth,email,password)
     }

     const logOut = () => {
        return signOut(auth);
      };



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
        loginWithGoogle,
        createUser,
        updateUser,
        userLogin,
        logOut
   }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;