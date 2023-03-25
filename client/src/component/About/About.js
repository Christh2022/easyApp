import React from 'react';
import './About.css'
import HeartEmoji from '../../img/heartemoji.png'
import glasses from '../../img/glasses.png'
import humble from '../../img/humble.png'
import Card from '../Card/Card';
import { motion } from 'framer-motion';



const About = () => {
    const transition = {duration : 1, type: 'spring'}
    return (
        <>
            <div className='about' id='About'>
                {/*left side */}
                <div className='awesome'>
                    <span>A propos</span>
                    <span>Qui sommes-nous</span>
                    <span>
                        Bienvenue sur notre site dédié à 
                        l'apprentissage et la formation 
                        scolaire et universitaire. Nous 
                        offrons une variété de services 
                        pour aider les élèves à améliorer 
                        leur compréhension des sujets scolaires. 
                    </span>
                    <button className='button a-button'>Tester maintenant</button>
                    <div className='blur' style={{
                        background: '#ABF1FF94 ', 
                        top: '13rem', 
                        left: '-16rem'
                        }}></div>
                </div>
                {/*right side */}
                <div className='cards'>
                    <motion.div
                        whileInView={{left: '18rem'}}
                        initial={{left: '10rem'}}
                        transition={transition}
                        className='Simple'
                        >
                        <Card 
                            emoji={HeartEmoji} 
                            heading='Simple' 
                            body='Choisissez-nous, nous sommes là pour vous simplifier la vie !' 
                        />
                    </motion.div>
                    <motion.div 
                        whileInView={{left: '2rem'}}
                        initial={{left: '0rem'}}
                        transition={transition}
                        className='Efficace'
                        >
                        <Card 
                            emoji={glasses} 
                            heading='Efficace' 
                            body='Notre engagement : une efficacité sans compromis pour répondre à tous vos besoins !' 
                        />
                    </motion.div>
                    <motion.div 
                        whileInView={{left: '18rem'}}
                        initial={{left: '1rem'}}
                        transition={transition}
                        className='Rapide'
                        >
                        <Card 
                            emoji={humble} 
                            heading='Rapide' 
                            body='a rapidité à portée de clic : optez pour notre service pour des résultats instantanés !' 
                        />
                    </motion.div>
                    <div className='blur a-blur'></div>
                </div>
            </div>
            <div className='experience'>
                <div className='achievement' >
                    <div className='circle' >8+</div>
                    <span>années</span>
                    <span>D'expérience</span>
                </div>
                <div className='achievement' >
                    <div className='circle' >2000+</div>
                    <span>étudiants</span>
                    <span>Inscrits</span>
                </div>
                <div className='achievement' >
                    <div className='circle' >50+</div>
                    <span>Intervenants</span>
                    <span>Expérimentés</span>
                </div>
            </div>
        </>
    );
};

export default About;