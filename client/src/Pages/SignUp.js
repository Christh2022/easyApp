import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import './signup.css';

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {user, signUp} = UserAuth();
    const navigate = useNavigate();
    console.log(user);
    const submit = async (e)=>{
        e.preventDefault();
        try{
            await signUp(email, password);
            navigate('/'); 
        } catch(error){
            console.log(error);
        }
    }
    

    return (
        <>
            <div>
                <form onSubmit={submit}>
                    <h1>Inscription</h1>
                    <div>
                        <input 
                            onChange={(e)=>setEmail(e.target.value)}
                            type="email" 
                            placeholder='email' 
                            autoComplete='email' 
                        />
                        <input 
                            onChange={(e)=>setPassword(e.target.value)}
                            type="password" 
                            placeholder='mot de passe' 
                            autoComplete='current-password'
                        />
                        
                        <button type="submit">inscris-toi</button>
                        <div>
                            <p><input type="checkbox"/> Se souvenir de moi</p>
                            <p>Besoin d'aide ?</p>
                        </div>
                        <p>Tu as déjà un compte? <Link to="/login" >connect-toi</Link> </p>
                    </div>
                </form>
            </div> 
        </>
    );
};

export default SignUp;