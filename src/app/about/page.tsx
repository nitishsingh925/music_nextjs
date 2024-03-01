"use client";
import { SparklesCore } from "@/components/ui/sparkles";
import React from "react";

const AboutUsPage = () => {
  return (
    <div>
      <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
          About Us
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <div className="-mt-32 px-2">
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          Music School is a premier institution dedicated to teaching the art
          and science of music. With a commitment to nurturing talent from the
          ground up, we foster a vibrant community of musicians.
        </p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          At Music School, we believe in providing a comprehensive musical
          education that goes beyond the notes on a page. Our expert instructors
          are dedicated to guiding students through their musical journey,
          whether they are beginners or advanced musicians.
        </p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          We pride ourselves on offering cutting-edge curriculum and limitless
          learning opportunities. Our interactive and engaging courses are
          designed to enhance your understanding and mastery of music concepts
          and performance techniques.
        </p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          Join Music School and embark on a personalized journey in music
          mastery. Discover your sound with our dedicated support and immerse
          yourself in a community that celebrates musical creativity and growth.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
