'use client'
import React from 'react'
import Image from 'next/image'
import Button from '../components/btn'
import { Icon } from '@iconify/react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Link from 'next/link'
import dynamic from 'next/dynamic'
 
const TabViewNoSSR = dynamic(() => import('../components/tabView'), { ssr: false })
export default function ProfilePage () {
    return (
    <>
    <Navbar auth={true}/>
    <div className="px-[128px] py-[64px] bg-primer4 flex justify-between items-center">
        <Image src={"/assets/img/Ellipse 2.png"} width="0"
        height="0"
        sizes="100vw"
        style={{ width: '320px', height: 'auto' }} alt={""} loading="eager"/>
        <Link href='/dashboard/profile-setting'>
        <Image src={"/assets/img/edit.png"} width="0"
        height="0"
        sizes="100vw"
        style={{ width: '100px', height: 'auto' }} className="absolute top-[380px] left-[350px]" alt={""} loading="eager"/>
        </Link> 
        <div className="w-[800px] flex flex-col gap-[16px] text-primer1 items-start">
            <h1 className="text-[54px] font-bold">Brooklyn Simmons</h1>
            <div className="flex gap-[24px]">
                <h6 className="text-[18px] font-bold">Student</h6>
                <div className="flex gap-[8px] justify-start items-center">
                    <Icon icon="mdi:location" color="#0c356a" width="20" height="20" />
                    <h6 className="text-[18px] font-bold">Indonesia</h6>
                </div>
            </div>
            <div>
                <h6 className="text-[18px] font-bold">About Me</h6>
                <p>Brooklyn Simmons is an enthusiastic student determined to ensure their career trajectory in the future. With unwavering determination and dedication, they are working diligently to achieve success in their chosen field. Brooklyn is highly eager to explore various opportunities and learning experiences that will aid in reaching their career aspirations. With a strong educational background and a passionate drive for continuous growth, Brooklyn Simmons is a promising future professional, ready to pursue their career dreams.</p>
            </div>
            <Button type="link" className="btn-primary-sm text-center" href={"#"}>Sign Out</Button>
        </div>
    </div>

    <TabViewNoSSR/>

    <Footer/>
    </>
  )
}