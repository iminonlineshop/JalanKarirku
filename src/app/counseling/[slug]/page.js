"use client"
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Button from '../../components/btn';
import { counseling } from '@/data';

export default function Detail({ params }) {
  const slug = params.slug;
  const counsel = counseling.find((counsel) => counsel.slug === slug);

  return (
    <>
      <Navbar auth={true}/>

      <section style={{ background: '#D5E5F2' }}>
        <div className="sm:container md:container lg:container lg:py-14 lg:px-32">
          <div className="flex flex-col">
            <div className="flex justify-items-center items-center gap-12">
              <Image
                src="/assets/ilustration/Marriage counseling-amico.svg"
                width={320}
                height={320}
                sizes="100vw"
                alt=""
                loading="eager"
              />
              <div className="columns-1">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-4xl sm:text-1xl" style={{ color: '#0C356A' }}>
                  {counsel.title}
                </h1>
                <div className="flex flex-wrap items-center py-2 px-4">
                  <Icon icon="bx:purchase-tag" width={'24px'} className="text-primer1" />
                  <p className="px-4">{`Rp.${counsel.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}`}</p>

                </div>
                <div className="flex flex-wrap items-center py-4">
                  <Button type="link" className="btn-primary-lg" href={`/counseling/payment/${counsel.slug}`}>Buy</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="lg:py-14 lg:px-32 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-extrabold">About Counseling</h1>
            <p className="text-1xl break-words">{counsel.description.about}</p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-2xl font-extrabold">Benefit</h1>
            <ul className="list-disc px-6">
              {counsel.description.benefit.map((ben, index) => (
                <li key={index}>{ben}</li>
              ))}
            </ul>
          </div>
          <Button type="link" className="btn-primary-lg text-center" href={`/counseling/payment/${counsel.slug}`}>Buy</Button>
        </div>
      </section>

      <Footer />
    </>
  );
}
