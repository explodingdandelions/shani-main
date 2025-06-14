import aboutImg from '@/assets/about.png';
import Image from 'next/image';
import { inter } from '../fonts';
export default function About() {
  return (
    <div
      className={`flex flex-col text-center items-center justify-center md:max-w-2xl mx-auto space-y-8 ${inter.className}`}>
      <h2 className='text-3xl '>{'About Me'}</h2>
      <Image
        src={aboutImg}
        alt='pic of me'
        height={400}
        width={500}
      />

      <p>
        When I am drawing someone, listening to them, I hear an orchestra—steady
        notes, a long line of music. Every groove, every turn they reveal feels
        precious. Our lives are full of these symphonies, waiting to be heard if
        we observe each other a little more closely.
      </p>
      <p>
        My art is rooted in this act of listening. Whether I’m capturing a
        fleeting moment at your wedding or painting a scene from your everyday
        life, what motivates me is the chance to glimpse a fragment of someone
        else’s world. The details that strike a chord, so deeply intimate they
        become universal, are what I translate into paint and paper.
      </p>
      <p>
        To me, the best art comes from this space of connection—where we see one
        another fully, and for a moment, the boundaries between us fade.
      </p>
      <p>
        If you’d like to collaborate on a piece or bring me into your story, I’d
        love to hear from you.
      </p>
      <h2 className='text-3xl'>{'FAQ'}</h2>
      <div>
        <p className='text-xl font-medium'>
          Where are you based, and do you travel for events?
        </p>
        <p>
          {`In 2025 I’m based in San Francisco but I love traveling for events. If you have a specific location in mind, let’s discuss the details.`}
        </p>
      </div>
      <div>
        <p className='text-xl font-medium'>What are your rates? </p>
        <p>Weddings: Packages start at $2,000.</p>
        <p>Corporate Events I typically charge $1,000 per hour.</p>
        <p>
          Other Events or Projects: Let’s talk! Rates vary based on the scope
          and details of your request. If price is a barrier, please reach
          out—I’m happy to explore options to make it work.
        </p>
      </div>
      <div>
        <p className='text-xl font-medium'>
          What do you need for live-event painting?
        </p>
        <p>
          A seat with a good view, reliable lighting, and enough space to set up
          my materials. I’ll bring all the supplies, so you don’t need to worry
          about anything else.
        </p>
      </div>
      <div>
        <p className='text-xl font-medium'>
          Can I reach out with a custom idea?
        </p>
        <p>
          Absolutely. Whether it’s a personal piece, a unique project, or
          something outside the box, I’d love to hear your vision. Let’s bring
          it to life together.
        </p>
      </div>
    </div>
  );
}
