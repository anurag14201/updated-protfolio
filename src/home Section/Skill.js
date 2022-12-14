import React from 'react';
import MyWork from './MyWork';
import ReactImg from '../img/Icons/react.png';
import git from '../img/Icons/github.png';
import insta from '../img/Icons/instagram.png';
import facebook from '../img/Icons/face.png';
import twitter from '../img/Icons/twitter.png';
import linkedin from '../img/Icons/linkedin.png';
import html from "../img/Icons/html-5.png"
import Css3 from '../img/Icons/css.png'
import figma from '../img/Icons/figma.png'
import firebase from '../img/Icons/firebase.png'
import next from '../img/Icons/Next.png'
import nodejs from '../img/Icons/nodejs.png'
import netlify from '../img/Icons/Netlify.png'
import justgit from '../img/Icons/Git.png'
import Github from '../img/Icons/github.png';
import rest from '../img/Icons/rest.png';
import router from '../img/Icons/Router.png';
import javasc from '../img/Icons/js.png';
import mongo from '../img/Icons/mongoDB.png';
import express from '../img/Icons/expressjs.png';
import jwt from '../img/Icons/Jwt.png';
import bootstrap from '../img/Icons/bootstrap.png';
import wind from '../img/Icons/Tailwind.png';
import mypdf from '../img/files/Anurag-datta-CV.pdf';





