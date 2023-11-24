'use client';
import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Button from './btn'

export default function Navbar({auth = false}) {
if(auth ===  true) {
  return (
        <>
      <nav className="bg-white">
        <div className=" flex flex-wrap items-center justify-between mx-auto xl:py-4 xl:px-32 p-4">
          <Link href="#" className="flex items-center">
            <img
              width="145px"
              height="51px"
              src="/assets/img/main logo.png"
            />
          </Link>

          <div className="flex flex-wrap items-center justify-between xl:gap-10 sm:gap-0 md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-10 focus:outline-none rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-black-500"
                placeholder="Search..."
              />
            </div>

            <button
              type="button"
              className="flex mr-3 text-sm"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <Icon icon="mdi:bell" width="35px" className="text-primer1" />
            </button>

            {/*profile*/}
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <Link href={'/dashboard'}>
              <img
                className="w-8 h-8 rounded-full"
                src="\assets\img\Ellipse 2.png"
                alt="user photo"
              />
              </Link>
            </button>
            <div
              className="z-50 hidden my-4 text-base list-none"
              id="user-dropdown"
            >
              <span className="block text-sm text-gray-900 dark:text-white">
                Mr Bla
              </span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                MrBla@gmail.com
              </span>
            </div>

            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="hidden flex-grow lg:pl-10 items-center justify-between  w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm"
                placeholder="Search..."
              ></input>
            </div>
            <ul className="flex flex-col items-center justify-center lg:gap-10 font-small md:flex-row">
              <li>
                <Link href="/" className="text-1xl text-primer1" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/e-learning" className="text-1xl text-primer1">
                  E-Learning
                </Link>
              </li>
              <li>
                <Link href="/webinar" className="text-1xl text-primer1">
                  Webinar
                </Link>
              </li>
              <li>
                <Link href="/counseling" className="text-1xl text-primer1">
                  Counseling
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
  return (
    <>
      <nav className="bg-white">
        <div className=" flex flex-wrap items-center justify-between mx-auto xl:py-4 xl:px-32 p-4">
          <Link href="#" className="flex items-center">
            <img
              width="145px"
              height="51px"
              src="/assets/img/main logo.png"
            />
          </Link>

          <div className="flex flex-wrap items-center justify-between xl:gap-10 sm:gap-0 md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-10 focus:outline-none rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          {/* LOGIN/REGISTER */}
          <Button type="link" href="/auth/login" className="btn-primary-sm">Sign in</Button>
          <Button type="link" href="/auth/register" className="btn-primary-sm">Sign up</Button>

          </div>
          <div
            className="hidden flex-grow lg:pl-10 items-center justify-between  w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm"
                placeholder="Search..."
              ></input>
            </div>
            <ul className="flex flex-col items-center justify-center lg:gap-10 font-small md:flex-row">
              <li>
                <Link href="/" className="text-1xl text-primer1" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/e-learning" className="text-1xl text-primer1">
                  E-Learning
                </Link>
              </li>
              <li>
                <Link href="/webinar" className="text-1xl text-primer1">
                  Webinar
                </Link>
              </li>
              <li>
                <Link href="/counseling" className="text-1xl text-primer1">
                  Counseling
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
