
'use client';

import { useState, useEffect } from 'react';
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
                  className={`absolute top-0 left-0 whitespace-nowrap transition-all duration-500 ease-in-out transform ${
                    index === currentWordIndex
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
        <section className="w-full max-h-screen my-4 md:px-2 bg-white">
          {/* Mobile layout - stack vertically */}
          <div className="block md:hidden space-y-4">
            <div className="w-full h-80 bg-gray-200 rounded-4xl border-l-8 border-r-8 border-white relative bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/hero02.jpg')" }}>
              <div className="p-0 absolute bottom-0 left-0 right-0">
                <div className="p-2 bg-white rounded-tr-3xl w-fit">
                  <p className="text-xs mx-2 font-semibold text-black border-1 border-black rounded-2xl px-1 py-1 mb-1">Gorgeous Interior</p>
                </div>
                <p className="text-4xl text-black p-2 px-6 bg-white w-fit rounded-tr-3xl max-w-full font-bold">Design</p>




                <p className="text-4xl text-black p-2 px-6 bg-white w-fit rounded-tr-3xl max-w-full font-bold">Services</p>
              </div>
            </div>
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
            <h2 className="text-3xl md:text-6xl font-bold text-gray-800 mb-1">Proudly Presenting Our <br/> Services</h2>
            <div className='md:flex flex-col items-end justify-between'>
           <button className='hidden md:block p-2 bg-black text-white rounded-2xl my-2'>View More</button>
            <p className="text-md text-gray-600 max-w-xl md:mx-8  truncate">Discover endless inspiration from our portfolio<br/> of stunning interior designs</p>
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
            <h2 className="text-3xl md:text-6xl font-bold text-gray-800 mb-1">Showcasing the Strength of <br/> Our Expertise</h2>
            <div className='md:flex flex-col items-end justify-between'>
           <button className='hidden md:block p-2 bg-black text-white rounded-2xl my-2'>View More</button>
            <p className="text-md text-gray-600 max-w-xl md:mx-8 truncate">Discover endless inspiration from our portfolio<br/> of stunning interior designs</p>
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
                  Engage with Us in <br className='hidden md:block'/> Conversation.
                </h1>
                <p className='text-gray-300 text-lg leading-relaxed max-w-lg'>
                  In a global world based on communication, a brand must look beyond its borders, open up to new experiences, and dare to be different. Meeting the brightest minds of one's time is the most effective way to nurture creativity.
                </p>
                <button className='mt-8 px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition duration-300'>
                  Start Conversation
                </button>
              </div>
              
              {/* Image */}
              <div className='flex flex-col space-y-6'>
                <div className='flex justify-center md:justify-end'>
                  <div className="w-full max-w-md h-[200px] md:h-[300px] bg-gray-800 rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center">
                    <img 
                      src="/icon.png" 
                      alt="Interior Design Conversation" 
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
            
            {/* Bottom row - Contact Form or Additional Content */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-gray-800'>
              <div className='text-center md:text-left'>
                <h3 className='text-xl font-semibold mb-4'>Get in Touch</h3>
                <p className='text-gray-400'>Ready to transform your space? Let's discuss your vision.</p>
              </div>
              <div className='text-center md:text-left'>
                <h3 className='text-xl font-semibold mb-4'>Our Process</h3>
                <p className='text-gray-400'>From concept to completion, we guide you through every step.</p>
              </div>
              <div className='text-center md:text-left'>
                <h3 className='text-xl font-semibold mb-4'>Why Choose Us</h3>
                <p className='text-gray-400'>Award-winning designs with personalized service and attention to detail.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}