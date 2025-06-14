'use server';

import { Resend } from 'resend';

const resend = new Resend('re_YfT7TZps_CnNUkeoK5RTE76HuyS7JiApA');

// Server action to handle form submission
export default async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const details = formData.get('details') as string;

  // Basic validation
  if (!name || !email || !details) {
    throw new Error('All fields are required');
  }

  try {
    await resend.emails.send({
      from: `Acme <onboarding@resend.dev>`,
      to: ['shani@uni.minerva.edu'],
      subject: 'New Contact on form',
      html: `<div>
      <p> Name: ${name}</p>
      <p> Email: ${email}</p>
      <p> Details: ${details}</p> 
    </div>`,
    });

    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An error occurred',
    };
  }
}
