'user client';
import React from 'react';
import { PropTypes } from 'prop-types';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
export default function WebinarCard({
  img,
  header,
  datetime,
  price,
  slug,
  src,
}) {

  return (
    <Link href={`/webinar/${slug}`} >
                <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px] rounded-[8px]">
                            <Image src={`${img.src}`} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={(`${img.alt}` ?? "")} loading="eager"/>
                            <div className="px-[16px] pb-[16px]">
                                <h4 className="text-[24px] font-bold">{header}</h4>
                                <div className="flex flex-col pt-2 gap-[8px] text-[14px] items-start">
                                    <div className="flex gap-[8px]">
                                        <Icon icon="uiw:date" color="#0c356a" width="24" height="24" />
                                        <p>{datetime}</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <Icon icon="bx:purchase-tag" className='text-primer1' style={{ fontSize: '24px' }}/>
                                        <span className='text-[14px] '>{`Rp.${price.toLocaleString('id-ID')}`}</span>
                                    </div>
                                </div>
                            </div>
                </div>
    </Link>
  );
}

WebinarCard.propTypes = {
  header: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.object,
  slug: PropTypes.string,
  datetime: PropTypes.string,
};
