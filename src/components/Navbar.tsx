import { useState } from 'react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="sticky w-screen top-0 bg-white shadow dark:bg-gray-800 h-auto">
            <div className="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
                <div className="flex items-center justify-between">
                    <a href="#sobre-mim">
                        <h1 className='text-2xl text-gray-700 transition-colors duration-300 transform dark:text-gray-200 lg:mx-4 lg:my-0'>Christian Luiz</h1>
                    </a>

                    <div className="flex lg:hidden">
                        <button onClick={toggleMenu} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            {!isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}>
                    <div className="flex flex-col lg:flex-row lg:mx-6">
                        <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0" href="#sobre-mim">Sobre Mim</a>
                        <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0" href="#projetos">Projetos</a>
                        <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0" href="#experiencia">Experiencia</a>
                        <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0" href="#conhecimentos">Conhecimentos</a>
                        <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0" href="#oque-estou-aprendendo">Oque estou aprendendo?</a>
                    </div>
                </div>
            </div>

        </nav>

    );
};