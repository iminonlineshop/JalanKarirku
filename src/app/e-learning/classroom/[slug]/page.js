'use client'
import Navbar from '@/app/components/navbar'
import { academy } from '@/data'
import React, { useEffect, useState } from 'react'

export default function Classroom({ params }) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const slug = params.slug;
  const classMaterial = academy.find((academi) => academi.slug === slug);
  const videoData = classMaterial.classOnline;
  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex < videoData.length - 1 ? prevIndex + 1 : 0));
  };
  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : videoData.length - 1));
  };

  const changeVideoByIndex = (index) => {
    setCurrentVideoIndex(index);
  }

  return (
    <>
      <Navbar auth={true}/>
      <main className="px-[128px] py-14 mx-auto">
<section className='flex items-center justify-between'>
          <div className="flex items-center min-w-[180px]">
            {currentVideoIndex > 0 && (
              <button onClick={prevVideo} className='btn-primary-lg text-left'>
                Previous
              </button>
            )}
          </div>
          <h1 className="text-[42px] font-bold">{classMaterial.title}</h1>
          <div className="flex items-center min-w-[180px]">
            {currentVideoIndex < videoData.length - 1 && (
              <button onClick={nextVideo} className='btn-primary-lg text-right'>
                Next
              </button>
            )}
          </div>
        </section>
        <section className='flex gap-10'>
          <div className='min-w-[25%] flex flex-col gap-6 py-14 font-bold'>
            <span className='text-[24px]'>List Modules</span>
            <ul className='flex flex-col gap-4'>
              {videoData.map((video, index) => (
                <li
                  key={index}
                  className={`cursor-pointer px-4 py-2 text-[18px] ${currentVideoIndex === index ? 'bg-primer3 py-4' : 'hover:bg-primer3'} rounded-[8px]`}
                  onClick={() => changeVideoByIndex(index)}
                >
                  <button>{video.videoTitle}</button>
                </li>
              ))}
            </ul>
          </div>

          <div className='flex flex-col gap-6 px-24 py-14'>
            <h3 className='font-bold text-[32px]'>{videoData[currentVideoIndex].videoTitle}</h3>
            <div>
              <iframe src={videoData[currentVideoIndex].videoLink} frameBorder="0" width={720} height={400} allowFullScreen title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"></iframe>
            </div>
            <article className='max-w-[700px] text-justify leading-[1.5rem]'>
              {videoData[currentVideoIndex].script}
            </article>
          </div>
        </section>
      </main>
    </>
  )
}
