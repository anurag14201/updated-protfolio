import React, { useEffect, useRef } from 'react';
import email from "../img/Icons/gmail.png";
import contract from "../img/Icons/Contract.png";
import location from "../img/Icons/location.png";
import whatsapp from "../img/Icons/whatsappng.png";
import Aos from 'aos';
import "aos/dist/aos.css";
import emailjs from '@emailjs/browser';
import wtb from '../img/wtb.png';







const Contract = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ytwhevi', 'template_9497p6r', form.current, 'HawqV4M-YzP9-BfJl')
            .then((result) => {
                alert('Message sent successfully');
            }, (error) => {
                alert(error.message);
            });
        e.target.reset();
    };

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (

        <div>
            <h1 className='text-center m-8 pt-32 text-3xl font-bold text-gray-600 uppercase'>Contract</h1>
            <div className='h-full w-full' style={{
                backgroundImage: "url(" + wtb + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div>
                    <h1 className='text-center m-8 pt-32 text-3xl font-bold text-white uppercase'>
                        HIRE
                    </h1>
                </div >
                <div className='grid lg:col-6 md:col-5 justify-items-center' >
                    <form ref={form} onSubmit={sendEmail}>
                        <input className='border-2 m-2 w-96 rounded-lg' type="text" placeholder='Your name' required name='client-name' id='validationCustom01' />
                        <br></br>

                        <input className='border-2 m-2 w-96 rounded-lg' type="email" placeholder='Your E-mail' required name='email' id='validationCustom02' />
                        <br></br>

                        <textarea className='border-2 m-2 w-96 h-28 rounded-lg' placeholder='Type the message here' required name='message' id='validationCustom03'>
                        </textarea>
                        <br></br>
                        <div className='text-center'>
                            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white text-lg font-bold m-2 p-2 rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Send</button>
                        </div>
                    </form>
                </div>

            </div>

            <div className="flex flex-col w-full lg:flex-row m-8 pt-32">
                <div className="grid flex-grow h-full card  rounded-box place-items-center">
                    <div className="card card-compact lg:w-96 md:w-96 sm:w-full bg-base-100 shadow-xl m-4" data-aos="zoom-out-down">
                        <figure><img className='w-24' src={email} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="text-center font-medium text-xl">Email</h2>
                            <div className='text-center'>
                                <p>arag3090@gmail.com</p>
                                <p>assig173@gmail.com</p>
                            </div>

                        </div>
                    </div>
                    <div className="card card-compact lg:w-96 md:w-96 sm:w-full bg-base-100 shadow-xl m-4 " data-aos="zoom-out-up">
                        <figure><img className='w-24' src={location} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="text-center font-medium text-xl">Location</h2>
                            <p className='text-center'>Ghulshan-2,Dhaka,Bangladesh</p>

                        </div>
                    </div>

                </div>
                <div className="divider lg:divider-horizontal">OR</div>

                <div className="grid flex-grow h-full card  rounded-box place-items-center">
                    <div className="card card-compact lg:w-96 md:w-96 sm:w-full bg-base-100 shadow-xl m-4" data-aos="zoom-out-right">
                        <figure><img className='w-24' src={contract} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="text-center font-medium text-xl">Contact</h2>
                            <p className='text-center'>Send me a mail</p>

                        </div>
                    </div>
                    <div className="card card-compact lg:w-96 md:w-96 sm:w-full bg-base-100 shadow-xl m-4" data-aos="zoom-out-left">
                        <figure><img className='w-24' src={whatsapp} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="text-center font-medium text-xl">Whatsapp</h2>
                            <p className='text-center'>Send me a mail</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contract; 