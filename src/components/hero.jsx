"use client";
import { useEffect, useRef, useState } from "react";

import Image from 'next/image';
export default function Hero() {
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
        </>
    );
}