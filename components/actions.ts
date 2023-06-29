// actions.ts
'use server';
import { redirect } from 'next/navigation';

export async function submitEmail(data: FormData) {
  const email = data.get('email');
  if (email) {
    // connect to database and store email
    redirect(`/?form=success&email=${email}`);
  }
  return;
}
