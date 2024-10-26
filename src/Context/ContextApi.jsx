import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
export const AuthContext = createContext(null)
import auth from "../Firebase/firebase.config";

const ContextApi = ({children}) => {
// console.log(auth)
const [user , setUser] = useState(null)
const [loading , setLoading] = useState(true)

//create user
const creatUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

//login user
const SignInUser = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
    });
    return ()=>unSubscribe();
},[])

//signOut
const LogOut = ()=>{
    setLoading(true);
    //first e all user null korte hobe
    setUser(null)
    signOut(auth);
}

const authInfo={
    user,
    creatUser,
    SignInUser,
    LogOut,
    loading,

}
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default ContextApi;