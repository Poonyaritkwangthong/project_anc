import React from 'react';
import Navbar from '@/app/components/navbar';
import BarDashBoard from '@/app/components/bar';


export default function page() {
    return (
        <div>
            <div>
                <Navbar></Navbar>
                Dashboard
                <a href="/home" className='text-black'>home</a>
                <div className='flex justify-end'>
                    <div className='w-1/2 '>
                        <BarDashBoard></BarDashBoard>
                    </div>
                </div>
            </div>
        </div>
    )
}
