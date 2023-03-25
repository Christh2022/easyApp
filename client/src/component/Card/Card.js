import React from 'react';
import './Card.css'
const Card = ({emoji, heading, body}) => {
    return (
        <div className='card'>
            <img src={emoji} alt='/' />
            <span>{heading}</span>
            <span>{body}</span>
        </div>
    );
};

export default Card;