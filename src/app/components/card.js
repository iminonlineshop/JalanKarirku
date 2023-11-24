
import React from 'react';
import { PropTypes } from 'prop-types';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Button from './btn';
import Link from 'next/link';
export default function Card({
  src,
  header,
  modules,
  price,
  description,
  isPaid = false,
  isPass = false,
  inProcess = false,
  slug
}) {
  if (isPaid === true && inProcess === false) {
    return (
      <Link href={`/e-learning/classroom/${slug}`}>
      <div className="inline-flex flex-col gap-4 rounded-[8px] shadow-xl max-w-[337px] overflow-hidden">
        <div className="relative w-full">
          <Image
            src={src}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt={(header ?? "")}
            loading="eager"
          />
        </div>
        <header className="shrink-0 basis-0 text-[24px] leading-[24.6px] px-4 font-bold ">
          {header}
        </header>
        <div className="flex justify-between items-center px-[16px]">
          <div className="shrink-0 flex items-center justify-between gap-2">
            <Icon
              icon="material-symbols:library-books-rounded"
              className="text-primer1"
            />
            <span className="shrink-0 text-[14px] font-normal leading-[19.6px] text-primer1">
              {modules}
            </span>
          </div>
        </div>
        <p className="shrink-0 text-[14px] font-normal leading-[19.6px] px-4 pb-4">
          {description}
        </p>
        <div className="mx-4 mb-4 flex justify-center items-center">
          <Button
            type="button"
            className="btn-primary-sm w-[100%] text-center"
          >
            Start
          </Button>
        </div>
      </div>
      </Link>
    );
  }

  if (inProcess === true && isPass === false) {
    return (
      <Link href={`/e-learning/classroom/${slug}`}>
      <div className="inline-flex flex-col gap-4 rounded-[8px] shadow-xl max-w-[337px] overflow-hidden">
        <div className="relative w-full">
          <Image
            src={src}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt={(header ?? "")}
            loading="eager"
          />
        </div>
        <header className="shrink-0 basis-0 text-[24px] leading-[24.6px] px-4 font-bold ">
          {header}
        </header>
        <div className="flex justify-between items-center px-[16px]">
          <div className="shrink-0 flex items-center justify-between gap-2">
            <Icon
              icon="material-symbols:library-books-rounded"
              className="text-primer1"
            />
            <span className="shrink-0 text-[14px] font-normal leading-[19.6px] text-primer1">
              {modules}
            </span>
          </div>
          <div className="shrink-0 flex items-center gap-2">
            <span className="px-4 py-2 rounded-[8px] bg-primer1 text-white0 text-center">
              Process
            </span>
          </div>
        </div>
        <p className="shrink-0 text-[14px] font-normal leading-[19.6px] px-4 pb-4">
          {description}
        </p>
      </div>
      </Link>
    );
  }
  if (inProcess === true && isPass === true) {
    return (
      <Link href={`/e-learning/classroom/${slug}`}>
      <div className="inline-flex flex-col gap-4 rounded-[8px] shadow-xl max-w-[337px] overflow-hidden">
        <div className="relative w-full">
          <Image
            src={src}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt={header ?? ""}
            loading="eager"
          />
        </div>
        <header className="shrink-0 basis-0 text-[24px] leading-[24.6px] px-4 font-bold ">
          {header}
        </header>
        <div className="flex justify-between items-center px-[16px]">
          <div className="shrink-0 flex items-center justify-between gap-2">
            <Icon
              icon="material-symbols:library-books-rounded"
              className="text-primer1"
            />
            <span className="shrink-0 text-[14px] font-normal leading-[19.6px] text-primer1">
              {modules}
            </span>
          </div>
          <div className="shrink-0 flex items-center gap-2">
            <span className="px-4 py-2 rounded-[8px] bg-primer1 text-white0 text-center">
              Passed
            </span>
          </div>
        </div>
        <p className="shrink-0 text-[14px] font-normal leading-[19.6px] px-4 pb-4">
          {description}
        </p>
      </div>
      </Link>
    );
  }

  return (
    <Link href={`/e-learning/${slug}`}>
      <div className="inline-flex flex-col gap-4 rounded-[8px] shadow-xl max-w-[337px] overflow-hidden">
        <div className="relative w-full">
          <Image
            src={src}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt={(header ?? "")}
            loading="eager"
          />
        </div>
        <header className="shrink-0 basis-0 text-[24px] leading-[24.6px] px-4 font-bold ">
          {header}
        </header>
        <div className="flex justify-between items-center px-[16px]">
          <div className="shrink-0 flex items-center justify-between gap-2">
            <Icon
              icon="material-symbols:library-books-rounded"
              className="text-primer1"
            />
            <span className="shrink-0 text-[14px] font-normal leading-[19.6px] text-primer1">
              {modules}
            </span>
          </div>
          <div className="shrink-0 flex items-center gap-2">
            <Icon icon="bx:purchase-tag" />
            <span className="shrink-0 text-[14px] font-normal leading-[19.6px]">{`Rp. ${price.toLocaleString(
              'id-ID',
            )}`}</span>
          </div>
        </div>
        <p className="shrink-0 text-[14px] font-normal leading-[19.6px] px-4 pb-4">
          {description}
        </p>
      </div>
    </Link>
  );
}

Card.propTypes = {
  isPaid: PropTypes.bool,
  isPass: PropTypes.bool,
  inProcess: PropTypes.bool,
  header: PropTypes.string,
  modules: PropTypes.number,
  price: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
  slug: PropTypes.string,
};