const Skill = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4'>
                <div className="card w-full bg-base-100">
                    <div className="card-body">
                        <h2 className="card-title text-gray-700	">GET IN TOUCH </h2>
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
                        <h2 className="uppercase text-center font-medium text-xl text-gray-700">Download CV</h2>
                        <div className='text-center'>
                            <a className='bg-info w-32 text-center text-white font-bold rounded-full p-2 m-2' href={mypdf} download='My_file.pdf'>Resume</a>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='uppercase text-center m-8 pt-32 text-3xl font-bold text-gray-600	'>Skills</h1>
            </div>
            <svg className="animate-bounce w-6 h-6 ...">
            </svg>
            <div>
                <div className='md:flex md:justify-between md:items-start space-y-16 md:space-y-0 md:space-x-14  px-2'>
                    <div className="space-y-2">
                        <h2 className="text-center text-xl font-bold uppercase ">Front-End</h2>
                        <div className=''>
                            <div className='grid grid-cols-3  justify-items-center gap-2 text-lg font-semibold capitalize'>
                                <div className='md:px-6'>
                                    <div className='grid gap-1 justify-items-center transition duration-700 ease-in-out'>
                                        <img className='lg:w-12 md:w-12 sm:w-12' src={ReactImg} alt='react'></img>
                                        <p className='text-center text-sm text-gray-500 font-bold '>React</p>
                                    </div>
                                </div>
                                <div className='md:px-6'>
                                    <div className='grid gap-1 justify-items-center'>
                                        <img className='lg:w-12 md:w-12 sm:w-12' src={html} alt='react'></img>
                                        <p className='text-center text-sm text-gray-500 font-bold '>HTML</p>
                                    </div>
                                </div>
                                <div className='md:px-6'>
                                    <div className='grid gap-1 justify-items-center'>
                                        <img className='lg:w-12 md:w-12 sm:w-12' src={Css3} alt='react'></img>
                                        <p className='text-center text-sm text-gray-500 font-bold '>CSS</p>
                                    </div>
                                </div>
                                <div className='md:px-6'>
                                    <div className='grid gap-1 justify-items-center'>
                                        <img className='lg:w-12 md:w-12 sm:w-12' src={next} alt='react'></img>
                                        <p className='text-center text-sm text-gray-500 font-bold '>Next JS</p>
                                    </div>
                                </div>
                                <div className='md:px-6'>
                                    <div className='grid gap-1 justify-items-center'>
                                        <img className='lg:w-12 md:w-12 sm:w-12' src={router} alt='react'></img>
                                        <p className='text-center text-sm text-gray-500 font-bold '>React Router</p>
                                    </div>
                                </div>
                                <div className='md:px-6'>
                                    <div className='grid gap-1 justify-items-center'>
                                        <img className='lg:w-12 md:w-12 sm:w-12' src={javasc} alt='react'></img>
                                        <p className='text-center text-sm text-gray-500 font-bold '>JavaScprit</p>
                                    </div>
                                </div>
                                <div className='md:px-6'>
                                    <div className='grid gap-1 justify-items-center'>
                                        <img className='lg:w-12 md:w-12 sm:w-12' src={bootstrap} alt='react'></img>
                                        <p className='text-center text-sm text-gray-500 font-bold '>BootStrap</p>
                                    </div>
                                </div>
                                <div className='md:px-6'>
                                    <div className='grid gap-1 justify-items-center'>
                                        <img className='lg:w-12 md:w-12 sm:w-12' src={wind} alt='react'></img>
                                        <p className='text-center text-sm text-gray-500 font-bold '>Tailwind CSS</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="space-y-2">
                        <h2 className="text-center text-xl font-bold uppercase ">Back-End</h2>
                        <div className=''>
                            <div className='grid grid-cols-3  justify-items-center gap-2 text-lg font-semibold capitalize'>
                                <div className='md:px-6'>
                                    <div className='grid gap-1 justify-items-center'>
                                        <img className='lg:w-12 md:w-12 sm:w-12' src={nodejs} alt='react'></img>
                                        <p className='text-center text-sm text-gray-500 font-bold '>Node JS</p>
                                    </div>
                                </div>
                                <div className='md:px-6'>
                                    <div className='grid gap-1 justify-items-center'>
                                        <img className='lg:w-12 md:w-12 sm:w-12' src={rest} alt='react'></img>
                                        <p className='text-center text-sm text-gray-500 font-bold '>Rest API</p>
                                    </div>
                                </div>
                                <div className='md:px-6'>
                                    <div className='grid gap-1 justify-items-center'>
                                        <img className='lg:w-12 md:w-12 sm:w-12' src={mongo} alt='react'></img>
                                        <p className='text-center text-sm text-gray-500 font-bold '>MongoDB</p>
                                    </div>
                                </div>
                                <div className='md:px-6'>
                                    <div className='grid gap-1 justify-items-center'>
                                        <img className='lg:w-12 md:w-12 sm:w-12' src={express} alt='react'></img>
                                        <p className='text-center text-sm text-gray-500 font-bold '>Express JS</p>
                                    </div>
                                </div>
                                <div className='md:px-6'>
                                    <div className='grid gap-1 justify-items-center'>
                                        <img className='lg:w-12 md:w-12 sm:w-12' src={jwt} alt='react'></img>
                                        <p className='text-center text-sm text-gray-500 font-bold '>JWT</p>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                    <div className="space-y-2">
                        <h2 className="text-center text-xl font-bold uppercase ">Tools</h2>
                        <div className=''>
                            <div className='grid grid-cols-3  justify-items-center gap-2 text-lg font-semibold capitalize'>
                                <div className='md:px-6'>
                                    <div className='grid gap-1 justify-items-center'>
                                        <img className='lg:w-12 md:w-12 sm:w-12' src={justgit} alt='react'></img>
                                        <p className='text-center text-sm text-gray-500 font-bold '>GIT</p>
                                    </div>
                                </div>
                                <div className='md:px-6'>
                                    <div className='grid gap-1 justify-items-center'>
                                        <img className='lg:w-12 md:w-12 sm:w-12' src={Github} alt='react'></img>
                                        <p className='text-center text-sm text-gray-500 font-bold '>Github</p>
                                    </div>
                                </div>
                                <div className='md:px-6'>
                                    <div className='grid gap-1 justify-items-center'>
                                        <img className='lg:w-12 md:w-12 sm:w-12' src={firebase} alt='react'></img>
                                        <p className='text-center text-sm text-gray-500 font-bold '>Firebase</p>
                                    </div>
                                </div>
                                <div className='md:px-6'>
                                    <div className='grid gap-1 justify-items-center'>
                                        <img className='lg:w-12 md:w-12 sm:w-12' src={figma} alt='react'></img>
                                        <p className='text-center text-sm text-gray-500 font-bold '>Figma</p>
                                    </div>
                                </div>
                                <div className='md:px-6'>
                                    <div className='grid gap-1 justify-items-center'>
                                        <img className='lg:w-12 md:w-12 sm:w-12' src={netlify} alt='react'></img>
                                        <p className='text-center text-sm text-gray-500 font-bold '>Netlify</p>
                                    </div>
                                </div>
                            </div>
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