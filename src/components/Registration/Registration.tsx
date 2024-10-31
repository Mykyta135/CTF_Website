"use client";

import React from "react";


import arrow from "@/public/arrow-intro.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import rect from "@/public/rect.svg";

import hacker_red from "@/public/hacker-red.svg";
export default function Registration() {

  return (
    <section id="registration" className="container">
      <motion.h2 className="text-center text-4xl">
        А що робити коли не знайшов команду?
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container flex  items-center justify-center gap-6 flex-wrap text-center"
      >
        <div className="flex flex-col items-center basis-[500px]">
          <p className="text-2xl md:text-3xl">
            Заходь в телеграм бот, реєструйся і шукай команду у нашому чаті
          </p>
          <a
            href="https://t.me/best_ctf2_bot"
            className="text-black relative cursor-pointer mt-16 md:mt-16 hover:translate-y-1 transition w-72"
          >
            <Image src={rect} alt="button"></Image>
            <span className="w-[292px] absolute h-full top-4 left-0 font-semibold text-lg">
              Реєстрація
            </span>
            <Image
              src={arrow}
              alt="arrow"
              className="absolute top-1/2 -translate-y-1/2 right-9"
            ></Image>
          </a>
        </div>
        <div className="basis-[581px]">
          <Image alt="" src={hacker_red}></Image>
        </div>
      </motion.div>
    </section>
  );
}
