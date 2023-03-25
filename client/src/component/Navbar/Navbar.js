import React, { useState } from 'react';
import './Navbar.css'
import {Link} from 'react-scroll'
import Button from '../Bouton/Button';
import UilAlignJustify from '@iconscout/react-unicons/icons/uil-align-justify';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';


const Navbar = () => {
    const [menuNavShow, setMenuNavShow] = useState(false)
    const showMenu = ()=>{
        setMenuNavShow(!menuNavShow)
    }


    return (
        <>
            
                <div className='na-wrapper'>
                    
                    <div className='na-left'>
                        <div className='na-logo'>Easy<span style={{color: 'var(--orange)', fontSize: '1.4rem', fontWeight: 'bold'}}>Study</span></div>
                    </div>
                    <div className={menuNavShow ? 'na-right show' : 'na-right'}>
                        <div className='na-list'>
                            <ul>
                                <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                                    <li>Accueil</li>
                                </Link>
                                <Link spy={true} to='About' smooth={true}>
                                    <li>A propos</li>
                                </Link>
                                <Link spy={true} to='Services' smooth={true}>
                                    <li>Services</li>
                                </Link>
                                <Link spy={true} to='Contact' smooth={true}>
                                    <li>Contact</li>
                                </Link>
                            </ul>
                        </div>
                        <div className='na-button'>
                            <Button/>
                        </div>
                    </div>
                    <div className='na-btn' >
                        {menuNavShow? <button className='btn-menu close' onClick={showMenu} style={{background: 'none', border: 'none'}}>
                            <UilPlus size='1.5rem' color='var(--orange)'/>
                        </button> : <button className='btn-menu' onClick={showMenu} style={{background: 'none', border: 'none'}}>
                            <UilAlignJustify size='1.5rem' color='var(--orange)'/>
                        </button>}
                    </div>
                
            </div>
            
        </>
    );
};

export default Navbar;