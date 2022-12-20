import Aos from 'aos';
import "aos/dist/aos.css"
import React, { useEffect } from 'react';
import Skill from './Skill';



const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div>
            <div className='text-start pt-24 m-24' data-aos="fade-up">
                <h1 className='text-5xl'>I'm <span className='font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-red-300 to-green-600	'>Anurag Datta</span>,</h1>
                <br></br>
                <h1 className='text-5xl font-bold text-gray-700'>A Software Engineer and also a developer. I write your <span className='font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"'>Ideas</span> in <span className='font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"'>Codes</span></h1>
                {/* <h1 className='text-xl m-5 font-small text-gray-700	'>I create beautiful & functional websites for small businesses. Below are a few service i provide.</h1> */}
            </div>
            <div className='m-8 pt-64'>
                <Skill></Skill>
            </div>
        </div>
    );
};

export default Home;