'use client';

import sendContactEmail from '@/server/actions/sendEmail';
import { useState } from 'react';

// Client component
export default function ContactPage() {
  const [message, setMessage] = useState<string>('');
  const [success, setSuccess] = useState(false);

  async function handleSubmit(formData: FormData) {
    const result = await sendContactEmail(formData);
    setMessage(result.message);

    if (result.success) {
      setSuccess(true);
    }
  }
  if (success)
    return (
      <div className=' mx-auto p-8 rounded-lg  w-full max-w-md'>
        <h1 className='text-2xl font-bold mb-6 text-center text-gray-800'>
          Thank you!
        </h1>
        <h2 className='text-center'>{"I'll be in touch soon"}</h2>
      </div>
    );
  return (
    <div className=' mx-auto p-8 rounded-lg  w-full max-w-md'>
      <h1 className='text-2xl font-bold mb-6 text-center text-gray-800'>
        Contact Me
      </h1>

      <form
        action={handleSubmit}
        className='space-y-4'>
        <div>
          <input
            type='text'
            name='name'
            placeholder='Name'
            className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-700'
            required
          />
        </div>

        <div>
          <input
            type='email'
            name='email'
            placeholder='Email'
            className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-700'
            required
          />
        </div>

        <div>
          <textarea
            name='details'
            placeholder='Tell me anything...'
            className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-700 resize-none'
            rows={4}
            required
          />
        </div>

        <button
          type='submit'
          className='w-full bg-slate-700 text-white p-2 rounded-md hover:bg-slate-600 disabled:bg-slate-300 transition-colors'>
          Send Message
        </button>

        {message && (
          <p
            className={`text-center ${
              message.includes('success') ? 'text-green-700' : 'text-red-500'
            }`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
