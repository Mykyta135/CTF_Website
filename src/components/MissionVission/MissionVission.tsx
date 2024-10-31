"use client";

import React from "react";


import mission from "@/public/mission.svg";
import vission from "@/public/vission.svg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MissionVission() {

  return (
    <section id="mission-vission" className="container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className=" flex justify-center gap-6 flex-wrap"
      >
        <Block
          title="Місія"
          text="Підвищити зацікавленість студентів у галузі кібербезпеки"
          image={mission}
        />
        <Block
          title="Візія"
          text="Сформувати спільноту етичних хакерів для захисту кіберпростору України"
          image={vission}
        />
      </motion.div>
    </section>
  );
}
interface BlockProps {
  title: string;
  text: string;
  image: any;
}

const Block: React.FC<BlockProps> = ({ title, text, image }) => {
  return (
    <div className="basis-[590px] bg-[#222227] flex justify-between gap-5 items-center p-4 border-2 rounded-lg border-[#8C002380]">
      <div className="basis-24 shrink-0">
        <Image alt="" src={image}></Image>
      </div>
      <div className="">
        <h3 className="md:text-4xl text-3xl font-bold">{title}</h3>
        <p className="font-bold md:text-lg text-base mt-2">{text}</p>
      </div>
    </div>
  );
};
