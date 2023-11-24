'use client'

import Button from "@/app/components/btn";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import { webinar } from "@/data";
import { Icon } from "@iconify/react";


export default function WebinarDetail({params}) {
    const slug = params.slug;
    const webinarEvent = webinar.find((web) => web.slug === slug);
  return (
    <>
    <Navbar auth={true}/>
    <section style={{background: '#D5E5F2'}}>
      <div className='sm:cotainer md:container lg:container lg:py-14 lg:px-32'>
        <div className='flex flex-col'>
          <div className='flex items-center gap-12'>
            <img className='flex flex-shrink-0' src={webinarEvent.imgLink}/>
            <div className='columns-1'>
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-4xl sm:text-sm" style={{color: '#0C356A'}}>{webinarEvent.title}</h1>
                <div className='flex flex-wrap items-center px-4'>
                  <Icon icon="uiw:date" width={'24px'}  className='text-primer1'/>
                  <p className='px-4'>{webinarEvent.datetime}</p>
                </div>
                <div className='flex flex-wrap items-center py-2 px-4'>
                  <Icon icon="bx:purchase-tag" width={'24px'} className='text-primer1'/>
                  <p className='px-4'>{`Rp.${webinarEvent.price}`}</p>
                </div>
                <div className='flex flex-wrap items-center py-4'>
                    <Button type="link" className="btn-primary-lg" href={`/webinar/payment/${webinarEvent.slug}`}>Buy</Button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className='lg:py-14 lg:px-32 flex flex-col gap-8'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-2xl font-extrabold'>About Webinar</h1>
          <p className='text-1xl break-words'>{webinarEvent.description.about}</p>
        </div>
        <div className='flex flex-col items-start gap-4'>
          <h1 className='text-2xl font-extrabold'>Benefit</h1>
          <ul className='list-disc px-6'>
            {
                webinarEvent.description.benefit.map((ben, index) =>(
                <li key={index}>{ben}</li>)
                )
            }
          </ul>
        </div>
        <div className='flex flex-col items-start gap-4'>
          <h1 className='text-2xl font-extrabold'>Terms and Conditions</h1>
          <ul className='list-disc px-6'>
            <li>To participate in the webinar, you must complete the registration process, which may include providing your name, email address, and payment details, if applicable.</li>
            <li>Upon registration and payment, you will receive access to the webinar platform. Access details will be sent to the email address provided during registration.</li>
            <li>Active participation is encouraged during the webinar, including asking questions and engaging in discussions.</li>
            <li>The webinar may be recorded for future reference or distribution. By participating, you consent to being recorded.</li>
            <li>Any materials, handouts, or resources shared during the webinar are for personal use and may not be reproduced or distributed without permission.</li>
          </ul>
        </div>
          <Button type="link" className="btn-primary-lg text-center" href={`/webinar/payment/${slug}`}>Buy</Button>
      </div>
    </section>
    <Footer/>
    </>
  )
}