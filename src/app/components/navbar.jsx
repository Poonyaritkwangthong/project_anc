'use client';
import { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
    const toggleDropdown1 = () => {
        setIsDropdownOpen1(!isDropdownOpen1);
    };
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const toggleDropdown2 = () => {
        setIsDropdownOpen2(!isDropdownOpen2);
    };
    const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
    const toggleDropdown3 = () => {
        setIsDropdownOpen3(!isDropdownOpen3);
    };
    const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
    const toggleDropdown4 = () => {
        setIsDropdownOpen4(!isDropdownOpen4);
    };
    const [isDropdownOpen5, setIsDropdownOpen5] = useState(false);
    const toggleDropdown5 = () => {
        setIsDropdownOpen5(!isDropdownOpen5);
    };
    const [isDropdownOpen6, setIsDropdownOpen6] = useState(false);
    const toggleDropdown6 = () => {
        setIsDropdownOpen6(!isDropdownOpen6);
    };
    const [isDropdownOpen7, setIsDropdownOpen7] = useState(false);
    const toggleDropdown7 = () => {
        setIsDropdownOpen7(!isDropdownOpen7);
    };
    const [isDropdownOpen8, setIsDropdownOpen8] = useState(false);
    const toggleDropdown8 = () => {
        setIsDropdownOpen8(!isDropdownOpen8);
    };
    const [isDropdownOpen9, setIsDropdownOpen9] = useState(false);
    const toggleDropdown9 = () => {
        setIsDropdownOpen9(!isDropdownOpen9);
    };
    const [isDropdownOpen10, setIsDropdownOpen10] = useState(false);
    const toggleDropdown10 = () => {
        setIsDropdownOpen10(!isDropdownOpen10);
    };

    return (
        <div>
            <div className={`flex flex-wrap justify-between items-center mx-auto p-4 bg-white border-b border-[#20a68a]`}>
                <div className='flex gap-[1rem] items-center'>
                    <div>
                        {/* Drawer init and show */}
                        <div className='text-center'>
                            <button onClick={toggleDropdown} className='text-[#20a68a] text-3xl'>
                                <IoIosMenu className='' />
                            </button>
                        </div>

                        {/* Drawer component */}
                        <div id='drawer-navigation' className={`fixed top-0 left-0 z-40 w-[40rem] h-screen p-4 overflow-y-auto transition-transform transform ${isDropdownOpen ? 'translate-x-0' : '-translate-x-full'} bg-[#20a68a] mt-`} tabIndex='-1' aria-labelledby='drawer-navigation-label'>
                            <h5 id='drawer-navigation-label' className='text-base font-semibold text-white'>Menu</h5>
                            <button type='button' onClick={toggleDropdown} aria-controls='drawer-navigation' className='text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'>
                                <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd'></path></svg>
                                <span className='sr-only'>Close menu</span>
                            </button>
                            <div className='py-4 overflow-y-auto'>
                                <ul className='space-y-2 font-medium'>
                                    {/* Sidebar menu items go here */}
                                    <li>
                                        <a href='/dashboard' className='flex items-center p-2 text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                                           
                                            <span className='ms-3'>Dashboard</span>
                                        </a>
                                    </li>

                                    <div>

                                        <button type='button' onClick={toggleDropdown1} className='flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                                            <span className='flex-1 ms-3 text-left rtl:text-right whitespace-nowrap'>1. หมวด: การฝากครรภ์ (ANC)</span>
                                            <svg className='w-3 h-3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
                                                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
                                            </svg>
                                        </button>

                                        {isDropdownOpen1 && (
                                            <ul id='dropdown-example' className='p-2 space-y-2 bg-white/20 ml-10 rounded-lg mt-2' aria-labelledby="dropdownDefaultButton">
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>1.1 การทดสอบการตั้งครรภ์ (Pregnancy test)</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>1.2 ค่าบริการดูแลการฝากครรภ์</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>1.3 ค่าตรวจทางห้องปฏิบัติการ (ครบทุกรายการ)</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>1.4 ค่าตรวจทางห้องปฏิบัติการ (ตรวจ VDRL และ HIV)</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>1.5 บริการตรวจอัลตร้าซาวด์</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>1.6 บริการตรวจสุขภาพช่องปากและบริการขัดทำความสะอาดฟัน</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>1.7 การตรวจทางห้องปฏิบัติการเพื่อวินิจฉัยยืนยัน สำหรับหญิงตั้งครรภ์ Hb Typing</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>1.8 Alpha-thalassemia 1 (PCR)</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>1.9 Beta-thalassemia (Mutation analysis)</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>1.10 การตรวจทางห้องปฏิบัติการเพื่อวินิจฉัยยืนยัน สามีหรือคู่ของหญิงตั้งครรภ์ Hb Typing</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>1.11 Alpha-thalassemia 1 (PCR)</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>1.12 Beta-thalassemia (Mutation analysis)</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>1.13 การทำหัตถการเพื่อวินิจฉัยทารกในครรภ์</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>1.14 การตรวจสิ่งส่งตรวจเพื่อวินิจฉัยทารกในครรภ์ DNA Based Analysis</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>1.15 การตรวจสิ่งส่งตรวจเพื่อวินิจฉัยทารกในครรภ์ Hemoglobin typing</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>1.16 การเจาะเลือดปั่นซีรั่ม</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>1.17 ค่าบริการตรวจ Quadruple test และการจัดบริการไปรับเลือดเพื่อตรวจทางห้องปฏิบัติการ</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>1.18 การทำหัตถการเพื่อตรวจวินิจฉัยทารกในครรภ์</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>1.19 บริการตรวจทางห้องปฏิบัติการในการตรวจยืนยันโครโมโซมทารกในครรภ์</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>1.20 การคัดกรองธาลัสซีเมีย ค่าตรวจทางห้องปฏิบัติการ CBC + MCV และ/หรือ DCIP/Hb E screening</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>1.21 ค่าตรวจ VDRL การคัดกรองซิฟิลิส (สามี)</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>1.22 ค่าตรวจ TPHA การคัดกรองซิฟิลิส (สามี)</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>1.23 การยุติการตั้งครรภ์</a>
                                                </li>
                                            </ul>
                                        )}
                                    </div>

                                    <div>

                                        <button type='button' onClick={toggleDropdown2} className='flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                                            <span className='flex-1 ms-3 text-left rtl:text-right whitespace-nowrap'>2. หมวด: การตรวจหลังคลอด</span>
                                            <svg className='w-3 h-3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
                                                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
                                            </svg>
                                        </button>

                                        {isDropdownOpen2 && (
                                            <ul id='dropdown-example' className='p-2 space-y-2 bg-white/20 ml-10 rounded-lg mt-2' aria-labelledby="dropdownDefaultButton">
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>2.1 การตรวจหลังคลอดไม่เกิน 8-15 วัน</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>2.2การตรวจหลังคลอดครั้งที่่ ระหว่างวันที่ 16 - 42 วัน หลังคลอด</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>2.3การตรวจหลังคลอดครั้งที่่ ระหว่างวันที่ 16 - 42 วัน หลังคลอด</a>
                                                </li>
                                            </ul>
                                        )}
                                    </div>

                                    <div>

                                        <button type='button' onClick={toggleDropdown3} className='flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                                    
                                            <span className='flex-1 ms-3 text-left rtl:text-right whitespace-nowrap'>3. หมวด: บริการคัดกรองรอยโรคเสี่ยงมะเร็งและมะเร็งช่องปาก</span>
                                            <svg className='w-3 h-3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
                                                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
                                            </svg>
                                        </button>

                                        {isDropdownOpen3 && (
                                            <ul id='dropdown-example' className='p-2 space-y-2 bg-white/20 ml-10 rounded-lg mt-2' aria-labelledby="dropdownDefaultButton">
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>3.1 ค่าบริการตัดและตรวจชิ้นเนื้อ ซึ่งประกอบด้วยค่า biopsy และค่าตรวจทางพยาธิวิทยา</a>
                                                </li>
                                            </ul>
                                        )}
                                    </div>

                                    <div>

                                        <button type='button' onClick={toggleDropdown4} className='flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                                          
                                            <span className='flex-1 ms-3 text-left rtl:text-right whitespace-nowrap'>4. หมวด: การตรวจคัดกรองมะเร็งสตรี</span>
                                            <svg className='w-3 h-3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
                                                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
                                            </svg>
                                        </button>

                                        {isDropdownOpen4 && (
                                            <ul id='dropdown-example' className='p-2 space-y-2 bg-white/20 ml-10 rounded-lg mt-2' aria-labelledby="dropdownDefaultButton">
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>4.1 การตรวจคัดกรองมะเร็งปากมดลูกโดยวิธี Pap Smear</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>4.2 การตรวจคัดกรองมะเร็งปากมดลูกโดยวิธี VIA</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>4.3 ค่าบริการเก็บตัวอย่าง</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>4.4 การตรวจคัดกรองมะเร็งปากมดลูกโดยวิธี HPV DNA Test</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>4.5 บริการตรวจทางเซลล์วิทยาดGวยวิธี Liquid based cytology</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>4.6 ตรวจยืนยันด้วยวิธี Colposcope และ/หรือ ตัดชิ้นเนื้อ (Biopsy)</a>
                                                </li>
                                            </ul>
                                        )}
                                    </div>

                                    <div>

                                        <button type='button' onClick={toggleDropdown5} className='flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                                            
                                            <span className='flex-1 ms-3 text-left rtl:text-right whitespace-nowrap'>5. หมวด: บริการคัดกรองโรคมะเร็งลำไส้ใหญ่ ด้วยการตรวจอุจจาระ วิธี Fit Tes</span>
                                            <svg className='w-3 h-3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
                                                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
                                            </svg>
                                        </button>

                                        {isDropdownOpen5 && (
                                            <ul id='dropdown-example' className='p-2 space-y-2 bg-white/20 ml-10 rounded-lg mt-2' aria-labelledby="dropdownDefaultButton">
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>5.1 บริการคัดกรองโรคมะเร็งลำไส้ใหญ่ ดGวยการตรวจอุจจาระ วิธี Fit Test</a>
                                                </li>
                                            </ul>
                                        )}
                                    </div>

                                    <div>

                                        <button type='button' onClick={toggleDropdown6} className='flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                                           
                                            <span className='flex-1 ms-3 text-left rtl:text-right whitespace-nowrap'>6. หมวด: ทันตกรรมส่งเสริมป้องกัน ในหน่วยบริการ</span>
                                            <svg className='w-3 h-3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
                                                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
                                            </svg>
                                        </button>

                                        {isDropdownOpen6 && (
                                            <ul id='dropdown-example' className='p-2 space-y-2 bg-white/20 ml-10 rounded-lg mt-2' aria-labelledby="dropdownDefaultButton">
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>6.1 บริการเคลือบฟลูออไรด์ชนิดเข้มข้นสูงเฉพาะที่ (กลุ่มเสี่ยง)</a>
                                                </li>
                                            </ul>
                                        )}
                                    </div>

                                    <div>

                                        <button type='button' onClick={toggleDropdown7} className='flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                                           
                                            <span className='flex-1 ms-3 text-left rtl:text-right whitespace-nowrap'>7. หมวด: การคัดกรองภาวะซีด</span>
                                            <svg className='w-3 h-3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
                                                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
                                            </svg>
                                        </button>

                                        {isDropdownOpen7 && (
                                            <ul id='dropdown-example' className='p-2 space-y-2 bg-white/20 ml-10 rounded-lg mt-2' aria-labelledby="dropdownDefaultButton">
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>7.1 ตรวจนับเม็ดเลือดอย่างสมบูรณ์ (CBC)</a>
                                                </li>
                                            </ul>
                                        )}
                                    </div>

                                    <div>

                                        <button type='button' onClick={toggleDropdown8} className='flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                                           
                                            <span className='flex-1 ms-3 text-left rtl:text-right whitespace-nowrap'>8. หมวด: บริการอนามัยเจริญพันธ์</span>
                                            <svg className='w-3 h-3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
                                                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
                                            </svg>
                                        </button>

                                        {isDropdownOpen8 && (
                                            <ul id='dropdown-example' className='p-2 space-y-2 bg-white/20 ml-10 rounded-lg mt-2' aria-labelledby="dropdownDefaultButton">
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>8.1 ยาเม็ดคุมกำเนิด (Lynestrenol 0.5 mg.)</a>
                                                </li>
                                            </ul>
                                        )}
                                    </div>

                                    <div>

                                        <button type='button' onClick={toggleDropdown9} className='flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                                            
                                            <span className='flex-1 ms-3 text-left rtl:text-right whitespace-nowrap'>9. หมวด: การตรวจคัดกรองวินิจฉัยให้แว่นตาสำหรับเด็ก</span>
                                            <svg className='w-3 h-3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
                                                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
                                            </svg>
                                        </button>

                                        {isDropdownOpen9 && (
                                            <ul id='dropdown-example' className='p-2 space-y-2 bg-white/20 ml-10 rounded-lg mt-2' aria-labelledby="dropdownDefaultButton">
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>9.1 แว่นตาเด็ก</a>
                                                </li>
                                            </ul>
                                        )}
                                    </div>

                                    <div>

                                        <button type='button' onClick={toggleDropdown10} className='flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                                            
                                            <span className='flex-1 ms-3 text-left rtl:text-right whitespace-nowrap'>10. หมวด: บริการคัดกรองและประเมินปัจจัยเสี่ยงต่อสุขภาพกาย/สุขภาพจิต</span>
                                            <svg className='w-3 h-3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
                                                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
                                            </svg>
                                        </button>

                                        {isDropdownOpen10 && (
                                            <ul id='dropdown-example' className='p-2 space-y-2 bg-white/20 ml-10 rounded-lg mt-2' aria-labelledby="dropdownDefaultButton">
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>10.1 ชุดบริการตรวจและประเมินความดันโลหิต ดัชนีมวลกาย เส้นรอบเอว ความเครียดและซึมเศร้า ความเสี่ยงต่อการใช้บุหรี่
                                                    แอลกอฮอล์และสารเสพติด และการให้คำปรึกษาแนะนำ</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>10.2 ชุดบริการประเมินและคัดกรองภาวะเสี่ยงต่อโรคเบาหวาน ความดันโลหิตสูง ปัจจัยเสี่ยงต่อการเกิดโรคโรคหัวใจและหลอดเลือด
                                                        ความเครียดและซึมเศร้า ความเสี่ยงต่อการใช้บุหรี่ แอลกอฮอล์และสารเสพติด และการให้คำปรึกษาแนะนำ</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>10.3 ค่าบริการเจาะเลือดจากหลอดเลือดดำ ภายหลังอดอาหาร 8 ชั่วโมง ส่งตรวจวัดระดับน้ำตาล (FPG)</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-2 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>10.4 ค่าบริการเจาะเลือดจากหลอดเลือดดำ ภายหลังอดอาหาร 8 ชั่วโมง ส่งตรวจ Total Cholesterol และ HDL</a>
                                                </li>
                                            </ul>
                                        )}
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <a href='https://flowbite.com' className='flex items-center space-x-3 rtl:space-x-reverse'>
                        <img src='https://www.ppkhosp.go.th/images/logoppk.png' className='h-14' alt='Flowbite Logo' />
                        <span className='self-center text-2xl whitespace-nowrap text-[#20a68a]'>PPK : รพ.พระปกเกล้า</span>
                    </a>
                </div>
                <div className='flex items-center space-x-6 rtl:space-x-reverse'>
                    <a href='/login' className='text-xl text-[#20a68a] border border-[#20a68a] rounded-lg p-2 hover:bg-[#20a68a] hover:text-white'>Logout</a>
                </div>
            </div>
        </div>
    )
}
