'use client'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function DashboardWebinarCard({ isPaid = false, imgLink, title, price, datetime, slug }) {
  return (
    <Link href={`webinar/${slug}`}>
      <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px]">
        <Image
          src={imgLink}
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          alt={''}
          loading="eager"
        />
        <div className="px-[16px] pb-[16px]  w-[100%]">
          <h4 className="text-[24px] font-bold">{title}</h4>
          <div className="flex text-[14px] justify-between items-center">
            <div className="flex gap-[8px]">
              <Icon icon="uiw:date" color="#0c356a" width="20" height="20" />
              <p>{datetime}</p>
            </div>
            {isPaid ? (
              <p className="bg-primer1 text-white0 px-[16px] py-[8px] rounded-[8px]">
                Paid Off
              </p>
            ) : (
              <p className="bg-primer1 text-white0 px-[16px] py-[8px] rounded-[8px]">
                Not Yet Paid
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
