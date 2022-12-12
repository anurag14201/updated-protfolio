import React from 'react';

const MyWork = () => {
    return (
        <div>
            <div>
                <h1 className='text-center m-8 pt-32 text-3xl font-bold uppercase'>My Work</h1>
            </div>
            <div className='grid'>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyWork;