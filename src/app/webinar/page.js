'use client'
import React from 'react'
import Image from 'next/image'
import Navbar from '../components/navbar'
import { Icon } from '@iconify/react'
import Footer from '../components/footer'
import { webinar } from '@/data'
import WebinarCard from '../components/webinarCard'

export default function WebinarPage () {
    return (
    <>
    <Navbar auth={true}/>
        <div className="w-1440 h-432 bg-primer4 flex items-center justify-between gap-6 px-[128px] py-[56px]">
            <Image src={"/assets/ilustration/Webinar-amico.svg"} 
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: 'auto', height: '320px' }} alt={""} loading="eager"/>         
            
            <div className=" text-primer1 flex flex-col gap-4">
                <h2 className="text-[42px] font-bold font-roboto">Career Webinars</h2>
                <p className="text-[18px]">Career webinars provide you with access to insights and knowledge from experts in various fields. You can deepen your understanding of industry trends, job search strategies, and career development. Webinars offer the opportunity to learn from the best without leaving your home, making professional development more convenient.</p>
            </div>
        </div>

        <h1 className="text-primer1 text-[32px] font-bold text-center mx-[128px] mt-[56px]">Unlock your path to career success through our enriching Career Webinar package - your gateway to invaluable insights and professional growth.</h1>

        <div className='px-[128px] py-[56px] relative flex flex-wrap gap-10 justify-between'>
            {
                webinar.map(web => 
                <WebinarCard key={web.slug} img={{src: web.imgLink, alt: web.slug}} datetime={web.datetime} header={web.title} price={web.price} slug={web.slug}/>
                    )
            }
        </div>
    <Footer/>
    </>
  )
}