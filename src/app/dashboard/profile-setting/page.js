'use client'
import Footer from '@/app/components/footer'
import Navbar from '@/app/components/navbar'
import SettingProfile from '@/app/components/settingProfile'
import React from 'react'

export default function ProfileSetting () {
    return (
    <>
    <Navbar auth={true}/>
    
    <SettingProfile/>

    <Footer/>
    </>
  )
}