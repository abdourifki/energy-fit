import React from 'react';
import './Hero.css';
import Header from '../Header/Header';

 
const Hero = () => {
    return (

        <div className='Hero'>
            <div className='left-Hero'>
                <Header />
                {/*the best ad*/}
                <div className='the-best-ad'>
                    <div></div>
                    <span>Be Stronger than your excuses</span>
                </div>
                {/*heading hero*/}
                <div className='hero-text'>
                    <div>
                        <span className='stroke-text' >Prenez </span>
                        <span>Un </span>

                    </div>
                    <div><span> nouveau Depart</span></div>
                    <div>
                        <span>Nous Sommes Ouvert!!</span>
                    </div>
                </div>
                {/*figures*/}
                <div className='figures'>
                    <div>
                        <span>+100</span>
                        <span>Expert Coatchs</span>
                    </div>
                    <div>
                        <span>+200</span>
                        <span>Membres</span>
                    </div>
                    <div>
                        <span>+30</span>
                        <span>Fitness programs</span>
                    </div>
                </div>
                {/*hero buttons*/}
                <div className='hero-button'>
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>
            </div>
            <div className='Right-Hero'>right side</div>
            
                <img src="heroPic.png" alt='' className='hero-pic'/>
                <img src="heroImageBack.png" alt='' className='hero-back'/>
            
            
    </div>


    );
}

export default Hero;

