"use client";
import Link from 'next/link'
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";
import InfoTag from './components/Infotag';
import Image from 'next/image';
import { GoogleAnalytics } from 'nextjs-google-analytics';

export default function Home() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="">
      <GoogleAnalytics trackPageViews />
      {isVisible && (
        <button className="flex justify-center items-center text-3xl text-white font-bold fixed bottom-0 right-0 m-6 p-5 bg-vp rounded-full hover:p-[22px] active:p-5 shadow-lg active:shadow-none ease-in-out duration-100" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
      <div className="bg-[url('/homepagepic2.jpg')] md:bg-[url('/homepagepic.jpg')] bg-cover bg-top h-[650px]">
        <div className="w-full h-full flex justify-center md:justify-start pb-12 md:p-0 items-end md:items-center bg-transparent lg:bg-gradient-to-r from-white from-25% to-transparent to-75%">
          <div className="m-0 md:ml-16 lg:ml-32 w-72 sm:w-96 lg:w-[500px] flex flex-col gap-2 p-4 lg:p-8 rounded-3xl border-2 border-vp text-center shadow-lg bg-white">
            <p className='text-3xl lg:text-4xl font-bold'>See a Brighter Future</p>
            <p className='text-xl lg:text-3xl font-semibold'>To Schedule an Appointment, Call Today!</p>
          </div>
        </div>
      </div>
      <InfoTag />
      <div className="py-16 flex flex-col justify-center items-center">
        <div className="text-4xl sm:text-5xl font-bold mb-16">Store Information</div>
        <div className="flex flex-col md:flex-row gap-16 w-full h-full px-12 sm:px-24 md:px-12 lg:px-24 xl:px-56">
          <div className="shadow-xl w-full h-64 sm:h-80 border-2 border-vp rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9498.146047826185!2d-97.12077440849066!3d32.68334001011119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e62b87f9691ff%3A0xad3b7b87c87afb1d!2sVision%20Palace!5e0!3m2!1sen!2sus!4v1716413969166!5m2!1sen!2sus"
              className='w-full h-full rounded-2xl'
              allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
          <div className="shadow-xl w-full h-64 sm:h-80 border-2 border-vp rounded-2xl flex flex-col justify-center items-center gap-2 bg-white">
            <div className="text-3xl font-bold">Store Hours</div>
            <div className="flex gap-4 text-base sm:text-lg">
              <ul className="text-right">
                <li>Monday</li>
                <li>Tuesday</li>
                <li>Wednesday</li>
                <li>Thursday</li>
                <li>Friday</li>
                <li>Saturday</li>
                <li>Sunday</li>
              </ul>
              <ul className="">
                <li><b>10:30</b> AM - <b>5</b> PM</li>
                <li><b>10:30</b> AM - <b>5</b> PM</li>
                <li><b>10:30</b> AM - <b>5</b> PM</li>
                <li><b>10:30</b> AM - <b>5</b> PM</li>
                <li><b>CLOSED</b></li>
                <li><b>10:30</b> AM - <b>3</b> PM</li>
                <li><b>CLOSED</b></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/*Line Break*/}
      <div className="h-px bg-gradient-to-r from-white from-20% via-gray-300 to-white to-80%"></div>

      <div className="p-8 sm:px-16 lg:py-12 lg:px-24 flex flex-col md:flex-row gap-8 lg:gap-32 w-full justify-center items-center">
        <Image
          src="/vppic1.jpeg"
          alt="Vision Palace Logo"
          width={1111}
          height={1111}
          className="w-full sm:h-72 md:h-56 lg:h-72 border-2 border-vp rounded-3xl shadow-xl object-cover">
        </Image>
        <div className="w-full flex flex-col justify-center gap-2">
          <div className="text-3xl font-bold">We Deliver Top-Quality Eyecare</div>
          <div className="text-lg">We do our very best to ensure each patient is met with
            the positive treatment that they deserve. Call today to schedule an eye exam!
          </div>
        </div>
      </div>

      <div className="py-8 md:py-16 flex flex-col gap-4 sm:gap-8 justify-center items-center bg-gray-100">
        <div className="text-3xl sm:text-5xl font-bold">Insurance Information</div>
        <div className="text-lg px-8">We accept many different vision and medical insurance plans to help you save while you receive quality eyecare service!</div>
        <Link href="/insurance">
          <button className="bg-white text-lg font-semibold px-6 py-2 rounded-full hover:bg-gray-100 active:bg-gray-200 ease-in-out duration-200 shadow-lg active:shadow-none">Learn More</button>
        </Link>
      </div>

      <div className="p-8 sm:px-16 lg:py-12 lg:px-24 flex flex-col md:flex-row gap-8 lg:gap-32 w-full justify-center items-center">
        <Image
          src="/vppic2.jpg"
          alt="Vision Palace Logo"
          width={1111}
          height={1111}
          className="w-full sm:h-72 md:h-56 lg:h-72 border-2 border-vp rounded-3xl shadow-xl object-cover">
        </Image>
        <div className="w-full flex flex-col justify-center gap-2">
          <div className="text-3xl font-bold">Discover Our Eyewear Collection</div>
          <div className="text-lg">We offer a wide range of high-quality eyewear products to
            suit every style and need. We are happy to help you find the right pair for you.
            Call today!
          </div>
        </div>
      </div>
    </section>
  );
}