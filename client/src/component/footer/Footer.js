import React from 'react';
import UilInstagramAlt from '../../../node_modules/@iconscout/react-unicons/icons/uil-instagram-alt';
import UilFacebookF from '../../../node_modules/@iconscout/react-unicons/icons/uil-facebook-f';
import UilYoutube from '../../../node_modules/@iconscout/react-unicons/icons/uil-youtube';
import wave from '../../img/wave.png'
import './Footer.css'




const Footer = () => {
    return (
        <div className='footer'>
            <img src={wave} style={{width: '100%'}} alt='/'/>
            <div className='f-content'>
                <div className='f-apropos'>
                    <h3>A propos</h3>
                    <ul>
                        <li>Conditions générales d'utilisation</li>
                        <li>Politique de confidentialité</li>
                        <li>Droit d'accès aux données perso</li>
                    </ul>
                </div>
                <div className='f-support'>
                    <h3>Support</h3>
                    <ul>
                        <li>Nous contacter</li>
                        <li>easystudy28@gmail.fr</li>
                    </ul>
                </div>
                <div className='f-social'>
                    <h3>Social</h3>
                    <ul className='f-icons'>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Youtube</li>
                    </ul>
                </div>
            </div>
            <div className='copyright'>
                <span style={{color:'white'}} >© Mise à jour le 25/01/2023 Tout droit réservé</span>
                <span >
                    <UilYoutube color='white' size='1.5rem' />
                    <UilFacebookF color='white' size='1.5rem' />
                    <UilInstagramAlt color='white' size='1.5rem'/>
                </span>
            </div>
        </div>
    );
};

export default Footer;