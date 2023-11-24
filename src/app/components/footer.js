'use client';
import React from 'react';
import Button from './btn';
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <>
      <footer className="px-[128px] py-[40px] flex flex-col items-center justify-between bg-primer1">
        <div className="self-stretch py-[12px] flex justify-between items-center">
          <div className="self-start flex gap-4">
            <Button
              type="link"
              href="/contact"
              className="shrink-0 grow-0 font-normal text-[16px] leading-[22.4px] text-primer4"
            >
              Contact
            </Button>
            <Button
              type="link"
              href="/about"
              className="shrink-0 grow-0 font-normal text-[16px] leading-[22.4px] text-primer4"
            >
              About Us
            </Button>
          </div>
          <div className="self-end flex flex-end items-center gap-4">
            <Button className="text-primer4">
              <Icon icon="bxl:youtube" />
            </Button>
            <Button className="text-primer4">
              <Icon icon="uil:twitter" />
            </Button>
            <Button className="text-primer4">
              <Icon icon="akar-icons:instagram-fill" />
            </Button>
            <Button className="text-primer4">
              <Icon icon="bxl:linkedin" />
            </Button>
          </div>
        </div>
        <div className="shrink-0 self-stretch h-[1px] min-w-full my-[48px] bg-primer4 block"></div>
        <p className="text-center text-primer4 font-normal leading-[19.6px] ">
          Jalan Karirku &copy; 2023 All rights reserved.
        </p>
      </footer>
    </>
  );
}
