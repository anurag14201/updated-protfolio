import React from 'react';
import MyWork from './MyWork';
// import ReactImg from '../img/physics.png';

const Skill = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <h1> DONT BE A STRANGER</h1>
                <h1>Do you have any idea,Then knock me about it.</h1>
            </div>



            <div>
                <div className='flex '>
                    <div className="card w-full bg-base-100">
                        <div className="card-body">
                            <h2 className="text-center text-xl font-bold">Front-End</h2>
                            {/* <img src={ReactImg} alt='react'>react</img> */}
                            <p>React</p>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100">
                        <div className="card-body">
                            <h2 className="text-center text-xl font-bold">Back-End</h2>
                            {/* <img src={ReactImg} alt='react'>react</img> */}
                            <p>React</p>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100">
                        <div className="card-body">
                            <h2 className="text-center text-xl font-bold">Soft-Skills</h2>
                            {/* <img src={ReactImg} alt='react'>react</img> */}
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