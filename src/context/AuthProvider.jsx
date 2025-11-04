import React, { use, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [plants, setAllPlants] = useState([])

    useEffect(()=>{
        fetch("/plants.json")
        .then(res => res.json())
        .then(data => {
            setAllPlants(data)
        })
    },[])

    const createUser = (email, password, name, photo) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (createUser)=>{
            setUser(createUser);
        });
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        plants,
        setUser,
        createUser,
        logOut,
        signIn,
        
    }


    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;