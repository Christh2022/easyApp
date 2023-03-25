import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import './login.css'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const {user, login} = UserAuth();
    const navigate = useNavigate()
    console.log(user)
    const submit = async (e)=>{
        e.preventDefault();
        setError()
        try{
            await login(email, password);
            navigate('/chat');
        } catch(error){
            console.log(error);
            setError(error.message)
        }
    }
    
    return (
        <>
            <div>
                {error ? <p>{error}</p>: null}
                <form onSubmit={submit}>
                    <h1>connexion</h1>
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
                        <button type="submit">connecte-toi</button>
                        <div>
                            <p><input type="checkbox"/> Se souvenir de moi</p>
                            <p>Besoin d'aide ?</p>
                        </div>
                        <p>Tu n'as pas de compte? <Link to="/signup" >inscrit-toi</Link> </p>
                    </div>
                </form>
            </div> 
        </>
    );
};

export default Login;