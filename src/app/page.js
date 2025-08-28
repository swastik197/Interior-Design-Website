

export default function Home() {
  return (
    <>
      <main className="flex flex-col  items-center min-h-screen w-full bg-white">
        <nav className="fixed top-0 left-0 right-0 w-full flex items-center justify-between z-50 px-4 md:px-6 py-4  ">
          <div className="ml-2 md:ml-0">
            <p className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">MAX ELITE</p>
          </div>
          <ul className="hidden md:flex md:space-x-4 text-gray-200 items-center px-6 py-2 rounded-full bg-black/20 backdrop-blur-md border border-white/10">
            <li className="active px-3 py-2 cursor-pointer hover:text-white transition-colors rounded-full hover:bg-white/10">Home</li>
            <li className="active px-3 py-2 cursor-pointer hover:text-white transition-colors rounded-full hover:bg-white/10">Services</li>
            <li className="active px-3 py-2 cursor-pointer hover:text-white transition-colors rounded-full hover:bg-white/10">About</li>
            <li className="active px-3 py-2 cursor-pointer hover:text-white transition-colors rounded-full hover:bg-white/10">Contact</li>
          </ul>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 text-white bg-white/10 rounded-full backdrop-blur-sm">
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
        <section className="flex flex-col items-center justify-center min-h-[500px] md:min-h-screen min-w-full rounded-b-xl bg-cover bg-center bg-no-repeat px-4 pt-20" style={{ backgroundImage: "url('/0502010004-01-Minimalist-Interior-Style.jpg')" }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center">Welcome to Website</h1>
          <p className="mt-4 text-base md:text-lg text-white text-center max-w-2xl">We offer a variety of services to help you succeed.</p>
          <button className="mt-6 px-4 md:px-6 py-2 md:py-3 bg-white text-blue-500 rounded-full hover:bg-gray-100 transition duration-300 text-sm md:text-base">
            Get Started
          </button>
        </section>
        <section className="w-full max-h-screen my-2 md:my-4 md:px-2 bg-white">
          {/* Mobile layout - stack vertically */}
          <div className="block md:hidden space-y-2">
            <div className="w-full h-80 bg-gray-200 rounded-4xl relative bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/hero02.jpg')" }}>
              <div className="p-0 absolute bottom-0 left-0 right-0">
                <div className="p-2 bg-white rounded-tr-3xl w-fit">
                  <p className="text-xs mx-2 font-semibold text-black border-1 border-black rounded-2xl px-1 py-1 mb-1">Gorgeous Interior</p>
                </div>
                <p className="text-4xl text-black p-2 px-6 bg-white w-fit rounded-tr-3xl max-w-full font-bold">Design</p>




                <p className="text-4xl text-black p-2 px-6 bg-white w-fit rounded-tr-3xl max-w-full font-bold">Services</p>
              </div>
            </div>
            <div className="flex flex-row w-full gap-2 h-40">
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
          <div className="hidden md:grid grid-cols-3 grid-rows-3 gap-4 h-screen">
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
        <section className="flex my-4">
          <img
            src="/WhatsApp Image 2025-08-14 at 15.53.00_3628bfe7.jpg"
            alt="Description of image"
            className="w-1/2 h-auto rounded-2xl object-cover"
          />
          <div className="w-2/3 ">
          <p></p>
          <h1></h1>
          <p></p>
          <button></button>
          </div>
        </section>

      </main>
    </>
  );
}
