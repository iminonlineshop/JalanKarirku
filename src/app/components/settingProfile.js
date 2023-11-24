'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import { Icon } from '@iconify/react'
import Button from './btn';

const SettingProfile = () => {
  const [activeTab, setActiveTab] = useState('tab3'); // Set default tab

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
    <div className='flex justify-between items-start w-full px-[128px] py-[56px]'>
        <div className='flex flex-col w-[240px] gap-4'>
            <h1 className='text-[54px] font-bold'>Setting</h1>
            <button onClick={() => openTab('tab1')} className="tab-button ${activeTab === 'tab1' ? 'active' : ''} active:bg-primer3 active:shadow-lg py-[8px] flex justify-start items-center gap-4 px-[16px] rounded-[8px] transition duration-300 cursor-pointer hover:bg-primer3">
                <Icon icon="iconamoon:profile" width="41" />
                <p className='text-[18px]'>Profile</p>
            </button >
            <button onClick={() => openTab('tab2')} className="tab-button ${activeTab === 'tab2' ? 'active' : ''} active:bg-primer3 active:shadow-lg py-[8px] flex justify-start items-center gap-4 px-[16px] rounded-[8px] transition duration-300 cursor-pointer hover:bg-primer3">
                <Icon icon="icon-park-outline:personal-privacy" width="41" />
                <p className='text-[18px]'>Personal Data</p>
            </button >
            <button onClick={() => openTab('tab3')} className="tab-button ${activeTab === 'tab3' ? 'active' : ''} active:bg-primer3 active:shadow-lg py-[8px] flex justify-start items-center gap-4 px-[16px] rounded-[8px] transition duration-300 cursor-pointer hover:bg-primer3">
                <Icon icon="mdi:account-cog-outline" width="41" />
                <p className='text-[18px]'>Account Data</p>
            </button >
        </div>
        <div id="tab1" className="tab-content" style={{ display: activeTab === 'tab1' ? 'block' : 'none' }}>            
            <div className='flex flex-col gap-6 w-[880px] px-10 py-[56px] bg-primer4 rounded-3xl'>
                <h2 className='text-[42px] p-2 font-bold w-full border-b border-black0'>Profile</h2>
                <div className='flex gap-8 justify-center items-center'>
                    <Image src={"/assets/img/Ellipse 2.png"} width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '200px', height: 'auto' }} alt={""} loading="eager"/>
                    <div className='flex gap-2 flex-col items-start'>
                        <Button type="link" className="btn-primary-sm text-center" href={"#"}>Choose Photo</Button>
                        <p className='text-[14px] w-[290px]'>Your profile picture should have a 1:1 ratio and is no more than 2MB in size.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='mx-auto min-w-[75%]'>
                        <label htmlFor="name" className="block text-[18px]">Name</label>
                        <input type="text" name="name" id="name" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 py-3 sm:text-sm shadow-lg border-gray-900 rounded-lg" placeholder="Enter Name..."/>
                    </div>
                    <div className='mx-auto min-w-[75%]'>
                        <label htmlFor="userName" className="block text-[18px]">User Name</label>
                        <input type="text" name="userName" id="userName" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 py-3 sm:text-sm shadow-lg border-gray-900 rounded-lg" placeholder="Enter User Name..."/>
                    </div>
                    <div className='mx-auto min-w-[75%]'>
                        <label htmlFor="headline" className="block text-[18px]">Headline</label>
                        <input type="text" name="headline" id="headline" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 py-3 sm:text-sm shadow-lg border-gray-900 rounded-lg" placeholder="Enter Headline..."/>
                    </div>
                    <div className='mx-auto min-w-[75%]'>
                        <label htmlFor="about" className="block text-[18px]">About Me</label>
                        <input type="text" name="about" id="about" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12  py-3 sm:text-sm shadow-lg border-gray-900 rounded-lg" placeholder="Enter Abput Me..."/>
                    </div>
                </div>
                <div className='inline-flex justify-end px-[100px] '>
                    <Button type="link" className="btn-primary-sm text-center " href={"#"}>Submit</Button>
                </div>
            </div>
        </div>
        <div id="tab2" className="tab-content" style={{ display: activeTab === 'tab2' ? 'block' : 'none' }}>            
            <div className='flex flex-col gap-6 w-[880px] px-10 py-[56px] bg-primer4 rounded-3xl'>
                <h2 className='text-[42px] p-2 font-bold w-full border-b border-black0'>Personal Data</h2>
                <div className='flex flex-col gap-4'>
                    <div className='mx-auto min-w-[75%]'>
                        <label htmlFor="phone" className="block text-[18px]">Phone Number</label>
                        <input type="telp" name="phone" id="phone" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 py-3 sm:text-sm shadow-lg border-gray-900 rounded-lg" placeholder="Enter Phone Number..."/>
                    </div>
                    <div className='mx-auto min-w-[75%]'>
                        <label htmlFor="location" className="block text-[18px]">Location</label>
                        <input type="text" name="location" id="location" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 py-3 sm:text-sm shadow-lg border-gray-900 rounded-lg" placeholder="Enter Location..."/>
                    </div>
                    <div className='mx-auto min-w-[75%]'>
                        <label htmlFor="place" className="block text-[18px]">Place Of Birth</label>
                        <input type="text" name="place" id="place" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 py-3 sm:text-sm shadow-lg border-gray-900 rounded-lg" placeholder="Enter Place Of Birth..."/>
                    </div>
                    <div className='mx-auto min-w-[75%]'>
                        <label htmlFor="date" className="block text-[18px]">Date Of Birth</label>
                        <input type="date" name="date" id="date" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-3 py-3 sm:text-sm shadow-lg border-gray-900 rounded-lg" placeholder="Enter Date Of Birth..."/>
                    </div>
                    <div className='mx-auto min-w-[75%]'>
                        <label htmlFor="education" className="block text-[18px]">Education</label>
                        <input type="text" name="education" id="education" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12  py-3 sm:text-sm shadow-lg border-gray-900 rounded-lg" placeholder="Enter Education..."/>
                    </div>
                    <div className='mx-auto min-w-[75%]'>
                        <label htmlFor="profession" className="block text-[18px]">Profession</label>
                        <input type="text" name="profession" id="profession" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12  py-3 sm:text-sm shadow-lg border-gray-900 rounded-lg" placeholder="Enter Profession..."/>
                    </div>
                </div>
                <div className='inline-flex justify-end px-[100px]'>
                    <Button type="link" className="btn-primary-sm text-center " href={"#"}>Submit</Button>
                </div>
            </div>
        </div>
        <div id="tab3" className="tab-content" style={{ display: activeTab === 'tab3' ? 'block' : 'none' }}>            
            <div className='flex flex-col gap-6 w-[880px] px-10 py-[56px] bg-primer4 rounded-3xl'>
                <h2 className='text-[42px] p-2 font-bold w-full border-b border-black0'>Account Data</h2>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-4'>
                        <h4 className='text-[24px] text-center font-bold'>Change E-mail</h4>
                        <div className='mx-auto min-w-[75%]'>
                                <label htmlFor="email" className="block text-[18px]">New E-mail</label>
                                <input type="email" name="email" id="email" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 py-3 sm:text-sm shadow-lg border-gray-900 rounded-lg" placeholder="Enter Phone New E-mail..."/>
                        </div>
                        <div className='inline-flex justify-center'>
                            <Button type="link" className="btn-primary-sm text-center " href={"#"}>Submit</Button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h4 className='text-[24px] px-[100px] font-bold'>Change Password</h4>
                        <div className='flex flex-col gap-4'>
                            <div className='mx-auto min-w-[75%]'>
                                <label htmlFor="pass" className="block text-[18px]">New Password</label>
                                <input type="password" name="pass" id="pass" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-3 py-3 sm:text-sm shadow-lg border-gray-900 rounded-lg" placeholder="Enter New Password..."/>
                            </div>
                            <div className='mx-auto min-w-[75%]'>
                                <label htmlFor="comPas" className="block text-[18px]">Comfirm New Password</label>
                                <input type="password" name="comPas" id="comPas" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-3 py-3 sm:text-sm shadow-lg border-gray-900 rounded-lg" placeholder="Enter Comfirm New Password..."/>
                            </div>
                        </div>
                        <div className='inline-flex justify-end px-[100px]'>
                            <Button type="link" className="btn-primary-sm text-center " href={"#"}>Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default SettingProfile;