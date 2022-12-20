import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
import work1 from "../img/Screenshot 2022-12-12 153819.png";
import work2 from "../img/Screenshot 2022-12-12 155125.png";
import work3 from "../img/Food.png";
import work4 from "../img/football.png";
import work5 from "../img/all in one.png";
import work6 from "../img/weddd2022-12-12 161614.png";
import work7 from "../img/online tem.png";
import work8 from "../img/cal.png";
import work9 from "../img/pin.png";
import work10 from "../img/panda.png";
import work11 from "../img/insta.png";
import work12 from "../img/world.png";
import travel from "../img/travel.png";
import Contract from './Contract';



const MyWork = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div>
            <div>
                <h1 className='text-center m-8 pt-32 text-3xl font-bold text-gray-600 uppercase'>Featured works</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4'>
                <div className="card card-compact w-full bg-base-100 shadow-xl" data-aos="fade-right">
                    <figure><img src={work1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">School Para Puja </h2>
                        <p>
                            <button className="btn-info rounded w-16">JavaScript</button>
                            <button className="btn-info rounded w-16">JavaScript</button>
                        </p>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl" data-aos="fade-right">
                    <figure><img src={travel} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Tour Travel</h2>
                        <p>
                            <button className="btn-info rounded w-16">JavaScript</button>
                            <button className="btn-info rounded w-16">JavaScript</button>
                        </p>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl  " data-aos="fade-up">
                    <figure><img src={work2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Doctor's In Town </h2>
                        <p><button className="btn-info rounded w-16">JavaScript</button>
                        </p>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl" data-aos="fade-left">
                    <figure><img src={work3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">School Para Puja </h2>
                        <p><button className="btn-info rounded w-16">JavaScript</button></p>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl" data-aos="fade-right">
                    <figure><img src={work4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">School Para Puja </h2>
                        <p><button className="btn-info rounded w-16">JavaScript</button></p>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl" data-aos="fade-up">
                    <figure><img src={work5} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">School Para Puja </h2>
                        <p><button className="btn-info rounded w-16">JavaScript</button></p>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl" data-aos="fade-left">
                    <figure><img src={work6} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">School Para Puja </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl" data-aos="fade-right">
                    <figure><img src={work7} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">School Para Puja </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl " data-aos="fade-up">
                    <figure><img src={work8} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">School Para Puja </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl" data-aos="fade-left">
                    <figure><img src={work9} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">School Para Puja </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl" data-aos="fade-right">
                    <figure><img src={work10} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">School Para Puja </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl" data-aos="fade-up">
                    <figure><img src={work11} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">School Para Puja </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl" data-aos="fade-left">
                    <figure><img src={work12} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">School Para Puja </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>
            <div>
                <Contract></Contract>
            </div>
        </div>
    );
};

export default MyWork;