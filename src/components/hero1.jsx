"use client";
import { useEffect, useRef, useState } from "react";

import Image from 'next/image';
export default function Hero1() {
   
    return (
        <>
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
          <div className="hidden md:grid grid-cols-3 grid-rows-3 gap-4 my-4 h-fit">
            <div className="p-1 bg-gray-200 col-span-2 row-span-3 rounded-4xl  relative bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/hero02.jpg')" }}>
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
        </>
    );}
