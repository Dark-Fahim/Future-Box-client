import { useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }

    const update = (imageUrl, name) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: imageUrl
        })
    }

    useEffect(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }
    }, [])





    const authInfo = {
        createUser,
        user,
        update,
        logOut,
        signInWithEmailPassword,
        loading,
        googleSignIn,
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;