"use client";

import PageLabel from "../components/PageLabel";
import Form from 'next/form'
import emailjs from '@emailjs/browser';
import { useRef, useEffect } from 'react';
import Swal from 'sweetalert2'
import { FaUser, FaPhone } from "react-icons/fa";
import Script from "next/script";

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  useEffect(() => {
    document.title = "Contact Us | Vision Palace";
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_5bdrohq",
        "template_ohfk9m7",
        form.current,
        "E7QIXcua8k1QPJf2c"
      )
      .then(
        () => {
          Swal.fire({
            title: "Message Sent!",
            text: "We will respond to you shortly!",
            icon: "success",
            confirmButtonColor: "mediumseagreen",
          });
          if (form.current) {
            form.current.reset();
          }

        },
        (error) => {
          console.error("EmailJS Error:", error);
          Swal.fire({
            icon: "error",
            title: "Something Went Wrong",
            text: "Please Try Again",
            confirmButtonColor: "#d33",
          });
        }
      );
  };
  return (
    <section className="mt-20">
      <Script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></Script>
      <PageLabel text="Schedule an Appointment Today" />
      <div className="bg-darkvp w-full p-4 px-6 sm:px-20 lg:pl-36 flex justify-center items-center text-white text-lg sm:text-2xl font-semibold">
        Contact Vision Palace to schedule an appointment or to request any additional information regarding our services.
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full flex flex-col gap-4 items-center py-12 px-12 md:px-20">
          <p className="text-3xl font-bold mb-4">Appointments can be Scheduled:</p>
          <div className="w-full">
            <p className="text-xl font-semibold flex items-center gap-4">
              <FaUser />
              In Person
            </p>
            <p>Address: 3751 Matlock Rd. #115, Arlington, TX 76015</p>
          </div>
          <div className="w-full">
            <p className="text-xl font-semibold flex items-center gap-4">
              <FaPhone />
              By Phone Call
            </p>
            <p>Phone Number: (817) 375-9000</p>
          </div>
        </div>
        <div className="hidden md:block h-vh w-px bg-gradient-to-b from-white from-20% via-gray-300 to-white to-80%"></div>
        <div className="w-full flex flex-col items-center py-12 px-8 md:px-20">
          <p className="text-3xl font-bold mb-8">Contact Us</p>
          <Form ref={form} onSubmit={sendEmail} className="w-full flex flex-col gap-4">
            <div className="flex gap-4">
              <input type="text" name="first" className="w-full p-1 px-2 border-b border-gray-300 focus:border-black outline-0" placeholder="First Name" required />
              <input type="text" name="last" className="w-full p-1 px-2 border-b border-gray-300 focus:border-black outline-0" placeholder="Last Name" required />
            </div>
            <input type="email" name="email" className="p-1 px-2 border-b border-gray-300 focus:border-black outline-0" placeholder="Email Address" required />
            <input type="text" name="subject" className="p-1 px-2 border-b border-gray-300 focus:border-black outline-0" placeholder="Subject" required />
            <input type="number" name="phone" className="p-1 px-2 border-b border-gray-300 focus:border-black outline-0" placeholder="Phone Number" required />
            <textarea name="message" placeholder="Message" className="p-1 px-2 border border-gray-300 rounded-md min-h-24 focus:border-black outline-0" required></textarea>
            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="patient"
                  value="Existing Patient"
                  className="accent-darkvp"
                  required
                />
                <span className="rounded bg-white">
                  Existing Patient
                </span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="patient"
                  value="New Patient"
                  className="accent-darkvp"
                  required
                />
                <span className="rounded bg-white">
                  New Patient
                </span>
              </label>
            </div>
            <div className="w-full flex justify-center">
              <button className="w-28 py-2 rounded-lg border-vp border-2 text-xl font-semibold text-vp hover:font-bold hover:text-white hover:bg-vp active:bg-darkvp active:border-darkvp shadow-lg active:shadow-none ease-in-out duration-200">
                Submit
              </button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
}