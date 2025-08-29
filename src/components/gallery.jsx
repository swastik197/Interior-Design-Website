"use client";
import { useEffect, useRef, useState } from "react";

import Image from 'next/image';
export default function Gallery() {

    return (
        <>
            <section className='w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
                <div className="w-full px-4 md:px-8 mb-8 my-4 flex flex-col md:flex-row md:justify-between items-baseline">
                    <h2 className="text-3xl md:text-6xl font-bold text-gray-800 mb-1">Our Work Sepaks</h2>
                    <div className='md:flex flex-col items-end justify-between'>
                        <button className='hidden md:block p-2 bg-black text-white rounded-2xl my-2'>View More</button>
                        <p className="text-md leading-relaxed md:text-end text-gray-600 max-w-xl truncate">Discover endless inspiration from our portfolio <br /> of stunning interior designs</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 [grid-template-rows:1fr_0.29fr_1fr] w-[900px] md:w-[1400px] min-h-[400px] md:min-h-[600px] gap-4 py-4 px-4 md:px-2 mx-auto">

                    <div className="rounded-3xl  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: ` linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2), transparent),url('/img1.jpg')` }}></div>

                    <div className="rounded-3xl row-span-2 bg-red-400 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: ` linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2), transparent),url('/img7.jpg')` }}></div>

                    <div className="rounded-3xl bg-green-400 bg-cover bg-center bg-no-repeat " style={{ backgroundImage: ` linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2), transparent),url('/img3.jpg')` }}></div>

                    <div className="rounded-3xl row-span-3 bg-yellow-400 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: ` linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2), transparent),url('/img4.jpg')` }}></div>

                    <div className="rounded-3xl row-span-3 bg-pink-400 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: ` linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2), transparent),url('/img8.jpg')` }}></div>

                    <div className="rounded-3xl bg-orange-400 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: ` linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2), transparent),url('/img6.jpg')` }}></div>

                </div>

            </section>
        </>
    );
}