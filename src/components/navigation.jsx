"use client";
import { useEffect, useRef, useState } from "react";
export default function Navigation() {
    return (
        <>
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
        </>
    );
}