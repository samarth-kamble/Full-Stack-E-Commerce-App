import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              alt="Hero Image"
              src={"/headphone.png"}
              className="absolute inset-0 h-full w-full object-cover"
              height={500}
              width={500}
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              {/* Welcome to FlipStore: Where Style Meets Convenience! */}
              Discover Your Digital Edge: Explore the Latest in Laptops and
              Mobile Devices!
            </h2>

            <p className="mt-4 text-gray-600">
              Dive into the world of cutting-edge technology with FlipStore.
              Elevate your digital experience with our unrivaled selection of
              laptops and mobile devices. From sleek ultrabooks to powerhouse
              gaming rigs, and from flagship smartphones to innovative tablets,
              we&apos;ve curated the best-in-class products to cater to your
              every need.
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
