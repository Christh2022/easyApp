import React from 'react';
import PayementCard from '../PayementCard/PayementCard';
import './Service.css'

const Service = () => {

    const list = [
        "correction exercices", 
        "Dissertations", 
        "Sujets pour s'exercer", 
        "Cours pour s'ameliorer",
         "Sans engagement"
    ]
    return (
        <div className='service' id='Services'>
            <div className='title'>
                <h1>Services</h1>
                <span>Ce que nous proposons</span>
            </div>
            <div 
                className='blur' 
                style={{background: '#ABF1FF94',  left: '-5rem', top: '2rem'}}
            ></div>
            <div className='s-payementCard'>
                <div className='pay-content'>
                    <PayementCard 
                    list={list}
                    Titre= "Standart"
                    montant =" 500 FCFA"
                    title =" Test" 
                    info ="pour découvrir notre application vouspouvez la tester pendant un mois "
                    />
                </div>
                <div className='pay-content'>
                    <PayementCard 
                    list={list}
                    Titre= "Silver"
                    montant =" 2,400 FCFA"
                    title =" BASIC" 
                    info ="valable pendant 6 mois, pour aller plus loin avec nous et découvrir plus d'options"
                    />
                </div>
                <div className='pay-content'>
                    <PayementCard 
                        list={list}
                        Titre= "Gold"
                        montant =" 4,200 FCFA"
                        title ="PREMIUM" 
                        info ="valable pendant 1 année, Long terme avec beaucoup d'options"
                        />
                </div>
            </div>
            <div
                    className='blur c-blur1' 
                    style={{background: 'var(--purple)',
                    top: '-8rem',
                    left: '50rem'
                    }}
                ></div>
        </div>
    );
};

export default Service;