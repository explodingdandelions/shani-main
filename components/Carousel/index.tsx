'use client';

import Image, { StaticImageData } from 'next/image';

import { useState } from 'react';

export default function Carousel({
  imgs,
  maxHeight,
}: {
  imgs: StaticImageData[];
  maxHeight?: number;
}) {
  const [imgIndex, setImgIndex] = useState(0);
  return (
    <div className='flex flex-col flex-1 w-full h-full'>
      <div className={`relative flex w-full justify-center h-auto min-h-96`}>
        <Image
          src={imgs[imgIndex]}
          alt='image'
          objectFit='contain'
          height={maxHeight}
          width={maxHeight}
        />
      </div>
      <div className=' gap-4 mt-4 w-full flex-wrap grid grid-cols-3 md:grid-cols-6 '>
        {imgs.length > 1
          ? imgs.map((img, index) => (
              <div
                key={'img-' + index}
                className={`relative aspect-square  hover:scale-110  flex justify-center items-center transition overflow-clip ease-in-out ${
                  index === imgIndex
                    ? 'outline-2 outline outline-slate-600  rounded shadow-lg'
                    : ''
                }`}
                onClick={() => setImgIndex(index)}>
                <Image
                  fill
                  src={img}
                  alt='img'
                  className='object-cover'
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
