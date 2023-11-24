'use client';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Register() {
  return (
    <>
      <div className="relative flex justify-center items-center py-[24px] border-b-[1px] border-gray2">
        <Link href={'/'}>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: 'auto', height: '83px' }}
            alt={'brand-icon'}
            loading="eager"
            src="/assets/img/main logo.png"
          />
        </Link>
      </div>

      <div className="flex items-center flex-col">
        <h1 className="font-bold text-[54px] mt-[40px] text-center">Sign Up</h1>
        <p className="p-4 roudned-2 mt-[24px] w-[640px] bg-primer4 inline-block text-center">
          Create your account Jalan Karirku and get first access to the very
          best of Jalan Karirku service
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm pb-24">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nama
            </label>
            <div className="mt-2">
              <input
                id="name"
                type="text"
                name="name"
                required
                pattern="[A-Z][a-zA-Z]*"
                title="Masukan Nama dengan awalan huruf kapital"
                autoComplete="name"
                placeholder='Enter your name...'
                className="block pl-4 w-full rounded-md border-0 py-1.5 text-black0 shadow-sm ring-1 ring-gray2 placeholder:text-gray2 focus:ring-2 focus:ring-outline-primer-2 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                type="text"
                name="username"
                autoComplete="username"
                required
                placeholder='Enter your username...'
                className="block pl-4 w-full rounded-md border-0 py-1.5 text-black0 shadow-sm ring-1 ring-gray2 placeholder:text-gray2 focus:ring-2 focus:ring-outline-primer-2 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Phone
            </label>
            <div className="mt-2">
              <input
                id="phone"
                type="tel"
                name="phone"
                autoComplete="phone"
                required
                pattern="^08\d{10}$"
                placeholder='Enter your phone number...'
                title="Masukan nomor hp dengan benar ex(081302023738)"
                className="block pl-4 w-full rounded-md border-0 py-1.5 text-black0 shadow-sm ring-1 ring-gray2 placeholder:text-gray2 focus:ring-2 focus:ring-outline-primer-2 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              E-mail
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder='Enter your email address...'
                className="block pl-4 w-full rounded-md border-0 py-1.5 text-black0 shadow-sm ring-1 ring-gray2 placeholder:text-gray2 focus:ring-2 focus:ring-outline-primer-2 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2 relative rounded-md shadow-sm">
              <input
                id="password"
                type="password"
                name="password"
                autoComplete="password"
                required
                placeholder='Enter your password...'
                className="block pl-4 w-full rounded-md border-0 py-1.5 text-black0 shadow-sm ring-1 ring-gray2 placeholder:text-gray2 focus:ring-2 focus:ring-outline-primer-2 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="passwordconfir"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password Confirmation
            </label>
            <div className="mt-2 relative rounded-md shadow-sm">
              <input
                id="passwordconfir"
                type="password"
                name="passwordconfir"
                placeholder="Password confirm..."
                autoComplete="password"
                required
                className="block pl-4 w-full rounded-md border-0 py-1.5 text-black0 shadow-sm ring-1 ring-gray2 placeholder:text-gray2 focus:ring-2 focus:ring-outline-primer-2 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

    <div className="mt-2 flex items-center">
  <input
    type="checkbox"
    id="infoDeclaration1"
    name="infoDeclaration"
    className="h-4 w-4 text-gray1 focus:ring-primer2 border-gray-300 rounded"
  />
  <label
    htmlFor="infoDeclaration1"
    className="ml-2 block text-sm text-gray1"
  >
    I declare that the information I have entered is correct and am responsible for any errors in the information
  </label>
</div>

<div className="mt-2 flex items-center">
  <input
    type="checkbox"
    id="infoDeclaration2"
    name="infoDeclaration"
    className="h-4 w-4 text-gray1 focus:ring-primer2 border-gray-300 rounded"
  />
  <label
    htmlFor="infoDeclaration2"
    className="ml-2 block text-sm text-gray1"
  >
    By creating an account, I agree to the Terms and Conditions, and Privacy Policy{' '}
    <Link
      href="/"
      className="text-primer2 font-semibold hover:animate-pulse"
    >
      Jalan Karirku
    </Link>
  </label>
</div>




          <div>
            <button
              type="submit"
              className="flex w-full justify-center bg-primer2 rounded-md px-3 py-1.5 text-sm font-semibold leading-6 hover:bg-primer1 active:ring text-white0 active-ring-gray2 mb-3 shadow-sm"
            >
              Sign Up
            </button>
            <p className="text-gray-500 mt-1 text-center">
              Already have an account?
              <Link
                href="/auth/login"
                className="text-blue-500 font-semibold  text-black-500 hover:animate-pulse inline-block ml-3"
              >
                Sign In
              </Link>
            </p>
          </div>

          <div className="flex items-center">
            <div className="border-t border-gray-300 flex-grow mr-5"></div>
            <p className="text-gray-600">Log in using another account</p>
            <div className="border-t border-gray-300 flex-grow ml-5"></div>
          </div>

          <div className="flex justify-center gap-4">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-black0 bg-primer3 hover:bg-primer2 hover:text-white0 active:ring active-ring-gray2 mb-3  shadow-sm"
            >
              <span className="flex gap-3 items-center">
                <Icon icon="flat-color-icons:google" />Google
              </span>
            </button>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-black0 bg-primer3 hover:bg-primer2 hover:text-white0 active:ring active-ring-gray2 mb-3  shadow-sm"
            >
              <span className="flex gap-3 items-center">
                <Icon icon="logos:facebook" /> Facebook
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
