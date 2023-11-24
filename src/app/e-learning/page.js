'use client'
import React from 'react'

import { academy } from '@/data'
import Navbar from '../components/navbar'
import Image from 'next/image'
import Card from '../components/card'
import Footer from '../components/footer'

export default function ELearning() {
  return (
    <>
         <Navbar auth={true}/>
        <div className="w-1440 h-432 bg-primer4 flex items-center justify-between gap-6 px-[128px] py-[56px]">
            <Image src={"/assets/ilustration/elearning spft skills.svg"} 
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: 'auto', height: '320px' }} alt={""} loading="eager"/>         
            
            <div className=" text-primer1 flex flex-col gap-4">
                <h2 className="text-[42px] font-bold font-roboto">Soft Skill Development</h2>
                <p className="text-[18px]">Soft skill development helps you acquire non-technical skills such as communication, leadership, and teamwork. It enhances your effectiveness in the workplace and aids in achieving career success. Soft skills also enable you to excel in overcoming challenges and collaborate effectively with colleagues.</p>
            </div>
        </div>

        <h1 className="text-primer1 text-[32px] font-bold text-center mx-[128px] mt-[56px]">Unlock your full potential and enhance your career prospects with our comprehensive Soft Skills Training Package. Invest in your personal and professional growth today!</h1>

        <div className='px-[128px] py-[56px] flex flex-wrap gap-10 justify-between'>
              {academy.map((academi) => (
    <Card isPaid={false} isPass={false} inProcess={false} header={academi.title} modules={academi.modules} slug={academi.slug} price={academi.price} key={academi.slug} src={academi.imgLink}/>
  ))}
        </div>
    <Footer/>
    </>
  )
}
