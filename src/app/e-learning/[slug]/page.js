'use client'
import Button from "@/app/components/btn"
import Footer from "@/app/components/footer"
import Navbar from "@/app/components/navbar"
import { academy } from "@/data"
import { Icon } from "@iconify/react"
import Image from "next/image"
import React from "react"

export default function Detail({params}) {
    const slug = params.slug;
    const academyClass = academy.find((academi) => academi.slug === slug);
  return (
    <>
    <Navbar auth={true}/>
    <section style={{background: '#D5E5F2'}}>
      <div className='sm:cotainer md:container lg:container lg:py-14 lg:px-32'>
        <div className='flex flex-col'>
          <div className='sm:grid-cols-1 flex justify-items-center items-center'>
            <Image src={`${academyClass.imgLink}`} width="0"
                height="0"
                sizes="100vw"
                style={{ width: 'auto', height: '320px' }}  alt={`${academyClass.title}`} loading="eager"/>
            <div className='columns-1'>
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-4xl sm:text-1xl" style={{color: '#0C356A'}}>{academyClass.title}</h1>
                <div className='flex flex-wrap items-center px-4'>
                  <Icon icon="material-symbols:library-books-rounded" width={'24px'}  className='text-primer1'/>
                  <p className='px-4'>{`${academyClass.modules} Modul`}</p>
                </div>
                <div className='flex flex-wrap items-center py-2 px-4'>
                  <Icon icon="bx:purchase-tag" width={'24px'} className='text-primer1'/>
                  <p className='px-4'>{`Rp.${academyClass.price.toLocaleString('id-ID')}`}</p>
                </div>
                <div className='flex flex-wrap items-center py-4'>
                  <Button type="link" className="btn-primary-lg" href={`/e-learning/payment/${academyClass.slug}`}>Buy</Button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className='lg:py-14 lg:px-32 flex flex-col gap-8'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-2xl font-extrabold'>About Class</h1>
          <p className='text-1xl break-words'>{academyClass.about}</p>
        </div>
        <div className='flex flex-col items-start gap-4'>
          <h1 className='text-2xl font-extrabold'>Benefit</h1>
          <ul className='list-disc px-6'>
        {
            academyClass.benefit.map((ben, index) => (
  <li key={index}>{ben}</li>
))

        }

          </ul>
        </div>
          <Button type="link" className="btn-primary-lg text-center" href={`/e-learning/payment/${academyClass.slug}`}>Buy</Button>
      </div>
    </section>
    <Footer/>
    </>
  )
}