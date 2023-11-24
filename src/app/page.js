'use client'
import Image from 'next/image'
import Button from './components/btn'
import Footer from './components/footer'
import Accordion from './components/accordion'
import Navbar from './components/navbar'
import TestimonialCarousel from '.components/testimonialCarousel'
export default function Home() {

  const FAQ = [
    {
      title: "What is meant by soft skill development?",
      content: "Soft skill development involves enhancing non-technical abilities such as communication, leadership, teamwork, and interpersonal skills. It helps individuals become more effective in their work and enhances career prospects."
    },
    {
      title: "Why are soft skills important in the workplace?",
      content: "Soft skills are a key component of professional success. They enable individuals to interact better with colleagues, manage conflicts, and become effective leaders. This can impact job performance and career advancement."
    },
    {
      title: "How can career counseling benefit me?",
      content: "Career counseling provides personalized guidance and advice to help you plan and achieve your career goals. It helps you understand your potential, overcome obstacles, and take the right steps in your career development."
    },
    {
      title: "Is this program suitable for recent college graduates?",
      content: "Yes, the program is suitable for all levels of experience. We offer tailored solutions to individual needs, including beginners who are just entering the workforce."
    },
    {
      title: "How can I enroll in this program?",
      content: "You can enroll by visiting our website and following the registration procedures outlined there. We are ready to assist you in starting your journey towards successful soft skill development and career counseling."
    }

  ]
  return (
    <>
    <Navbar/>
    <div className='text-primer1 font-roboto'>
      <div className="mx-[128px] my-[64px] flex justify-between items-center">
        <div className="w-[575px] flex flex-col justify-start items-start gap-[32px]">
            <h1 className="leading-[64px] text-[54px] font-bold text-primer1">Develop your potential and achieve greater career success through our training!</h1>
            <Button type="link" className="btn-primary-lg text-center" href={"#"}>Join Us!</Button>
        </div>
          <div className="relative w-[500px]">
            <Image src={"/assets/ilustration/Career progress-rafiki 1.svg"} width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
          </div>
      </div>

      <div className="px-[128px] py-[56px] flex flex-col gap-[24px] items-center bg-primer4">
        <div className="flex flex-row justify-center items-center gap-[8px]">
            <h2 className="text-primer1 text-[42px] font-bold">Why Jalur Karirku</h2>
            <Image src={"/assets/img/logo light.png"} width="0"
            height="0"
            sizes="100vw"
            style={{ width: '60px', height: 'auto' }}  alt={""} loading="eager"/>
        </div>
        <div className="flex justify-between items-center gap-[40px]">
            <Image src={"/assets/ilustration/elearning spft skills.svg"} width="0"
            height="0"
            sizes="100vw"
            style={{ width: '320px', height: 'auto' }}  alt={""} loading="eager"/>
            <div className="flex flex-col justify-center items-start gap-[16px] w-[813px]">
                <h3 className="text-[32px] font-bold">Soft Skill Development</h3>
                <p className="text-[16px]">Soft skill development helps you acquire non-technical skills such as communication, leadership, and teamwork. It enhances your effectiveness in the workplace and aids in achieving career success. Soft skills also enable you to excel in overcoming challenges and collaborate effectively with colleagues.</p>
                <Button type="link" className="btn-primary-sm text-center" href={"#"}>Explore In-Depth</Button>
            </div>
        </div>
        <div className="flex justify-between items-center gap-[40px]">
            <div className="flex flex-col justify-center items-start gap-[16px] w-[813px]">
                <h3 className="text-[32px] font-bold">Career Webinars</h3>
                <p className="text-[16px]">Career webinars provide you with access to insights and knowledge from experts in various fields. You can deepen your understanding of industry trends, job search strategies, and career development. Webinars offer the opportunity to learn from the best without leaving your home, making professional development more convenient.</p>
                 <Button type="link" className="btn-primary-sm text-center" href={"#"}>Explore In-Depth</Button>
            </div>
            <Image src={"/assets/ilustration/Webinar-amico.svg"} width="0"
            height="0"
            sizes="100vw"
            style={{ width: '320px', height: 'auto' }}  alt={""} loading="eager"/>
        </div>
        <div className="flex justify-between items-center gap-[40px]">
            <Image src={"/assets/ilustration/Marriage counseling-amico.svg"} width="0"
            height="0"
            sizes="100vw"
            style={{ width: '320px', height: 'auto' }}  alt={""} loading="eager"/>
            <div className="flex flex-col justify-center items-start gap-[16px] w-[813px]">
                <h3 className="text-[32px] font-bold">Career Counseling</h3>
                <p className="text-[16px]">Career counseling is a personalized service that assists you in planning and achieving your career goals. Counselors work with you to identify your strengths, overcome obstacles, and develop concrete action plans. This provides personalized guidance that can lead you towards greater and more fulfilling career success.</p>
                 <Button type="link" className="btn-primary-sm text-center" href={"#"}>Explore In-Depth</Button>
            </div>
        </div>
      </div>
      
      <TestimonialCarousel/>

      <div className="px-[128px] pt-[56px] pb-[40px] flex flex-col  gap-[40px]">
        <h3 className="text-[32px] font-bold text-center">Frequently Asked Questions</h3>
        <Accordion className="self-strecth" items={FAQ}/>
      </div>
      <div className='flex justify-center mb-[56px] items-center w-full'>
        <Button type="link" className="btn-primary-lg" href={"#"}>Register Now!</Button>
      </div>
      <Footer/>
    </div>
    </>
  )
}
