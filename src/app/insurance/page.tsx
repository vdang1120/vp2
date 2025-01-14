import PageLabel from "../components/PageLabel";
import Image from "next/image";
import Head from 'next/head'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance Information",
};

export default function insurance() {
  return (
    <section className="mt-20">
      <Head>
        <title>My page title</title>
      </Head>
      <PageLabel text="Insurance & Payment Information" />
      <div className="bg-darkvp w-full p-4 px-6 sm:px-20 lg:px-36 flex items-center text-white text-lg sm:text-2xl font-semibold">
        Vision Palace accepts with many major insurance and payment plans.
      </div>
      <div className="flex flex-col justify-center items-center gap-8 pb-16 pt-8">
        <div className="text-xl font-semibold px-12">
          <p>If you're unsure whether we accept your insurance or vision plan, please give us a call. Our team is here to help with any questions.</p>
          <p>It's important to ensure your benefits before scheduling your next exam.</p>
        </div>
        <div className="text-3xl font-bold">Commonly Accepted Plans</div>
        <Image
          src="/insuranceList.png"
          alt="Commonly Accepted Plans: Aetna, Humana, EyeMed, VSP Vision, DavisVision& SuperiorVision, NVA"
          width={1111}
          height={1111}
          className="h-56 sm:h-80 w-auto p-8 border rounded-3xl shadow-xl">
        </Image>
      </div>
    </section>
  );
}