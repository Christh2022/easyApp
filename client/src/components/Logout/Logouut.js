import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../Login/firebase';



const Logout = () => {
    const userLogout = ()=>{
        signOut(auth)
            .then(()=>{
                // Redirection vers la nouvelle page
                console.log(window.location.replace('../Chat'));
            }).catch((error)=>{
                console.log(error)
            })
    }

    return (
        <div>
            <button onClick={userLogout}>Logout</button>
        </div>

    );
};

export default Logout;