import React from 'react';
import About from '../component/About/About';
import Contact from '../component/Contact/Contact';
import Footer from '../component/footer/Footer';
import Intro from '../component/intro/Intro';
import Navbar from '../component/Navbar/Navbar';
import Service from '../component/services/Service';
import './Home.css'


const Home = () => {
    return (
        <div className='Home'>
            <>
                <Navbar/>
            </>
            <>
                <Intro/>
            </>
            <>
                <About/>
            </>
            <>
                <Service/>
            </>
            <>
                <Contact/>
            </>
            <>
                <Footer/>
            </>
        </div>
    );
};

export default Home;