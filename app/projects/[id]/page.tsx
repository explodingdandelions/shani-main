import Carousel from '@/components/Carousel';
import { projects } from '@/pages';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const projectId = (await params).id;
  const project = projects.find(proj => proj.id === projectId);
  return (
    <div className='flex flex-col items-center space-y-8'>
      <div className='text-left w-full'>
        <Link href={`/projects?category=${project?.category}`}>
          {'<'} {project?.category}
        </Link>
      </div>
      <h1 className={`text-3xl uppercase`}>{project?.name}</h1>
      {project?.imgSrcs?.length ? (
        <Carousel
          imgs={project?.imgSrcs}
          maxHeight={project?.maxHeight}
        />
      ) : null}
      <div className='max-w-xl mx-auto space-y-8 flex flex-col items-center '>
        <p className='text-center'>{project?.description}</p>
        {project?.urls?.length
          ? project.urls.map(url => (
              <Link
                href={url.src}
                className='flex shadow border-2 flex-col items-center rounded gap-2 p-4 text-center w-fit'
                key={url.src}>
                <p className='flex flex-col '>{url.description}</p>
                <FontAwesomeIcon
                  icon={faLink}
                  className='w-8 mr-2 flex'
                />
              </Link>
            ))
          : null}
      </div>
    </div>
  );
}
