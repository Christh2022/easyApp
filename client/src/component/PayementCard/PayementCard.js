import React from 'react';
import './PayementCard.css'

const PayementCard = ({
    list,
    Titre,
    montant,
    title, 
    info
}) => {
    return (
        <>
            <div className='payement'>
                <div className='phead'>
                    <h2>{Titre}</h2>
                    {montant}
                </div>
                <div className='pbody'>
                    <h3>{title}</h3>
                    <p>{info}</p>
                    <ul className='plist'>
                    {list.map((value, index) => (
                        <>
                            <div key={index} className='i-list'>
                                <li>{value}</li>
                            </div>
                        </>
                    ))}    
                    </ul>
                </div>
                <button className='button s-button'>Payer maintenant</button>
            </div>   
        </>
    );
};

export default PayementCard;