"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {CiTwitter, CiFacebook} from 'react-icons/ci'
import {FaInstagram, FaWhatsapp} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'
import {PiFacebookLogoBold} from 'react-icons/pi'


const Footer = ()=>{
    return (
        <div className='md:w-[95%] w-[90%] p-3 md:relative absolute bottom-2'>
            <div className='flex justify-between py-4 items-center'>
                <div className=''>
                    <Image 
                        src={'/images/Artboard 1png.png'}
                        alt=''
                        width={40}
                        height={40}
                    />
                </div>
                <div className='flex items-center md:gap-8 gap-4'>
                    <Link href={"https://twitter.com/9rato1"} target='_blank'>
                        <FiTwitter fontSize={"1.5rem"} className="text-white" />
                    </Link>
                    <Link href={"https://web.facebook.com/profile.php?id=100094901029806"} target='_blank'>
                        <PiFacebookLogoBold  fontSize={"1.5rem"} className="text-white" />
                    </Link>
                    <Link href={"https://www.instagram.com/9rato1/"} target='_blank'>
                        <FaInstagram fontSize={"1.5rem"} className="text-white" />
                    </Link>
                    <Link href={"https://chat.whatsapp.com/HpVhtPTb1vyJ4zAd0eJqGI"} target='_blank'>
                        <FaWhatsapp fontSize={"1.5rem"} className="text-white" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;