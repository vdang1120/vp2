import PageLabel from "../components/PageLabel";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

export default function About() {
  return (
    <section className="mt-20">
      <PageLabel text="About Vision Palace" />

      <div className="p-8 sm:px-16 lg:py-12 lg:px-24 flex flex-col lg:flex-row gap-8 lg:gap-16 w-full justify-center items-center">
        <div className="w-full flex flex-col justify-center gap-2">
          <div className="text-3xl font-bold">Our Practice</div>
          <div className="text-lg">Vision Palace is a private, family owned optometry
            practice. Since 2012, we have been committed to providing top-quality eyecare
            service to all patients. In addition, we offer a wide variety of eyeglasses,
            sunglasses, and contact lenses. We are dedicated to ensuring a positive and
            comfortable experience for every guest that visits us.
          </div>
        </div>
        <Image
          src="/storeFront.jpg"
          alt="StoreFront Image"
          width={1111}
          height={1111}
          className="w-full sm:w-3/4 lg:w-full sm:h-80 lg:h-72 border-2 border-vp rounded-3xl shadow-xl object-cover">
        </Image>
      </div>

      {/*Line Break*/}
      <div className="h-px bg-gradient-to-r from-white from-20% via-gray-300 to-white to-80%"></div>

      <div className="h-40 text-4xl font-bold shadow-lg flex justify-center items-center">
        Meet Our Doctor
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="pt-16 p-8 lg:p-20 w-full flex justify-center items-center">
          <div className="shadow-xl rounded-3xl h-72 w-72">
            <Image
              src="/doctorIcon.jpg"
              width={10000}
              height={0}
              alt="Dr. Ly Phan, OD"
              className="w-full h-full rounded-3xl"
            ></Image >
          </div>
        </div>
        <div className="p-8 lg:p-20 w-full flex justify-center items-center">
          <div className="w-full flex flex-col justify-center gap-2">
            <div className="text-3xl font-bold">Dr. Ly Phan, OD</div>
            <div className="text-lg">Dr. Ly Phan is a trained and qualified optometrist who
              is dedicated to delivering quality eyecare to all of his patients. He received
              his Doctor of Optometry from the University of Houston in 2007. As a therapeutic
              optometrist, Dr. Phan prioritzes the health and wellness of each patient&apos;s eyes.
            </div>
          </div>
        </div>
      </div>
      {/*<div className="p-8 sm:px-16 lg:py-12 lg:px-24 flex flex-col md:flex-row gap-8 lg:gap-32 w-full justify-center items-center">
        <Image
          src="/doctorIcon.jpg"
          alt="Vision Palace Logo"
          width={1111}
          height={1111}
          className="w-40 h-40 rounded-3xl shadow-xl object-cover">
        </Image>
        <div className="w-full flex flex-col justify-center gap-2">
          <div className="text-3xl font-bold">Dr. Ly Phan, OD</div>
          <div className="text-lg">Dr. Ly Phan is a trained and qualified optometrist who
            is dedicated to delivering quality eyecare to all of his patients. He received
            his Doctor of Optometry from the University of Houston in 2007. As a therapeutic
            optometrist, Dr. Phan prioritzes the health and wellness of each patient's eyes.
          </div>
        </div>
      </div>*/}
    </section >
  );
}