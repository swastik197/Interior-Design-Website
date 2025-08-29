
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Marquee from "react-fast-marquee";
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const animatedWords = ['Home', 'Office', 'Kitchen', 'Bedroom', 'Bathroom', 'Studio'];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % animatedWords.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, [animatedWords.length]);
  return (
    <>
      <main className="flex flex-col  items-center min-h-screen w-full bg-white">
        <nav className="fixed top-0 left-0 right-0 w-full flex items-center justify-between z-50 px-4 md:px-6 py-4  ">
          <div className="ml-2 md:ml-0">
            <p className="text-xl md:text-2xl font-bold text-white drop-shadow-lg backdrop-blur-xl p-1.5 rounded-xl">MAX ELITE</p>
          </div>
          <ul className="hidden md:flex md:space-x-4 text-gray-200 items-center px-6 py-2 rounded-full bg-black/20 backdrop-blur-xl border border-white/10">
            <li className="active px-3 py-2 cursor-pointer hover:text-white transition-colors rounded-full hover:bg-white/10">Home</li>
            <li className="active px-3 py-2 cursor-pointer hover:text-white transition-colors rounded-full hover:bg-white/10">Services</li>
            <li className="active px-3 py-2 cursor-pointer hover:text-white transition-colors rounded-full hover:bg-white/10">About</li>
            <li className="active px-3 py-2 cursor-pointer hover:text-white transition-colors rounded-full hover:bg-white/10">Contact</li>
          </ul>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 text-white bg-white/5 rounded-full backdrop-blur-xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-3 mr-2 md:mr-0">
            <button className="p-2 bg-pink-600/80 text-white rounded-full transition duration-300 hover:bg-pink-600 backdrop-blur-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="p-2 bg-red-600/80 text-white rounded-full transition duration-300 hover:bg-red-600 backdrop-blur-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </nav>
        <section className="flex flex-col items-center justify-center min-h-[350px] md:min-h-[700px] lg:min-h-screen min-w-full rounded-b-xl bg-cover bg-center bg-no-repeat px-4 pt-20" style={{ backgroundImage: "url('/0502010004-01-Minimalist-Interior-Style.jpg')" }}>

          <h1 className={`text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
            <span className="inline-block animate-pulse">Transform</span>{' '}
            <span className="inline-block bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent animate-bounce">Your</span>{' '}
            <span className="inline-block relative " style={{ height: '1.2em', width: 'auto', minWidth: '200px' }}>
              {animatedWords.map((word, index) => (
                <span
                  key={`${word}-${index}`}
                  className={`absolute top-0 left-0 whitespace-nowrap transition-all duration-500 ease-in-out transform ${index === currentWordIndex
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-full opacity-0'
                    }`}
                  style={{
                    transitionDelay: index === currentWordIndex ? '0ms' : '0ms'
                  }}
                >
                  {word}
                </span>
              ))}
            </span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-white text-center max-w-2xl">We offer a variety of services to help you succeed.</p>
          <button className="mt-6 px-4 md:px-6 py-2 md:py-3 bg-white text-blue-500 rounded-full hover:bg-gray-100 transition duration-300 text-sm md:text-base">
            Get Started
          </button>
        </section>
        <section className="w-full max-h-screen my-8 md:px-2 bg-white">
          {/* Mobile layout - stack vertically */}
          <div className="block md:hidden space-y-8">
            <div className="flex flex-row w-full gap-2 border-l-8 border-r-8 border-white h-40">
              <div className="bg-stone-100 p-4 w-1/3 flex flex-col justify-center rounded-2xl">
                <div>
                  <p className="border-2 rounded-2xl text-black px-2 py-1 w-fit text-xs mb-2">Aesthetic</p>
                  <p className="text-xs text-gray-700 mb-2">
                    Aesthetic designs where every piece tells a story
                  </p>
                  <h1 className="text-sm font-semibold text-gray-800">Into a gallery of elegance</h1>
                </div>
              </div>
              <div className="w-2/3 flex items-center justify-center rounded-2xl bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/spacejoy_q3_Qd86sfao_U_unsplash_ee33419bee.jpg')" }}>
                {/* Background image container */}
              </div>
            </div>

            <div className="w-full h-80 bg-gray-200 rounded-4xl border-l-8 border-r-8 border-white relative bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/hero02.jpg')" }}>
              <div className="p-0 absolute bottom-0 left-0 right-0">
                <div className="p-2 bg-white rounded-tr-3xl w-fit">
                  <p className="text-xs mx-2 font-semibold text-black border-1 border-black rounded-2xl px-1 py-1 mb-1">Gorgeous Interior</p>
                </div>
                <p className="text-4xl text-black p-2 px-6 bg-white w-fit rounded-tr-3xl max-w-full font-bold">Design</p>




                <p className="text-4xl text-black p-2 px-6 bg-white w-fit rounded-tr-3xl max-w-full font-bold">Services</p>
              </div>
            </div>


          </div>

          {/* Desktop layout - grid */}
          <div className="hidden md:grid grid-cols-3 grid-rows-3 gap-4 my-4 h-screen">
            <div className="p-1 bg-gray-200 col-span-2 row-span-3 rounded-4xl h-full relative bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/hero02.jpg')" }}>
              <div className="p-0 absolute bottom-0 left-0 right-0">
                <div className="p-3 bg-white rounded-tr-4xl w-fit">
                  <p className="text-lg mx-2 font-semibold text-black border-2 border-black rounded-3xl px-3 py-1 mb-2">Gorgeous Interior</p>
                </div>
                <p className="text-8xl text-black p-3 px-4 bg-white w-fit rounded-tr-4xl max-w-full font-bold">Design</p>
                <p className="text-8xl text-black p-3 px-4 bg-white w-fit rounded-tr-4xl max-w-full font-bold">Services</p>
              </div>
            </div>
            <div className="bg-stone-100 p-4 flex flex-col justify-center rounded-2xl ">
              <div>
                <p className="border-2 rounded-2xl text-black px-2 py-1 w-fit ">Asthetic</p>
                <p className="text-sm md:text-base text-gray-700 my-2 truncate ">
                  Aesthetic designs where every<br />piece tells a story
                </p>
                <h1 className="text-lg md:text-4xl font-semibold text-gray-800 truncate">Into a gallery <br />of elegance</h1>
              </div>

            </div>
            <div className="bg-gray-400 row-span-2 p-4 flex items-center justify-center rounded-2xl bg-cover bg-center overflow-hidden " style={{ backgroundImage: "url('/spacejoy_q3_Qd86sfao_U_unsplash_ee33419bee.jpg')" }}>

            </div>
          </div>
        </section>
        <section className="w-full h-fit flex justify-between flex-wrap text-gray-800 my-4">
          <div className="mx-2 md:mx-20 md:my-8 flex flex-col items-center">
            <h1 className="text-2xl md:text-7xl font-bold">500+</h1>
            <p className="text-xs md:text-lg text-gray-500 font-semibold">Products</p>
          </div>
          <div className="mx-2 md:mx-20 md:my-8 flex flex-col items-center">
            <h1 className="text-2xl md:text-7xl  font-bold">20+</h1>
            <p className="text-xs md:text-lg text-gray-500 font-semibold">Projects</p>
          </div>

          <div className="mx-2 md:mx-20 md:my-8 flex flex-col items-center">
            <h1 className="text-2xl md:text-7xl font-bold">50+</h1>
            <p className="text-xs md:text-lg text-gray-500 font-semibold">Satisfied Customers</p>
          </div>
          <div className="mx-2 md:mx-20 md:my-8 flex flex-col items-center">
            <h1 className="text-2xl md:text-7xl font-bold">1st</h1>
            <p className="text-xs md:text-lg text-gray-500 font-semibold">In Odisha</p>
          </div>
        </section>

        {/* Infinite Scroller Section */}
        <section className="w-full py-4 bg-gradient-to-r from-gray-50 to-gray-100 ">

          <div className="mb-8 mx-2 md:mx-8 my-4 flex flex-col md:flex-row md:justify-between items-baseline">
            <h2 className="text-3xl md:text-6xl font-bold text-gray-800 mb-1">Proudly Presenting Our <br /> Services</h2>
            <div className='md:flex flex-col items-end justify-between'>
              <button className='hidden md:block p-2 bg-black text-white rounded-2xl my-2'>View More</button>
              <p className="text-md text-gray-600 max-w-xl md:mx-8  truncate">Discover endless inspiration from our portfolio<br /> of stunning interior designs</p>
            </div>
          </div>

          {/* First Row - Moving Right */}
          <Marquee
            speed={60}
            pauseOnHover={true}
            direction="left">
            <div className="flex space-x-6 animate-scroll-right mb-8">
              {/* First set of cards */}
              <div className="flex-shrink-0 ml-6 w-80 h-60 bg-white rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="h-3/4 bg-gradient-to-br from-blue-400 to-purple-600 relative">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Modern Living</h3>
                    <p className="text-sm opacity-90">Minimalist Design</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">Clean lines and open spaces</p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-60 bg-white rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="h-3/4 bg-gradient-to-br from-green-400 to-teal-600 relative">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Natural Vibes</h3>
                    <p className="text-sm opacity-90">Eco-Friendly</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">Sustainable materials</p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-60 bg-white rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="h-3/4 bg-gradient-to-br from-pink-400 to-red-600 relative">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Luxury Suite</h3>
                    <p className="text-sm opacity-90">Premium Design</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">Elegant and sophisticated</p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-60 bg-white rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="h-3/4 bg-gradient-to-br from-yellow-400 to-orange-600 relative">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Warm Kitchen</h3>
                    <p className="text-sm opacity-90">Cozy & Functional</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">Heart of the home</p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-60 bg-white rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="h-3/4 bg-gradient-to-br from-indigo-400 to-blue-600 relative">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Office Space</h3>
                    <p className="text-sm opacity-90">Productive Design</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">Inspiring work environment</p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-60 bg-white rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="h-3/4 bg-gradient-to-br from-purple-400 to-pink-600 relative">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Bedroom Retreat</h3>
                    <p className="text-sm opacity-90">Peaceful Haven</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">Rest and relaxation</p>
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex-shrink-0 w-80 h-60 bg-white rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="h-3/4 bg-gradient-to-br from-blue-400 to-purple-600 relative">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Modern Living</h3>
                    <p className="text-sm opacity-90">Minimalist Design</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">Clean lines and open spaces</p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-60 bg-white rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="h-3/4 bg-gradient-to-br from-green-400 to-teal-600 relative">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Natural Vibes</h3>
                    <p className="text-sm opacity-90">Eco-Friendly</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">Sustainable materials</p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-60 bg-white rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="h-3/4 bg-gradient-to-br from-pink-400 to-red-600 relative">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Luxury Suite</h3>
                    <p className="text-sm opacity-90">Premium Design</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">Elegant and sophisticated</p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-60 bg-white rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="h-3/4 bg-gradient-to-br from-yellow-400 to-orange-600 relative">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Warm Kitchen</h3>
                    <p className="text-sm opacity-90">Cozy & Functional</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">Heart of the home</p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-60 bg-white rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="h-3/4 bg-gradient-to-br from-indigo-400 to-blue-600 relative">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Office Space</h3>
                    <p className="text-sm opacity-90">Productive Design</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">Inspiring work environment</p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-60 bg-white rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="h-3/4 bg-gradient-to-br from-purple-400 to-pink-600 relative">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Bedroom Retreat</h3>
                    <p className="text-sm opacity-90">Peaceful Haven</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">Rest and relaxation</p>
                </div>
              </div>
            </div>
          </Marquee>
          {/* Second Row - Moving Left */}
          <Marquee speed={50} pauseOnHover={true} direction="right" >
            <div className="flex space-x-6 animate-scroll-right mb-4">
              <div className="flex-shrink-0 w-80 ml-6 h-60 bg-white rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="h-3/4 bg-gradient-to-br from-teal-400 to-green-600 relative">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Garden Room</h3>
                    <p className="text-sm opacity-90">Nature Indoor</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">Bringing outdoors in</p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-60 bg-white rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="h-3/4 bg-gradient-to-br from-orange-400 to-red-600 relative">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Art Studio</h3>
                    <p className="text-sm opacity-90">Creative Space</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">Inspiration flows freely</p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-60 bg-white rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="h-3/4 bg-gradient-to-br from-cyan-400 to-blue-600 relative">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Spa Bathroom</h3>
                    <p className="text-sm opacity-90">Wellness Focus</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">Personal sanctuary</p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-60 bg-white rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="h-3/4 bg-gradient-to-br from-rose-400 to-pink-600 relative">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Kids Room</h3>
                    <p className="text-sm opacity-90">Playful Design</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">Fun and functional</p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-60 bg-white rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="h-3/4 bg-gradient-to-br from-violet-400 to-purple-600 relative">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Reading Nook</h3>
                    <p className="text-sm opacity-90">Quiet Corner</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">Perfect for book lovers</p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-60 bg-white rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="h-3/4 bg-gradient-to-br from-emerald-400 to-teal-600 relative">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Dining Room</h3>
                    <p className="text-sm opacity-90">Social Hub</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">Where memories are made</p>
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex-shrink-0 w-80 h-60 bg-white rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="h-3/4 bg-gradient-to-br from-teal-400 to-green-600 relative">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Garden Room</h3>
                    <p className="text-sm opacity-90">Nature Indoor</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">Bringing outdoors in</p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-60 bg-white rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="h-3/4 bg-gradient-to-br from-orange-400 to-red-600 relative">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Art Studio</h3>
                    <p className="text-sm opacity-90">Creative Space</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">Inspiration flows freely</p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-60 bg-white rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="h-3/4 bg-gradient-to-br from-cyan-400 to-blue-600 relative">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Spa Bathroom</h3>
                    <p className="text-sm opacity-90">Wellness Focus</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">Personal sanctuary</p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-60 bg-white rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="h-3/4 bg-gradient-to-br from-rose-400 to-pink-600 relative">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Kids Room</h3>
                    <p className="text-sm opacity-90">Playful Design</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">Fun and functional</p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-60 bg-white rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="h-3/4 bg-gradient-to-br from-violet-400 to-purple-600 relative">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Reading Nook</h3>
                    <p className="text-sm opacity-90">Quiet Corner</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">Perfect for book lovers</p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 h-60 bg-white rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-500">
                <div className="h-3/4 bg-gradient-to-br from-emerald-400 to-teal-600 relative">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Dining Room</h3>
                    <p className="text-sm opacity-90">Social Hub</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">Where memories are made</p>
                </div>
              </div>
            </div>
          </Marquee>
        </section>
        <section className='w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
          <div className="w-full px-4 md:px-8 mb-8 my-4 flex flex-col md:flex-row md:justify-between items-baseline">
            <h2 className="text-3xl md:text-6xl font-bold text-gray-800 mb-1">Showcasing the Strength of <br /> Our Expertise</h2>
            <div className='md:flex flex-col items-end justify-between'>
              <button className='hidden md:block p-2 bg-black text-white rounded-2xl my-2'>View More</button>
              <p className="text-md text-gray-600 max-w-xl md:mx-8 truncate">Discover endless inspiration from our portfolio<br /> of stunning interior designs</p>
            </div>
          </div>
          <div className="grid grid-cols-3 [grid-template-rows:1fr_0.29fr_1fr] w-[900px] md:w-[1400px] min-h-[400px] md:min-h-[600px] gap-4 py-4 px-4 md:px-2 mx-auto">
            <div className="rounded-3xl bg-blue-400"></div>
            <div className="rounded-3xl row-span-2 bg-red-400"></div>
            <div className="rounded-3xl bg-green-400"></div>
            <div className="rounded-3xl row-span-3 bg-yellow-400"></div>
            <div className="rounded-3xl row-span-3 bg-pink-400"></div>
            <div className="rounded-3xl bg-orange-400"></div>
          </div>

        </section>

        {/* Contact/Engagement Section */}
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

        {/* Footer Section */}
        <footer className='bg-gray-900 text-white w-full py-16'>
          <div className='max-w-7xl mx-auto px-4 md:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-12'>
              {/* Company Info */}
              <div className='space-y-4'>
                <h3 className='text-2xl font-bold'>MAX ELITE</h3>
                <p className='text-gray-400 text-sm leading-relaxed'>
                  Transforming spaces with innovative interior design solutions. Your dream space is our passion.
                </p>
                <div className='flex space-x-4'>
                  <a href='#' className='text-gray-400 hover:text-white transition-colors'>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'/>
                    </svg>
                  </a>
                  <a href='#' className='text-gray-400 hover:text-white transition-colors'>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z'/>
                    </svg>
                  </a>
                  <a href='#' className='text-gray-400 hover:text-white transition-colors'>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                    </svg>
                  </a>
                  <a href='#' className='text-gray-400 hover:text-white transition-colors'>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.282-.744 2.840-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z'/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className='space-y-4'>
                <h4 className='text-lg font-semibold'>Quick Links</h4>
                <ul className='space-y-2 text-gray-400'>
                  <li><a href='#' className='hover:text-white transition-colors'>Home</a></li>
                  <li><a href='#' className='hover:text-white transition-colors'>About Us</a></li>
                  <li><a href='#' className='hover:text-white transition-colors'>Portfolio</a></li>
                  <li><a href='#' className='hover:text-white transition-colors'>Blog</a></li>
                  <li><a href='#' className='hover:text-white transition-colors'>Contact</a></li>
                </ul>
              </div>

              {/* Services */}
              <div className='space-y-4'>
                <h4 className='text-lg font-semibold'>Our Services</h4>
                <ul className='space-y-2 text-gray-400'>
                  <li><a href='#' className='hover:text-white transition-colors'>Residential Design</a></li>
                  <li><a href='#' className='hover:text-white transition-colors'>Commercial Design</a></li>
                  <li><a href='#' className='hover:text-white transition-colors'>Space Planning</a></li>
                  <li><a href='#' className='hover:text-white transition-colors'>3D Visualization</a></li>
                  <li><a href='#' className='hover:text-white transition-colors'>Consultation</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className='space-y-4'>
                <h4 className='text-lg font-semibold'>Contact Info</h4>
                <div className='space-y-3 text-gray-400'>
                  <div className='flex items-start space-x-3'>
                    <svg className='w-5 h-5 mt-0.5 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd' />
                    </svg>
                    <p className='text-sm'>Giri Market Complex, Arad Bazar, Near Nuniajodi Bridge, Balasore, Odisha - 756001</p>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <svg className='w-5 h-5 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                    </svg>
                    <div>
                      <p className='text-sm'>+91 96740 34762</p>
                      <p className='text-sm'>+91 77498 25303</p>
                    </div>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <svg className='w-5 h-5 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                      <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                    </svg>
                    <p className='text-sm'>info@maxelite.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className='border-t border-gray-800 pt-8'>
              <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
                <p className='text-gray-400 text-sm'>
                  © 2025 MAX ELITE. All rights reserved.
                </p>
                <div className='flex space-x-6 text-sm text-gray-400'>
                  <a href='#' className='hover:text-white transition-colors'>Privacy Policy</a>
                  <a href='#' className='hover:text-white transition-colors'>Terms of Service</a>
                  <a href='#' className='hover:text-white transition-colors'>Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}