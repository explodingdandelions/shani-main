import { projects } from '@/pages';
import Image from 'next/image';
import Link from 'next/link';

export default async function Projects({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const category = (await searchParams)?.category;
  return (
    <div className='flex flex-col w-full'>
      {category?.length && (
        <h2 className={`text-3xl text-center mb-8  `}>{category}</h2>
      )}
      <div className='grid  md:grid-cols-3 grid-cols-1 gap-8 w-full'>
        {(category?.length
          ? projects.filter(proj => proj.category === category)
          : projects
        )
          ?.filter(proj => !proj.hidden)
          .map(proj => (
            <Link
              key={proj.id}
              className='flex min-h-32 flex-col gap-4 w-full h-full items-center hover:scale-110 ease-in-out transition'
              href={`/projects/${proj.id}`}>
              <div className='w-full flex h-auto min-h-72 relative'>
                {!!proj?.imgSrcs?.length && (
                  <Image
                    src={proj?.imgSrcs?.[0]}
                    fill
                    alt='EERIE image'
                    className='object-contain '
                  />
                )}
              </div>
              <p>{proj.name}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}
