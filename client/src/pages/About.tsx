import React from 'react'

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4'>About Home Haven</h1>
      <p className='mb-4 text-slate-700'>
        Home Haven is your trusted partner in finding the best home service professionals. 
        Our platform connects homeowners with skilled experts who can bring their home improvement projects to life.
      </p>
      <p className='mb-4 text-slate-700'>
        Whether it's a renovation, repair, or a new installation, Home Haven ensures you find the right professional 
        for the job, making your home a true haven.
      </p>
      <p className='mb-4 text-slate-700'>
        We are dedicated to matching you with top-rated service providers who understand your needs 
        and deliver quality results. Let us help you turn your house into a home.
      </p>
      
      <img src="../src/assets/img/logo.png" alt="Home Haven Logo" className="w-full max-w-xs mx-auto mt-8" />
    </div>
  )
}
