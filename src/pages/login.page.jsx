import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import PurpleLogo from '../images/purple-logo.png';
import PurpleLogoWhite from '../images/purple-logo.jpg';

import { FiUser, FiUnlock, FiLogIn } from 'react-icons/fi'

function Login() {

    const [remember, setRemember] = useState(false);

    return (
        <>
            <div className="flex h-screen w-screen bg-gray-50">
                <div className="lg:w-2/3 w-11/12 mx-auto md:mt-8 p-5 md:p-0 py-10" style={{ height: '90vh' }}>
                    <div className="inline-flex w-full h-full">
                        <div id="leftCard" className="z-10 w-1/3 bg-purple-50 p-5 rounded-xl -mr-2 md:block hidden">
                            <div className="w-full mt-40 text-center">

                                <p className="font-serif text-2xl">
                                    Welcome To
                                </p>
                                <img src={PurpleLogo} alt="Logo" className="w-32 h-32 mx-auto" />
                                <p className="text-sm w-2/3 text-center mx-auto">
                                    2233 Hartway Street Viborg,
                                    New York
                                </p>

                            </div>
                        </div>
                        <div className="md:w-2/3 w-full rounded-r-xl bg-white p-10">
                            <img src={PurpleLogoWhite} alt="" className="w-32 h-32 mx-auto" />
                            <p className="text-center font-sans text-2xl">
                                Cambrian School and College
                            </p>
                            <br />
                            <div className="md:px-14 py-5">
                                <div className="inline-flex w-full border border-gray-400 text-gray-400 rounded-2xl bg-white px-3">
                                    <div className="md:w-1/12 w-1/6 text-xl px-2 py-3 text-purple-700">
                                        <FiUser />
                                    </div>
                                    <input type="text" className="appearance-none w-11/12 px-5 font-light focus:outline-none text-purple-700" placeholder="Username" />
                                </div>
                                <br />
                                <br />
                                <div className="inline-flex w-full border border-gray-400 text-gray-400 rounded-2xl bg-white px-3">
                                    <div className="md:w-1/12 w-1/6 text-xl px-2 py-3 text-purple-700">
                                        <FiUnlock />
                                    </div>
                                    <input type="password" className="appearance-none w-11/12 px-5 font-light focus:outline-none text-purple-700" placeholder="Password" />
                                </div>
                                <br />
                                <br />
                                <div className="inline-flex w-full">
                                    <p className="flex w-1/2 text-left text-sm text-gray-400 font-bold">
                                        <div id="rememberOutline" className="w-6 h-6 border bg-white transition duration-1000 rounded" style={{ padding: '0.32rem' }} onClick={() => {
                                            let rememberOutline = document.querySelector('#rememberOutline');
                                            let rememberId = document.querySelector('#remember');

                                            if (!remember) {
                                                rememberOutline.classList.add('border-purple-700');
                                                rememberId.classList.remove('hidden');
                                                setRemember(true);
                                            } else {
                                                rememberOutline.classList.remove('border-purple-700');
                                                rememberId.classList.add('hidden');
                                                setRemember(false)
                                            }
                                        }}>
                                            <div id="remember" className="w-3 h-3 bg-purple-700 transition duration-1000 hidden"></div>
                                        </div>
                                        <span className="px-2 p-1">Remember</span>
                                    </p>
                                    <p className="w-1/2 text-right text-sm text-gray-400">Forgot Password</p>
                                </div>
                                <br />
                                <br />
                                <Link to="/dashboard" className="inline-flex w-full bg-purple-600 p-3 rounded-xl text-white hover:bg-purple-700 justify-center">
                                    <span className="px-2 p-1">
                                        <FiLogIn />
                                    </span>
                                    Log In
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Login;