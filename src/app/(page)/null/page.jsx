"use client";
import { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div>
            <div className='flex flex-wrap justify-between items-center mx-auto p-4 bg-white'>
                <div className='flex gap-[1rem] items-center'>
                    <div>
                        {/* Drawer init and show */}
                        <div className='text-center'>
                            <button onClick={toggleDropdown} className='text-[#20a68a] text-3xl'>
                                <IoIosMenu className='' />
                            </button>
                        </div>

                        {/* Drawer component */}
                        <div
                            id='drawer-navigation'
                            className={`fixed top-0 left-0 z-40 w-[30rem] h-screen p-4 overflow-y-auto transition-transform transform ${isDropdownOpen ? 'translate-x-0' : '-translate-x-full'} bg-white dark:bg-gray-800 mt-[6rem]`}
                            tabIndex='-1'
                            aria-labelledby='drawer-navigation-label'
                        >
                            <h5 id='drawer-navigation-label' className='text-base font-semibold text-gray-500 uppercase dark:text-gray-400'>Menu</h5>
                            <button
                                type='button'
                                onClick={toggleDropdown}
                                aria-controls='drawer-navigation'
                                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                                <svg
                                    aria-hidden='true'
                                    className='w-5 h-5'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                                        clipRule='evenodd'
                                    ></path>
                                </svg>
                                <span className='sr-only'>Close menu</span>
                            </button>
                            <div className='py-4 overflow-y-auto'>
                                <ul className='space-y-2 font-medium'>
                                    {/* Sidebar menu items go here */}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <a href='https://flowbite.com' className='flex items-center space-x-3 rtl:space-x-reverse'>
                        <img src='https://www.ppkhosp.go.th/images/logoppk.png' className='h-14' alt='Flowbite Logo' />
                        <span className='self-center text-2xl whitespace-nowrap text-[#20a68a]'>PPK : พระปกเกล้า</span>
                    </a>
                </div>
                <div className='flex items-center space-x-6 rtl:space-x-reverse'>
                    <a href='tel:5541251234' className='text-sm text-[#20a68a] hover:underline'>(555) 412-1234</a>
                    <a href='#' className='text-xl text-blue-600 dark:text-blue-500 hover:underline'>Logout</a>
                </div>
            </div>
        </div>
    );
}
