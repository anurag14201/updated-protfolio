import React from 'react';
import ReactImg from '../../img/react-1.svg';

const Skill = () => {
    return (
        <div>
            <h1> DONT BE A STRANGER</h1>
            <div>
                <div className="card w-full bg-base-100">
                    <div className="card-body">
                        <h2 className="text-center text-xl font-bold">Front-End</h2>
                        <p>React<img src={ReactImg} alt='react'>react</img> </p>
                        <p>React</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;