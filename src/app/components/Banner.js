'use client';
import React, { useState, useEffect } from 'react';

const banners = [
  '/assets/img/fuywrq.png',
  '/assets/img/business-facebook-cover-.png',
  '/assets/img/business_facebook_cover_banner_18.png',
  '/assets/img/4995921.png',
];

const Mybanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000); // Ganti gambar setiap 3 detik

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative h-[408px] mx-[128px] my-[56px]">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute w-full h-full ${
            index === currentIndex ? 'block' : 'hidden'
          } transition-opacity duration-500 ease-in-out`}
        >
          <img
            src={banner}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '1184px', height: '408px' }}
            className="w-full h-full object-cover rounded-lg"
            alt={`Banner ${index + 1}`}
            loading="eager"
          />
        </div>
      ))}
    </div>
  );
};

export default Mybanner;
