import {createUserWithEmailAndPassword } from "firebase/auth"
import React, { useState } from 'react';
import {auth} from "../Login/firebase"

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const SignUp = (e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                console.log(userCredential)
            }).catch((err)=>{
                console.log(err);
            })
    }

    return (
        <>
            <form onSubmit={SignUp}>
                <h2>Inscrit-toi</h2>
                <div>
                    <input type="email"  placeholder='Adresse mail' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password"  placeholder='Mot de passe' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button type='submit'>Inscription</button>
                </div>
            </form>  
        </>
    );
};

export default SignUp;