import {signInWithEmailAndPassword } from "firebase/auth"
import React, { useState } from 'react';
import {auth} from "../Login/firebase"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                console.log(userCredential)
            }).catch((err)=>{
                console.log(err);
            })
    }
    return (
        <>
            <form onSubmit={login}>
                <h2>Connecte-toi</h2>
                <div>
                <input type="email"  placeholder='Adresse mail' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password"  placeholder='Mot de passe' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button type='submit'>Connexion</button>
                </div>
                
            </form>
        </>
    );
};

export default Login;