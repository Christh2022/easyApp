import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
    return (
        <>
            <Link to='/login'>
                <button className='button btn'>connexion</button>
            </Link>   
            <Link to='/signup'>
                <button className='button btn'>inscription</button>
            </Link>
        </>
    );
};

export default Button;