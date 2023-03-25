import Aos from 'aos';
import "aos/dist/aos.css"
import React, { useEffect } from 'react';
import Skill from './Skill';
import { Parallax } from 'react-parallax';
import opsbro from '../img/Moon with front.jpg';
import './Contract.css'





const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div>
            <Parallax className='img' strength={-800} bgImage={opsbro}>

            </Parallax>
            <div className='text-start pt-24 m-24' data-aos="fade-up">
                {/* <h1 className='text-3xl'>Hello! I'm <span className='font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-red-300 to-green-600	'>Anurag Datta</span>,</h1>
                <h1 className='text-5xl font-bold text-gray-700'>A Software Engineer and a Full stack Web developer.</h1>
                <h1 className='text-xl m-5 font-small text-gray-700'>I create many Featuristic Websites.Now Days I am Learning new things.Hakerthon and Codeforce my best friends</h1> */}
            </div>
            <div className='m-8 pt-64'>
                <Skill></Skill>
            </div>
        </div>
    );
};

export default Home;