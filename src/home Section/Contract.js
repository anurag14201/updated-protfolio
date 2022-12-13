import React, { useEffect } from 'react';
import email from "../img/Icons/gmail.png";
import contract from "../img/Icons/Contract.png";
import location from "../img/Icons/location.png";
import whatsapp from "../img/Icons/whatsappng.png";
import Aos from 'aos';
import "aos/dist/aos.css";





const Contract = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div>
            <h1 className='text-center m-8 pt-32 text-3xl font-bold text-gray-600 uppercase'>Contract</h1>
            <div className="flex flex-col w-full lg:flex-row m-8 pt-32">
                <div className="grid flex-grow h-full card  rounded-box place-items-center">
                    <div className="card card-compact w-96 bg-base-100 shadow-xl m-4" data-aos="zoom-out-down">
                        <figure><img className='w-24' src={email} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Email!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-primary">Show ME</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl m-4 " data-aos="zoom-out-up">
                        <figure><img className='w-24' src={location} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Location</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-primary">Show ME</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="divider lg:divider-horizontal">OR</div>

                <div className="grid flex-grow h-full card  rounded-box place-items-center">
                    <div className="card card-compact w-96 bg-base-100 shadow-xl m-4" data-aos="zoom-out-right">
                        <figure><img className='w-24' src={contract} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Contract</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl m-4" data-aos="zoom-out-left">
                        <figure><img className='w-24' src={whatsapp} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Whatsapp</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contract; 