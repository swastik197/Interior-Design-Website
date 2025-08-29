'use client';
import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import Hero1 from '@/components/hero1';
import Statistics from '@/components/statistics';
import Scroller from '@/components/scroller';
import Gallery from '@/components/gallery';
import ContactUs from '@/components/contactus';
import Footer from '@/components/footer';
export default function Home() {
 
  return (
    <>
      <main className="flex flex-col  items-center min-h-screen w-full bg-white">
        <Navigation />
        <Hero />
        <Hero1 />
        <Statistics />
        <Scroller />
        <Gallery />
        <ContactUs />
        <Footer/>
      </main>
    </>
  );
}