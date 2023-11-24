'use client';
import { useEffect } from 'react';
import Image from 'next/image';

const TestimonialCarousel = () => {
  useEffect(() => {
    const carousel = document.getElementById('testimonial-carousel');
    let currentIndex = 0;

    function scrollCarousel() {
      currentIndex += 2;
      if (currentIndex >= carousel.children.length) {
        currentIndex = 0;
      }
      const translateX = -currentIndex * (carousel.offsetWidth / 2);
      carousel.style.transform = `translateX(${translateX}px)`;
    }

    const intervalId = setInterval(scrollCarousel, 3000);

    // Membersihkan interval saat komponen di-unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className="overflow-hidden mx-[128px] w-[1184px] my-[64px] flex flex-col justify-center items-center gap-[40px]">
        <div className="flex flex-col justify-center items-center gap-[8px]">
          <p>Testimonial</p>
          <h3 className="text-[32px] font-bold">Check what they say</h3>
        </div>
        <div className="caousel-container overflow-hidden relative max-w-full">
          <div id="testimonial-carousel" className="carousel flex">
            <div className="testimonial last:mr-0 w-1/2 mx-4 px-[24px] py-[24px] h-[332px] shadow-xl flex justify-between items-start gap-[24px] bg-primer4 rounded-[16px]">
              <div className="w-[200px] flex flex-col gap-[24px]">
                <Image
                  src={'/assets/img/testtimonial1.png'}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  alt={''}
                  loading="eager"
                />
                <div className="flex flex-col gap-[8px]">
                  <p className="font-bold">Darrell Steward</p>
                  <p>Engineering Student</p>
                </div>
              </div>
              <p className="w-[290px]">
                "The soft skill development program has transformed the way I
                interact and work within teams. I've learned strong
                communication skills and leadership abilities that have made me
                more effective in my college projects. It's a crucial step
                towards my career success."
              </p>
            </div>
            <div className="testimonial last:mr-0 w-1/2 mx-4 px-[24px] py-[24px] h-[332px] shadow-xl flex justify-between items-start gap-[24px] bg-primer4 rounded-[16px]">
              <div className="w-[200px] flex flex-col gap-[24px]">
                <Image
                  src={'/assets/img/testtimonial2.png'}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  alt={''}
                  loading="eager"
                />
                <div className="flex flex-col gap-[8px]">
                  <p className="font-bold">Arlene McCoy</p>
                  <p>High School Student</p>
                </div>
              </div>
              <p className="w-[290px]">
                "As a high school student, I initially thought career
                development was something for college and beyond. However,
                participating in the soft skill development program and
                attending career webinars on this platform has opened my eyes to
                the importance of early career planning. I've gained valuable
                skills and insights that will undoubtedly benefit my future
                educational and professional journey."
              </p>
            </div>
            <div className="testimonial last:mr-0 w-1/2 mx-4 px-[24px] py-[24px] h-[332px] shadow-xl flex justify-between items-start gap-[24px] bg-primer4 rounded-[16px]">
              <div className="w-[200px] flex flex-col gap-[24px]">
                <Image
                  src={'/assets/img/testtimonial3.png'}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  alt={''}
                  loading="eager"
                />
                <div className="flex flex-col gap-[8px]">
                  <p className="font-bold">Eleanor Pena</p>
                  <p>Project Manager</p>
                </div>
              </div>
              <p className="w-[290px]">
                "The career counseling I received here has truly transformed my
                outlook on career development. I now have a clear plan and a
                better understanding of how to reach my long-term goals. My
                counselor was incredibly knowledgeable and helpful."
              </p>
            </div>
            <div className="testimonial last:mr-0 w-1/2 mx-4 px-[24px] py-[24px] h-[332px] shadow-xl flex justify-between items-start gap-[24px] bg-primer4 rounded-[16px]">
              <div className="w-[200px] flex flex-col gap-[24px]">
                <Image
                  src={'/assets/img/testtimonial4.png'}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  alt={''}
                  loading="eager"
                />
                <div className="flex flex-col gap-[8px]">
                  <p className="font-bold">Jane Cooper</p>
                  <p>College Student</p>
                </div>
              </div>
              <p className="w-[290px]">
                "Being a college student can be overwhelming with academic
                pressures and future uncertainties. The career counseling I
                received through this platform has been a game-changer. It
                helped me align my academic path with my long-term career goals
                and gave me the confidence to pursue internships and
                opportunities that will shape my future. I'm incredibly grateful
                for the guidance I've received."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCarousel;
