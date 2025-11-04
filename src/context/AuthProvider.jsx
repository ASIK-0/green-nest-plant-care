import React, { use, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [plants, setAllPlants] = useState([]);
    const [loading, setLoading] = useState(true)

    // console.log(loading, user)

    useEffect(() => {
        fetch("/plants.json")
            .then(res => res.json())
            .then(data => {
                setAllPlants(data)
            })
    }, [])

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const resetPassword = (email)=>{
        return sendPasswordResetEmail(auth, email)
    }
    const googleSingIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }
    const updateInfo = (updateUser) =>{
        return updateProfile(auth.currentUser, updateUser)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (createUser) => {
            setUser(createUser);
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        plants,
        setUser,
        createUser,
        googleSingIn,
        logOut,
        signIn,
        loading,
        setLoading,
        updateInfo,
        resetPassword,

    }


    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;