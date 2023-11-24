'use client';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Login() {
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

      <div className="grid grid-cols-2 gap-8 min-h-full px-6 py-12 pb-24">
        <div className="col-span-1 w-full flex justify-center items-center relative">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            loading="eager"
            src="/assets/img/login.svg"
            alt="jalankarirku"
            className=" w-full max-w-sm max-auto"
          />
        </div>

        <div className="col-span-1">
          <div className="sm:mx-auto sm:w-full sm:max-wsm">
            <h2 className="text-center text-[54px] font-bold leading-9 tracking-tight text-gray-900">
              Sign In
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="username & email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username or Email
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Enter your username..."
                    autoComplete="username"
                    required
                    className="block pl-4 w-full rounded-md border-0 py-1.5 text-black0 shadow-sm ring-1 ring-gray2 placeholder:text-gray2 focus:ring-2 focus:ring-outline-primer-2 sm:text-sm sm:leading-6
"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter your password here..."
                    autoComplete="password"
                    required
                    className="block pl-4 w-full rounded-md border-0 py-1.5 text-black0 shadow-sm ring-1 ring-gray2 placeholder:text-gray2 focus:ring-2 focus:ring-outline-primer-2 sm:text-sm sm:leading-6
"
                  />
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold p-3  text-primer2 hover:text-primer1 float-right text-right"
                    >
                      {' '}
                      Forgot Password?
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center bg-primer2 rounded-md px-3 py-1.5 text-sm font-semibold leading-6 hover:bg-primer1 active:ring text-white0 active-ring-gray2 mb-3 shadow-sm"
                >
                  Sign In
                </button>
                <p className="text-gray-500 mt-1 text-center">
                  Don't have an account yet?
                  <Link
                    href="/auth/register"
                    className="text-primer2 font-semibold text-black-500 hover:animate-pulse inline-block ml-2"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>

              <div className="flex items-center">
                <div className="border-t border-gray-300 flex-grow mr-5"></div>
                <p className="text-gray-600">Login using another account</p>
                <div className="border-t border-gray-300 flex-grow ml-5"></div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center bg-primer4 rounded-md px-3 py-1.5 text-sm font-semibold leading-6 hover:bg-primer2 hover:text-white0 active:ring active-ring-gray2 mb-3 shadow-sm"
                >
                  <span className="flex items-center gap-3">
                    <Icon icon="flat-color-icons:google" /> Google
                  </span>
                </button>
                <button
                  type="submit"
                  className="flex w-full justify-center bg-primer4 rounded-md px-3 py-1.5 text-sm font-semibold leading-6 hover:bg-primer2 hover:text-white0 active:ring active-ring-gray2 mb-3 shadow-sm"
                >
                  <span className="flex items-center gap-3">
                    <Icon icon="logos:facebook" /> Facebook
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
