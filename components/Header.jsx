"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import {IoMenu, IoClose} from 'react-icons/io5'



const Header = ()=>{
    const [isNav, setIsNav] = useState(false)
    return (
        <>
            <div className='flex items-center justify-between w-[95%] p-3'>
                <div className='text-white flex items-center font-bold'>
                    <Image src={'/images/Artboard 1png.png'} alt='' width={50} height={55} />
                    <span className='-m-2 text-[25px]'>rato</span>
                </div>
                <div className='md:flex hidden items-center gap-10 md:text-[14px] text-[12px] text-white font-semibold'>
                    <div className='cursor-pointer'>Pricing</div>
                    <div className='cursor-pointer'>About</div>
                    <div className='cursor-pointer'>Contact</div>
                </div>
                <div className='md:hidden flex'>
                    <IoMenu onClick={()=> setIsNav((prev)=> !prev)} className='text-white text-[2rem] cursor-pointer' />
                </div>
            </div>
            {isNav == true && <MobileNavigation setIsNav={setIsNav} />}
        </>
    )
}

export default Header;


function MobileNavigation({setIsNav}){
    return (
        <div className='backdrop-blur-sm h-[100vh] w-full fixed bg-[rgba(0,0,0,0.58)] top-0 p-6 text-white font-semibold flex flex-col gap-6'>
            <div className='flex justify-between items-center'>
                <div className='text-white flex items-center font-bold'>
                    <Image src={'/images/Artboard 1png.png'} alt='' width={50} height={55} />
                    <span className='-m-2 text-[25px]'>rato</span>
                </div>    
                <IoClose onClick={()=> setIsNav((prev)=> !prev)} fontSize={"1.5rem"} className='text-white cursor-pointer' />
            </div>
            <div className='flex flex-col items-center text-center text-white text-[20px] gap-6 mt-[3rem]'>
                <Link href={"#"}>
                    Pricing
                </Link>
                <Link href={"#"}>
                    About
                </Link>
                <Link href={"#"}>
                    Contact
                </Link>
            </div>
        </div>
    )
}