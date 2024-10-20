"use client";

import { useEffect } from "react";
import { Orbitron } from "next/font/google";
import { animateLogo, createGlitchTimeline } from "./animateScenary"; // Import the glitch timeline
import flag from "@/public/flag.svg";
import rightArrow from "@/public/swiper/arrow-left.svg";
import leftArrow from "@/public/swiper/arrow-right.svg";

import Image from "next/image";
// Load the Orbitron font
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const StartScreen = () => {
  useEffect(() => {
    // Start the glitch animation based on class names
    const timeline = createGlitchTimeline();
    animateLogo();
    // Ensure to check if the timeline is completed
    timeline.eventCallback("onComplete", () => {
      // Restore scrolling after the animation
      document.body.style.overflow = "";
      document.body.style.height = "";
    });

    // Block scrolling while the animation is running
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
  }, []);

  return (
    <div className="startScreenCover absolute h-screen w-screen top-0 left-0 bg-[#000000] z-[100]">
      <div
        className={`opacity-0 startText1 font-bold absolute top-1/3 left-1/3 text-white ${orbitron.className} text-xl sm:text-2xl md:text-4xl lg:text-5xl`}
      >
        First Ever Offline CTF In Lviv
      </div>
      <div
        className={`opacity-0 startText2 absolute top-1/2 left-2/3 text-white ${orbitron.className} text-2xl sm:text-3xl md:text-5xl lg:text-6xl`}
      >
        Welcome
      </div>
      <div className="logo opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20vw] h-[20vw]">
        {/* <div className="textblock w-28">
          <div className="text text-[3vw]">BEST</div>
          <div className="text text-[3vw]">Capture</div>
          <div className="text text-[3vw]">
            The <span>Flag</span>
          </div>
        </div> */}

        <div className="leftArrow absolute top-1/2 left-0 w-[20%] h-auto -translate-y-1/2">
          <Image src={leftArrow} alt="flag" className="w-full"></Image>
        </div>

        <div className="flag absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-auto">
          <Image src={flag} alt="flag" className="w-full"></Image>
        </div>

        <div className="rightArrow absolute top-1/2 right-0 w-[20%] h-auto -translate-y-1/2">
          <Image src={rightArrow} alt="flag" className="w-full"></Image>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
