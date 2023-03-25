import React from 'react';
import './intro.css'
import Github from '../../img/github.png'
import Instagram from '../../img/instagram.png'
import LinkedIn from '../../img/linkedin.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import girl from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glasses from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {motion} from 'framer-motion'

const Intro = () => {
    const transition = {duration : 2, type: 'spring'}

    return (
        <>
            <div className='intro'>
                <div className='i-left'>
                    <div className='i-title'>
                        <span>Le Meilleur Outil Pour </span>
                        <span>Apprendre N'importe Quoi</span>
                        <span style={{textAlign: 'justify'}}>
                            Une méthode d'apprentissage 
                            plus intelligente. Nous utilisons 
                            des techniques interactives et des 
                            outils intelligents pour aider les
                            élèves à apprendre plus efficacement.
                            Nous repondons à toutes vos questions 
                            en moins de 1 minute
                        </span>
                    </div>

                    <button className='button i-button'>Inscrit-toi</button>
                    <div className='i-icons'>
                        <img src={Github} alt="/"/>
                        <img src={Instagram} alt="/"/>
                        <img src={LinkedIn} alt="/"/>
                    </div>
                </div>
                <div className='i-right'>
                    
                    <img src={Vector1} alt="/"/>
                    <img src={Vector2} alt="/"/>
                    <img src={girl} alt="/"/>
                
                    <motion.img 
                        initial = {{left: '-36%'}}
                        whileInView = {{left : '-24%'}}
                        transition = {transition}
                        src={glasses} 
                        alt="/"
                    />
                    <motion.div 
                        initial = {{top: '-4%', left: '74%'}}
                        whileInView = {{left : '38%'}}
                        transition = {transition}
                        style={{top: '-4%', left: '23%', zIndex: '999'}}>
                        <FloatingDiv image={Crown} text1='Math' text2='Physique'/>
                    </motion.div>
                    <motion.div 
                        initial = {{top: '18rem', left: '9rem'}}
                        whileInView = {{left : '0rem'}}
                        transition = {transition}
                        style={{top: '50%', left: '-6%', zIndex: '999'}}>
                        <FloatingDiv image={thumbup} text1='Comptabilité' text2='Biologie'/>
                    </motion.div>
                </div>
            </div>
            {/*blur divs */}
            <div className='blur i-blur2'>
            </div>
            <div className='blur i-blur1'>
            </div>
        </>
    );
};

export default Intro;