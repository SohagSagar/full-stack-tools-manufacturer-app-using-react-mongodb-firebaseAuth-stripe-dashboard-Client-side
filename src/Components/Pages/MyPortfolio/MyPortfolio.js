import React from 'react';
import img from '../../../resources/600x600.jpg';
import SharedButton from '../../Shared/SharedButton';
import { SiJavascript } from 'react-icons/si';
import { RiReactjsLine } from 'react-icons/ri';
import { FaNodeJs } from 'react-icons/fa';

const MyPortfolio = () => {
    return (
        <div className='lg:px-24 bg-gray-300'>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col justify-center justify-between lg:flex-row-reverse">
                    <div className=" mask mask-hexagon">
                        <img src={img} className="w-[250px]" />
                    </div>

                    <div className=''>
                        <h1 className="text-5xl font-bold">Sohag Sagar</h1>
                        <p className='text-xl mt-2'>Jonior Software Engineer</p>
                        <p className='text-sm'>Email: sagorsohag29@gmail.com</p>
                        <p className='text-sm'>Contact:+88 01677836690</p>
                        <p className="py-4 ">I'm a software enngineer specialised in frontend and backend development for complex scalable application.I loved to work with node js and react js and most od the project is related with the above techonologies. </p>

                        <SharedButton>DOWNLOAD CV</SharedButton>
                    </div>
                </div>
            </div>

            <div className='lg:pl-0 pl-4'>
                <h1 className='text-4xl font-semibold pr-4' style={{ borderLeft: '5px solid grey' }}>What I do</h1>
                <p className='text-lg font-semibold'>I have done 10 mid level project with the follwing techonologies</p>
            </div>

            <div className='lg:pl-0 pl-4'>
                <h1 className='text-xl font-semibold mt-6' style={{ borderLeft: '3px solid grey' }}>My Projects</h1>
            </div>

            {/* projects */}
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-5 py-5 justify-items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-lg font-semibold">A TIRE MANUFACTURER COMPANY</h2>
                        <p className='text-justify'>This a project where a manufacturer company can up their manufactured product in this application where a buyer can order bulk amount of quantity</p>
                        <div className="card-actions  justify-center mt-2">
                            <a className='btn btn-sm btn-secondary rounded-full' href="https://americanaxle-tire-manufacturer.web.app/" target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>

                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-lg font-semibold">PHOTOGRAPHER PORTFOLIO</h2>
                        <p className='text-justify'>This project is related to a photographer who can show his works to his/her client and also showcase some of his packages to hire him</p>
                        <div className="card-actions  justify-center mt-2">
                            <a className='btn btn-sm btn-secondary rounded-full' href="https://john-photography.web.app/" target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>

                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-lg font-semibold">INVENTORY SOLUTIONS</h2>
                        <p className='text-justify'>This is warehouse inventory solutions related application where the client can shore their project in the warehouse</p>
                        <div className="card-actions  justify-center mt-2">
                            <a className='btn btn-sm btn-secondary rounded-full' href="https://tech-inventory-solution.web.app/" target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>

                    </div>
                </div>
            </div>

            {/* used technologies */}
            <div className='lg:pl-0 pl-4'>
                <h1 className='text-xl font-semibold mt-6' style={{ borderLeft: '3px solid grey' }}>Used Technologies</h1>
            </div>

            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-5 py-5 justify-items-center pb-10 '>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body rounded-lg drop-shadow-xl sm:w-sm">
                        <SiJavascript className='text-3xl text-secondary rounded' />
                        <h2 className="text-lg font-semibold">Vanila Javascript</h2>
                        <p className='text-justify'>JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.</p>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body  rounded-lg drop-shadow-xl">
                        <RiReactjsLine className='text-3xl text-blue-400 rounded' />
                        <h2 className="text-lg font-semibold">React</h2>
                        <p className='text-justify'>A JavaScript library for building user interfaces.React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body  rounded-lg drop-shadow-xl">
                        <FaNodeJs className='text-3xl text-green-500 rounded' />
                        <h2 className="text-lg font-semibold">Node js</h2>
                        <p className='text-justify'>Node.js is an open source server environment. Node.js allows you to run JavaScript on the server.It is a popular tool for almost any kind of project.Node.js is a packaged compilation of Google's V8 JavaScript engine, the libuv platform abstraction layer</p>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default MyPortfolio;