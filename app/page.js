"use client";

import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
        <Header />
        <div className='w-[95%] p-3 md:mt-[0.8rem] mt-[4rem] flex items-center'>
          <div className='flex flex-col md:gap-2 gap-6 flex-[3]'>
            <h1 className='text-white md:text-[50px] text-[40px] font-bold lg:w-[80%] w-full md:leading-[70px] leading-[50px]'>We Guarantee Seamless Trading of Items</h1>
            <p className='lg:w-[70%] w-full md:text-[14px] text-[12px] text-[#DDE3E9] font-normal'>Now you can buy, sell, swap and bid on used and brand new items on our platforms. You can now upload your products and get buyers instantly on 9rato.</p>
            <div className='flex md:flex-row flex-col md:items-center mt-3 gap-2 lg:w-[60%] w-full'>
              <input type='email' className='p-4 flex-[3] rounded-[14px] bg-white text-[#000] placeholder:text-[14px]' placeholder='Enter your email address' />
              <button className='flex-[1] p-4 text-[#012D28] md:text-[14px] text-[13px] font-semibold bg-[#FDCB00] rounded-[14px]'>Join waitlist</button>
            </div>
          </div>
          <div className='flex-[2] lg:flex hidden'>
            <Image src={"/images/buy.png"} alt="" width={456} height={456} />
          </div>
        </div>
        <Footer />
    </main>
  )
}
