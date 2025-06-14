export default function Home() {
  return (
    <video
      className='flex w-full min-h-[60vh]  object-cover aspect-square md:aspect-video'
      autoPlay
      playsInline
      loop
      muted
      preload='auto'>
      <source
        src='/sketch.mp4'
        type='video/mp4'
      />
    </video>
  );
}
