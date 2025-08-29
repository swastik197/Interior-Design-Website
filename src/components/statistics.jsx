"use client";
import { useEffect, useRef, useState } from "react";

import Image from 'next/image';
export default function Statistics() {
   
    return (
        <>
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
        </>
    );}