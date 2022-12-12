import React from 'react';
import MyWork from './MyWork';
import ReactImg from '../img/Icons/physics.png';
import git from '../img/Icons/github.png';
import insta from '../img/Icons/insta.png';
import facebook from '../img/Icons/face.png';
import twitter from '../img/Icons/Twitter.png';
import linkedin from '../img/Icons/linkedin.png';
const Skill = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4'>
                <div className="card w-full bg-base-100">
                    <div className="card-body">
                        <h2 className="card-title text-gray-700	">DONT BE A STRANGER</h2>
                        <div className='flex  justify-start font-bold  font-Din  items-center text-xs md:text-sm space-x-4 md:space-x-5 lg:space-x-6'>
                            <a href='https://github.com/anurag14201' target="_blank" rel='noopener noreferrer'>
                                <img className='w-6' src={git} alt=''></img>
                                <p className='font-semibold text-base hover:text-red-300'>GH</p>
                            </a>
                            <a href='https://www.linkedin.com/in/anurag-dutta-6513511a6/' target="_blank" rel='noopener noreferrer'>
                                <img className='w-6' src={linkedin} alt=''></img>
                                <p className='font-semibold text-base hover:text-red-300'>LD</p>
                            </a>
                            <a href='https://www.facebook.com/anurag.datta.988/' target="_blank" rel='noopener noreferrer'>
                                <img className='w-6' src={facebook} alt=''></img>
                                <p className='font-semibold text-base hover:text-red-300'>FB</p>
                            </a>
                            <a href='https://www.instagram.com/anuragdattaaa/?fbclid=IwAR0EWDzk2dSia7T7Em0MMvqE8e81_6BEJT0APZrEXKUVFWBryxxisgHPdOI' target="_blank" rel='noopener noreferrer'>
                                <img className='w-6' src={insta} alt=''></img>
                                <p className='font-semibold text-base hover:text-blue-500'>IG</p>
                            </a>
                            <a href='https://twitter.com/chissbanny?fbclid=IwAR0pivSRKRrKxEdXTrmqjsun8cO9fz6WFvFfjZZt9nI7PrPq9WX6nbVKNJ4' target="_blank" rel='noopener noreferrer'>
                                <img className='w-6' src={twitter} alt=''></img>
                                <p className='font-semibold text-base hover:text-red-300'>TW</p>
                            </a>

                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100">
                    <div className="card-body">
                        <h2 className="card-title uppercase text-center text-gray-700">Download CV</h2>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='uppercase text-center m-8 pt-32 text-3xl font-bold text-gray-600	'>Skills</h1>
            </div>

            <div>
                <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1  '>
                    <div className="card w-full bg-base-100">
                        <div className="card-body">
                            <h2 className="text-center text-xl font-bold">Front-End</h2>
                            <div className='flex gap-12'>
                                <img className='w-12' src={ReactImg} alt='react'></img>
                                <img className='w-12' src={ReactImg} alt='react'></img>
                                <img className='w-12' src={ReactImg} alt='react'></img>
                            </div>
                            <p>React</p>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100">
                        <div className="card-body">
                            <h2 className="text-center text-xl font-bold">Back-End</h2>
                            <img className='w-12' src={ReactImg} alt='react'></img>
                            <p>React</p>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100">
                        <div className="card-body">
                            <h2 className="text-center text-xl font-bold">Soft-Skills</h2>
                            <img className='w-12' src={ReactImg} alt='react'></img>
                            <p>React</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <MyWork></MyWork>
            </div>
        </div>
    );
};

export default Skill;