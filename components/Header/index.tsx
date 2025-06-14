'use client';

import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

import logo from '@/assets/logo.jpg';
import { getCategories } from '@/pages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);

  const renderCategoryLinks = () =>
    getCategories().map(cat => (
      <div key={cat}>
        <Link href={`/projects?category=${cat}`}>
          <h3 className='hover:border-b hover:text-teal-500 hover:border-b-slate-700 hover:scale-110 ease-in-out transition'>
            {cat}
          </h3>
        </Link>
      </div>
    ));

  return (
    <header className='flex flex-row w-full items-center justify-between md:px-20 md:py-10 p-4'>
      <Link href={'/'}>
        <Image
          alt='Shani Zhang'
          src={logo}
          width={200}
        />
      </Link>
      <div className='md:flex flex-row items-center justify-between hidden gap-4'>
        {renderCategoryLinks()}
        <Link href={`/about`}>
          <h3 className='hover:border-b hover:text-teal-500 hover:border-b-slate-700 hover:scale-110 ease-in-out transition'>
            About Me
          </h3>
        </Link>
      </div>
      <div
        className='flex md:hidden'
        onClick={() => setModalOpen(!modalOpen)}>
        <FontAwesomeIcon
          icon={faBars}
          size='2x'
        />
      </div>
      {modalOpen && (
        <div
          className=' absolute h-screen w-screen inset-0 bg-black/20 flex justify-center items-center z-50'
          onClick={() => setModalOpen(false)}>
          <div className='bg-white rounded shadow flex-col gap-8 flex justify-center items-center px-10 py-6'>
            <FontAwesomeIcon
              icon={faX}
              size='1x'
            />
            {renderCategoryLinks()}
            <Link href={`/about`}>
              <h3 className='hover:border-b hover:text-teal-500 hover:border-b-slate-700 hover:scale-110 ease-in-out transition'>
                About Me
              </h3>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
