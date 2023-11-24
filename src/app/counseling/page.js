"use client"
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Button from '../components/btn';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { counseling } from '@/data';

export default function CounselingPage() {
  return (
    <>
      <Navbar auth={true} />
      <div className="w-1440 h-432 bg-primer4 flex items-center justify-between gap-6 px-[128px] py-[56px]">
        <Image
          src="/assets/ilustration/Marriage counseling-amico.svg"
          width={320}
          height={320}
          sizes="100vw"
          alt=""
          loading="eager"
        />

        <div className="text-primer1 flex flex-col gap-4">
          <h2 className="text-[42px] font-bold font-roboto">Career Counseling</h2>
          <p className="text-[18px]">
            Career counseling is a personalized service that assists you in
            planning and achieving your career goals. Counselors work with you
            to identify your strengths, overcome obstacles, and develop concrete
            action plans. This provides personalized guidance that can lead you
            towards greater and more fulfilling career success.
          </p>
        </div>
      </div>

      <h1 className="text-primer1 text-[32px] font-bold text-center mx-[128px] mt-[56px]">
        Consumers can arrange video sessions according to their convenience,
        allowing them to receive career guidance without leaving their homes.
      </h1>

      <div className="px-[128px] py-[56px] flex justify-between">
        {counseling.map((counsel) => (
          <div
            key={counsel.slug}
            className="px-[24px] py-[16px] bg-primer4 rounded-[8px] flex gap-[48px] items-between shadow-xl w-[551px]"
          >
            <div className="flex flex-col justify-between items-between w-[162px]">
              <h4 className="text-[24px] font-bold">{counsel.title}</h4>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <Icon
                    icon="bx:purchase-tag"
                    className="text-primer1"
                    style={{ fontSize: '24px' }}
                  />
                  <span className="text-[14px]">
                    Rp.
                    {counsel.price.toLocaleString('id-ID')}
                  </span>
                </div>
                <Button
                  type="link"
                  className="btn-primary-sm text-center"
                  href={`/counseling/${counsel.slug}`}
                >
                  Buy
                </Button>
              </div>
            </div>
            <ul className="list-disc">
              {counsel.brief.map((bri, index) => (
                <li key={index}>{bri}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}
