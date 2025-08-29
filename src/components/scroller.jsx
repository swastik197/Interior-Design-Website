"use client";

import Marquee from "react-fast-marquee";
const data = [
  {
    title: "3D Wallpaper",
    about: "Modern textured wall design",
    description: "Stunning visual depth effects",
    img:`/3D_Wallpaper.jpg`
  },
  {
    title: "Artificial Grass",
    about: "Maintenance-free green flooring",
    description: "Natural look, zero upkeep",
    img:`/Artificial_Grass.jpg`
  },
  {
    title: "Window Blinds",
    about: "Light control window solutions",
    description: "Privacy with style options",
    img:`/Window_Blinds.jpg`
  },
  {
    title: "False Ceiling",
    about: "Elegant overhead design solutions",
    description: "Hidden lighting, modern appeal",
    img:`/False_Ceiling.png`
  },
  {
    title: "Poly Granite Sheet",
    about: "Durable stone-look surfaces",
    description: "Premium finish, easy maintenance",
    img:`/Poly_Granite_Sheet.jpg`
  },
  {
    title: "UV Self Adhesive Marble Sheet",
    about: "Luxury marble appearance coating",
    description: "Quick install, elegant finish",
    img:`/UV_Self_Adhesive_Marble_Sheet.jpg`
  },
  {
    title: "Fluted Panel",
    about: "Textured decorative wall panels",
    description: "Contemporary grooved design element",
    img:`/Fluted_Panel.jpg`
  },
  {
    title: "Modular Kitchen",
    about: "Smart space kitchen solutions",
    description: "Functional design, maximum storage",
    img:`/Modular_Kitchen.jpg`
  },
  {
    title: "Office Interior",
    about: "Professional workspace design",
    description: "Productive, modern office environments",
img:`/Office_Interior.png`
  },
  {
    title: "Bed Room Interior",
    about: "Peaceful sleeping space design",
    description: "Comfort meets elegant style",
    img:`/Bed_Room_Interior.png`
  },
  {
    title: "Showroom Interior",
    about: "Commercial display space design",
    description: "Attract customers, showcase products",
    img:`/Showroom_Interior.jpg`
  }
]
export default function Scroller() {

  return (
    <>
      <section className="w-full py-4 bg-gradient-to-r from-gray-50 to-gray-100 ">

        <div className="mb-8 mx-2 md:mx-8 my-4 flex flex-col md:flex-row md:justify-between items-baseline">
          <h2 className="text-3xl md:text-6xl font-bold text-gray-800 mb-1">Proudly Presenting Our <br /> Services</h2>
          <div className='md:flex flex-col items-end justify-between'>
            <button className='hidden md:block p-2 bg-black text-white rounded-2xl my-2'>View More</button>
            <p className="text-md md:text-end text-gray-600 max-w-xl truncate">Discover endless inspiration from our portfolio<br /> of stunning interior designs</p>
          </div>
        </div>

        {/* First Row - Moving Right */}
        <Marquee
          speed={60}
          pauseOnHover={true}
          direction="left">
          <div className="flex space-x-6 animate-scroll-right mb-8">
            {/* First set of cards */}
            {data.map((ele, idx) => (
              <div key={idx} className="flex-shrink-0 w-80 h-60 bg-white rounded-2xl shadow-lg overflow-hidden mx-2 group hover:scale-105 transition-transform duration-500">
                <div className="h-3/4 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${ele.img})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <h3 className="text-xl font-bold drop-shadow-lg">{ele.title}</h3>
                    <p className="text-sm opacity-90 drop-shadow-md">{ele.about}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">{ele.description}</p>
                </div>
              </div>
            ))}
            </div>
        </Marquee>
        {/* Second Row - Moving Left */}
        <Marquee
          speed={60}
          pauseOnHover={true}
          direction="right">
          <div className="flex space-x-6 animate-scroll-right mb-8">
            {/* First set of cards */}
            {data.map((ele, idx) => (
              <div key={idx} className="flex-shrink-0 w-80 h-60 bg-white rounded-2xl shadow-lg overflow-hidden mx-2 group hover:scale-105 transition-transform duration-500">
                <div className="h-3/4 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${ele.img})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <h3 className="text-xl font-bold drop-shadow-lg">{ele.title}</h3>
                    <p className="text-sm opacity-90 drop-shadow-md">{ele.about}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">{ele.description}</p>
                </div>
              </div>
            ))}
            </div>
        </Marquee>
      </section>
    </>
  );
}