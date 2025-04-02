'use client'
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import React, { useEffect, useRef } from "react";

const Banner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("El navegador bloqueó la reproducción automática:", error);
      });
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video_banner.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 flex items-center justify-center text-white text-center backdrop-blur-md">
        <div className="px-40 w-full max-w-4xl rounded-lg">
          <TextGenerateEffect duration={2} filter={false} words="Somos un equipo de desarrolladores" className="text-white text-4xl"/>
          <p className="mt-4 text-lg md:text-xl"></p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

