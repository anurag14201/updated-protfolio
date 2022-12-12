import React from 'react';
import MyWork from './MyWork';
// import ReactImg from '../img/physics.png';

const Skill = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4'>
                <div className="card w-full bg-base-100">
                    <div className="card-body">
                        <h2 className="card-title">DONT BE A STRANGER</h2>
                    </div>
                </div>
                <div className="card w-full bg-base-100">
                    <div className="card-body">
                        <h2 className="card-title uppercase text-end">Do you have any ideas,Then knock me amd Tell me about it.</h2>
                    </div>
                </div>
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