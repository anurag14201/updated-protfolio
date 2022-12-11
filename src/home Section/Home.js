import React from 'react';
import Skill from './Skill';

const Home = () => {
    return (
        <div>
            <div className='text-white text-start pt-32 m-12'>
                <h1 className='text-5xl'>Hi, There I'm <span className=''>Anurag</span>,</h1>
                <br></br>
                <h1 className='text-5xl'>A Software Engineer. I write your ideas in codes</h1>
                <h1 className='text-xl m-5'>I create beautiful & functional websites for small businesses. Below are a few service i provide.</h1>
            </div>
            <div className='m-8 pt-64'>
                <Skill></Skill>
            </div>
        </div>
    );
};

export default Home;