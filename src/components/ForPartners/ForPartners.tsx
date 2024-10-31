"use client";
import React from "react";
import Image from "next/image";
import { forPartnersSection } from "@/app/(_content)/_content";

import jeopardyWeb from "../../public/web.svg";
import jeopardyCrypto from "../../public/crypto.svg";
import jeopardyMisc from "../../public/misc.svg";
import jeopardyForensic from "../../public/forensic.svg";
import jeopardyReverse from "../../public/reverse.svg";
import jeopardyPwn from "../../public/pwn.svg";
import { motion } from "framer-motion";

const ForPartners = () => {
  return (
    <section className="container flex flex-col items-center pb-40" id="format">
      <motion.span
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl  md:text-5xl  mb-6 text-center">
          {forPartnersSection().title}{" "}
        </h2>
        <p className="max-w-4xl mb-14 text-center">
          {forPartnersSection().description}
        </p>
      </motion.span>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative  max-w-[800px]"
      >
        <Image
          src={forPartnersSection().img}
          alt={"jeopardy"}
          className="w-full"
        ></Image>
      </motion.div>
    </section>
  );
};

export default ForPartners;
