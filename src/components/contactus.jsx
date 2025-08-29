"use client";
import { useEffect, useRef, useState } from "react";

import Image from 'next/image';
export default function ContactUs() {
   
    return (
        <>
  <section className='bg-black text-white w-full py-16 md:py-24'>
          <div className='max-w-7xl mx-auto px-4 md:px-8'>
            {/* Top row - Text and Image */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16'>
              {/* Text Content */}
              <div className='space-y-6'>
                <h1 className='text-4xl md:text-6xl font-bold leading-tight'>
                  Engage with Us in <br className='hidden md:block' /> Conversation.
                </h1>
                <p className='text-gray-300 text-lg leading-relaxed max-w-lg mb-8'>
                  Ready to transform your space? Share your vision with us and let&apos;s create something extraordinary together.
                </p>
                
                {/* Contact Form */}
                <form className='space-y-4 max-w-lg'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                      <label htmlFor='contact-name' className='block text-sm font-medium text-gray-300 mb-2'>
                        Full Name *
                      </label>
                      <input
                        type='text'
                        id='contact-name'
                        name='name'
                        required
                        className='w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition duration-300'
                        placeholder='Your name'
                      />
                    </div>
                    <div>
                      <label htmlFor='contact-phone' className='block text-sm font-medium text-gray-300 mb-2'>
                        Phone Number *
                      </label>
                      <input
                        type='tel'
                        id='contact-phone'
                        name='phone'
                        required
                        className='w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition duration-300'
                        placeholder='+91 XXXXX XXXXX'
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor='contact-email' className='block text-sm font-medium text-gray-300 mb-2'>
                      Email Address *
                    </label>
                    <input
                      type='email'
                      id='contact-email'
                      name='email'
                      required
                      className='w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition duration-300'
                      placeholder='your.email@example.com'
                    />
                  </div>
                  <div>
                    <label htmlFor='contact-description' className='block text-sm font-medium text-gray-300 mb-2'>
                      Project Description
                    </label>
                    <textarea
                      id='contact-description'
                      name='description'
                      rows={4}
                      className='w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition duration-300 resize-vertical'
                      placeholder='Tell us about your interior design project, room type, budget, and specific requirements...'
                    />
                  </div>
                  <button
                    type='submit'
                    className='mt-6 px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black'
                  >
                    Start Conversation
                  </button>
                </form>
              </div>

              {/* Image */}
              <div className='flex flex-col space-y-6'>
                <div className='flex justify-center md:justify-end'>
                  <div className="w-full max-w-md h-[200px] md:h-[300px] bg-gray-800 rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center">
                    <Image
                      src="/icon.png"
                      alt="Interior Design Conversation"
                      width={400}
                      height={300}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                </div>
                <div className='text-center md:text-right space-y-4'>
                  <h1 className='text-4xl md:text-6xl font-bold'>MAX ELITE</h1>
                  <div className='space-y-2 text-gray-300'>
                    <p className='text-sm md:text-base leading-relaxed'>
                      Address: Giri Market Complex, Arad Bazar, Near Nuniajodi Bridge, Balasore, Odisha, Pin - 756001
                    </p>
                    <p className='text-sm md:text-base font-medium'>
                      Contact: +91 96740 34762, +91 77498 25303
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
        </>
    );}