'use client'

import Button from "@/app/components/btn"
import Footer from "@/app/components/footer"
import Navbar from "@/app/components/navbar"
import { webinar } from "@/data"
import calculatePlusTax from "@/utils/calculatePlusTax"
import { Icon } from "@iconify/react"

export default function CheckoutWebinar ({params}) {
    const slug = params.slug;
    const webinarEvent = webinar.find((web) => web.slug === slug);
    return (
    <>
    <Navbar auth={true}/>
          <div className='flex justify-between gap-10 items-start px-[128px] py-[56px]'>
            <div className='flex flex-col gap-6 items-start w-[70%]'>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-[42px] font-bold'>{webinarEvent.title}</h2>
                    <div className='flex gap-2'>
                        <Icon icon="bx:purchase-tag" className='text-black0' style={{ fontSize: '32px' }}/>
                        <span className='text-[24px] font-bold'>{`Rp. ${webinarEvent.price.toLocaleString('id-ID')}`}</span>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h4 className='text-[24px] font-bold'>About webinar</h4>
                    <p>{webinarEvent.description.about}</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h4 className='text-[24px] font-bold'>Benefit</h4>
                    <ul className="list-disc">
                        {
                    webinarEvent.description.benefit.map((ben, index) => (
                        <li key={index}>{ben}</li>
                    ))
                    }

                    </ul>
                </div>
            </div>
            <div className='flex flex-col items-start gap-4  p-8 bg-primer4 rounded-lg'>
                <div className='flex flex-col gap-2 px-4 pb-4 border-b border-black0 w-full'>
                    <h6 className='text-[18px] font-bold'>Product summary</h6>
                    <p className='text-[18px]'>Effective Communication</p>
                    <div className='flex gap-2'>
                        <Icon icon="bx:purchase-tag" className='text-black0' style={{ fontSize: '24px' }}/>
                        <span className='text-[18px] font-bold'>{`Rp.${webinarEvent.price.toLocaleString('id-ID')}`}</span>
                    </div>
                </div>
                <div className='flex flex-col gap-2 w-full px-4 pb-4 border-b border-black0'>
                    <div className='flex justify-between'>
                        <span className='text-[18px]'>Sub Total</span>
                        <span className='text-[18px]'>{`Rp.${webinarEvent.price.toLocaleString('id-ID')}`}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-[18px]'>PPN (10%)</span>
                        <span className='text-[18px]'>{calculatePlusTax(webinarEvent.price)}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-[18px] font-bold'>Total</span>
                        <span className='text-[18px] font-bold'>{calculatePlusTax(webinarEvent.price)}</span>
                    </div>
                </div>
                <div className='flex flex-col gap-2 w-full px-4'>
                    <div className='flex flex-col gap-2 justify-between'>
                        <label htmlFor="whatsapp" className="block text-[18px]">WhatsApp Number</label>
                        <div className='flex gap-2'>
                            <input type="tel" name="whatsapp" id="whatsapp" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 py-2 sm:text-sm border-gray-900 rounded-lg" placeholder="+62 123-456-7890"/>
                            <div className="tooltip" data-tip="This number will be used as a communication channel for Jalan Karirku to you">  
                                <Icon icon="mingcute:information-line" width="32" className="cursor-pointer" aria-label="Information" />
                            </div>
                        </div>
                    </div>
                    <p className='text-[14px]'>Please fill in your WhatsApp number where you can be contacted.</p>
                    <Button type="link" className="btn-primary-sm text-center" href={"#"}>Proceed to Payment</Button>
                </div>
            </div>
        </div>
    <Footer/>
    </>
  )
}