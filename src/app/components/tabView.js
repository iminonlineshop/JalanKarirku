"use client"
import React, { useState } from 'react';
import { userAcademies, userWebinars } from '@/data';
import Card from './card';
import DashboardWebinarCard from './dashboardWebinarCard';
const TabView = () => {

  const [activeTab, setActiveTab] = useState('tab1');
  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className=" mx-[128px] my-[56px] flex flex-col gap-[40px]">
        <div className="tab-buttons flex gap-[48px] font-bold text-[32px]">
          <button
            onClick={() => openTab('tab1')}
            className="tab-button ${activeTab === 'tab1' ? 'active' : ''} active:bg-blue-200 active:shadow-md py-[16px] px-[16px] rounded-[8px] transition duration-300 cursor-pointer hover:bg-primer4"
          >
            <span>Academy</span>
          </button>
          <button
            onClick={() => openTab('tab2')}
            className="tab-button ${activeTab === 'tab2' ? 'active' : ''} active:bg-blue-200 active:shadow-md py-[16px] px-[16px] rounded-[8px] transition duration-300 cursor-pointer hover:bg-primer4"
          >
            <span>Webinar</span>
          </button>
          <button
            onClick={() => openTab('tab3')}
            className="tab-button ${activeTab === 'tab3' ? 'active' : ''} active:bg-blue-200 active:shadow-md py-[16px] px-[16px] rounded-[8px] transition duration-300 cursor-pointer hover:bg-primer4"
          >
            <span>Counseling</span>
          </button>
        </div>
        <div
          id="tab1"
          className="tab-content"
          style={{ display: activeTab === 'tab1' ? 'block' : 'none' }}
        >
          <div className="flex flex-col gap-[32px]">
            <div className="flex justify-between items-start flex-wrap gap-4 space-y-6">
          {
            userAcademies.map((academy, index) => (
               <Card key={index} isPaid={academy.isPaid} isPass={academy.isPass} inProcess={academy.inProcess} header={academy.title} modules={academy.modules} slug={academy.slug} price={academy.price}  src={academy.imgLink}/>
            ))
          }

            </div>
          </div>
        </div>
        <div
          id="tab2"
          className="tab-content"
          style={{ display: activeTab === 'tab2' ? 'block' : 'none' }}
        >
          <div className="flex flex-col gap-[32px]">
            <div className="flex justify-between items-start flex-wrap gap-4 space-y-6">
{
  userWebinars.map((webinar, index) => (
    <DashboardWebinarCard
      key={index}
      isPaid={webinar.isPaid}
      imgLink={webinar.imgLink}
      title={webinar.title}
      price={webinar.price}
      datetime={webinar.datetime}
      slug={webinar.slug}
    />
  ))
}
          </div>
        </div>
        </div>
        <div
          id="tab3"
          className="tab-content"
          style={{ display: activeTab === 'tab3' ? 'block' : 'none' }}
        >
          <div className="px-[24px] py-[16px] bg-primer4 rounded-[8px] flex gap-[48px] items-start shadow-xl w-[551px]">
            <div className="flex flex-col gap-[24px] justify-start items-start w-[162px]">
              <h4 className="text-[24px] font-bold">
                Career Counseling via Video Conference
              </h4>
              <p className="bg-primer1 text-white0 px-[16px] py-[8px] rounded-[8px]">
                Paid Off
              </p>
            </div>
            <ul className="list-disc">
              <li>
                Video conference sessions allow consumers to interact directly
                with counselors through video and audio, creating a more
                personal connection.
              </li>
              <li>
                In video conference, consumers can see the counselor's facial
                expressions and body language, allowing for important non-verbal
                communication and understanding.
              </li>
              <li>
                Due to real-time communication, consumers' questions and issues
                can be addressed more quickly in video sessions.
              </li>
              <li>
                Video conference enables more interactive discussions and active
                information sharing, providing consumers with deeper insights
                into their careers.
              </li>
              <li>
                Consumers can gain a deeper understanding of counselor advice
                and guidance through visual communication in video conference.
              </li>
              <li>
                Consumers can arrange video sessions according to their
                convenience, allowing them to receive career guidance without
                leaving their homes.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabView;
