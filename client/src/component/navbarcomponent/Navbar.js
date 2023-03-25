import UilAlignJustify from '@iconscout/react-unicons/icons/uil-align-justify';
import UilBill from '@iconscout/react-unicons/icons/uil-bill';
import UilCommentsAlt from '@iconscout/react-unicons/icons/uil-comments-alt';
import UilEnvelope from '@iconscout/react-unicons/icons/uil-envelope';
import UilMoon from '@iconscout/react-unicons/icons/uil-moon';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilSetting from '@iconscout/react-unicons/icons/uil-setting';
import UilUserCircle from '@iconscout/react-unicons/icons/uil-user-circle';

import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import './NavbarChat.css'

const Navbar = () => {
    const { logout} = UserAuth();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const clickLogout = async ()=>{
        try{
            await logout()
            navigate('/signup')
        } catch(error){
            console.log(error)
        }
    }

    const showMenu = ()=>{
        setIsMenuOpen(!isMenuOpen); 
    }

    return (
        <>
           <div className='navbarComponent'>
                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', padding: ' 0.5rem'}}>
                    <Link to="/">
                        <h1>easy<span>Study</span></h1>
                    </Link>
                    {isMenuOpen? 
                        <button className="btn-menu-nav close" onClick={showMenu}>
                            <UilPlus size='1.5rem' color="white"/>
                        </button> : <button className="btn-menu-nav" style={{marginLeft: '-3rem'}} onClick={showMenu}>
                            <UilAlignJustify size='1.5rem' color="white"/>
                        </button>
                    }
                </div>
                <div className={isMenuOpen? 'sw-menuNav showMenu' : 'sw-menuNav'}>
                    <div className='menu-nav'>
                        <div className='l-line'></div>
                        <nav>
                            <div>
                                <h3 style={{color: '#fff', fontSize: '1rem', margin: '0.5rem 0'}}>General</h3>
                                <ul>
                                    <li>
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                            <UilUserCircle size="1.5rem" color="var(--orange)"/>
                                            <Link to="">
                                                Profil
                                            </Link>
                                        </div>
                                        <span> {'>'} </span>
                                        
                                    </li>
                                    <li>
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                            <UilCommentsAlt size="1.5rem" color="var(--orange)" />
                                            <Link to="">
                                                Chat
                                            </Link>
                                        </div>
                                        <span className='notification' >0</span>
                                    </li>
                                    <li>
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                            <UilEnvelope size="1.5rem" color="var(--orange)" />
                                            <Link to="">
                                                Inbox
                                            </Link>
                                        </div>
                                        <span className='notification' >0</span>
                                    </li>
                                </ul>
                                <h3 style={{color: '#fff', fontSize: '1rem', margin: '0.5rem 0'}}>Element</h3>
                                <ul>
                                    <li>
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                            <UilSetting size="1.5rem" color="var(--orange)" />
                                            <Link to="">
                                                Parametres
                                            </Link>
                                        </div>
                                        <span>{">"}</span>
                                    </li>
                                    <li>
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                            <UilBill size="1.5rem" color="var(--orange)" />
                                            <Link to="">
                                                Upgrades
                                            </Link>
                                        </div>
                                        <span>{">"}</span>
                                    </li>
                                    <li>
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                            <UilMoon size="1.5rem" color="var(--orange)"/>
                                            <Link to="">
                                                Light Mode
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>                        
                    </div>
                    <div className='logout'>
                        <div className='l-line'></div>
                        <Link to="/">
                            <button className='button' onClick={()=>clickLogout()}>Deconnexion</button>
                        </Link>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default Navbar;