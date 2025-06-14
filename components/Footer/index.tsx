import {
  faInstagram,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faBook, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { charm } from '@/app/fonts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center pb-10'>
      <Link
        href='/about/contact'
        className={`flex items-center cursor-pointer gap-2 hover:underline hover:underline-offset-4 text-2xl ${charm.className}`}>
        Contact
      </Link>
      <a
        className='flex items-center cursor-pointer gap-2 hover:underline hover:underline-offset-4'
        href='https://www.instagram.com/sha_zng'
        target='_blank'
        rel='noopener noreferrer'>
        <FontAwesomeIcon
          icon={faInstagram}
          className='w-6'
        />
      </a>
      <a
        className='flex items-center cursor-pointer gap-2 hover:underline hover:underline-offset-4'
        href='https://skincontact.substack.com/'
        target='_blank'
        rel='noopener noreferrer'>
        <FontAwesomeIcon
          icon={faBook}
          className='w-6'
        />
      </a>
      <a
        className='flex items-center cursor-pointer gap-2 hover:underline hover:underline-offset-4 text-black'
        href='https://twitter.com/sha_zng'
        target='_blank'
        rel='noopener noreferrer'>
        <FontAwesomeIcon
          icon={faXTwitter}
          className='w-6'
        />
      </a>
      <a
        className='flex items-center cursor-pointer gap-2 hover:underline hover:underline-offset-4'
        href='https://www.linkedin.com/in/shani-zhang'
        target='_blank'
        rel='noopener noreferrer'>
        <FontAwesomeIcon
          icon={faLinkedin}
          className='w-6'
        />
      </a>
      <Link
        className='flex items-center cursor-pointer gap-2 hover:underline hover:underline-offset-4'
        href='/about/contact'>
        <FontAwesomeIcon icon={faEnvelope} />
      </Link>
    </footer>
  );
}
