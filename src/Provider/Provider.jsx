import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import PropTypes from 'prop-types';


export const Authcontext = createContext(null)
const googleprovider = new GoogleAuthProvider();
const auth = getAuth(app)
const Provider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)

    const createuser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signin = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signgoogle = () => {
        setloading(true)
        return signInWithPopup(auth, googleprovider)
    }
    const logout = () => {
        setloading(true)
        return signOut(auth)

    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {

            setuser(currentuser)

            setloading(false)

        });
        return () => unsubscribe()
    }, [])
    const authinfo = {
        user,
        createuser,
        logout,
        signin,
        signgoogle,
        loading
    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};
Provider.propTypes = {
    children: PropTypes.object,
};

export default Provider;