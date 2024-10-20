"use client";
import Image from "next/image";

import {
  organizatorsSection,
  statisticsSection,
} from "../../app/(_content)/_content";
import bestMap from "@/public/best-map.svg";
import bestLogo from "@/public/best.svg";

import { motion } from "framer-motion";

const Organizators = () => {
  return (
    <section className="container">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="uppercase text-3xl md:text-5xl my-16 text-center"
      >
        {organizatorsSection().heading}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex justify-center flex-wrap gap-10"
      >
        <div className="basis-[600px]">
          <h3 className="uppercase text-xl md:text-2xl font-semibold ">
            {organizatorsSection().title}
          </h3>
          <p className="mb-7">{organizatorsSection().description}</p>
        </div>
        <div className="basis-96 hidden xl:block">
          <Image
            className="p-2 rounded-md"
            src={bestLogo}
            width={384}
            height={100}
            alt="a"
          ></Image>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex flex-wrap xl:justify-between justify-center gap-5 mb-20"
      >
        <div className="flex flex-wrap justify-center gap-16">
          <Image
            src={statisticsSection().ourProjects[0]}
            alt="item"
            width={200}
            className="object-contain"
          ></Image>
          <Image
            src={statisticsSection().ourProjects[1]}
            alt="item"
            width={140}
            className="object-contain"
          ></Image>
          <Image
            src={statisticsSection().ourProjects[2]}
            alt="item"
            width={140}
            className="object-contain"
          ></Image>
          <Image
            src={statisticsSection().ourProjects[3]}
            alt="item"
            width={240}
            className="object-contain"
          ></Image>
          <Image
            src={statisticsSection().ourProjects[4]}
            alt="item"
            width={200}
            className="object-contain"
          ></Image>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex flex-wrap justify-evenly gap-12 py-10 xl:px-0 px-4 bg-[#222227] mt-20 rounded-lg"
      >
        <div className="relative flex flex-wrap xl:flex-col xl:basis-64 xl:justify-center justify-evenly gap-4 border py-6 rounded-2xl xl:border-l-red-300/0 xl:ml-32">
          {organizatorsSection().statistics.map((item, index) => (
            <div key={index} className="relative lg:-ml-12 p-4 basis-52">
              <div className="block text-2xl mb-2">
                {item.value} {item.title}
              </div>
              <div className="text-md">{item.desc}</div>
            </div>
          ))}
        </div>
        <Image
          src={bestMap}
          width={300}
          alt="best map"
          className="basis-[800px] hidden md:block"
        ></Image>
      </motion.div>
    </section>
  );
};

export default Organizators;
// "use client"
// import Image from "next/image"
// import { motion } from "framer-motion"
// import bec from "@/public/bec.svg"
// import hack2 from "@/public/hack2.jpg"
// import { statisticsSection } from "../../app/(_content)/_content"
// const Statistics = () => {
//     return (
//         <section className='container' id="statistics">
//             <motion.span initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}>
//                 <h2 className='text-3xl  md:text-5xl  mb-16 text-center'>{statisticsSection().title}</h2>
//                 <div className="flex items-center flex-wrap md:justify-between justify-evenly gap-10 text-xl mb-36">
//                     {statisticsSection().items.map((item, index) => (
//                         <a href={item.link} target="_blank" key={index} className="flex items-center basis-36 gap-2 rounded ">
//                             <Image className="bg-white rounded-full " src={item.img} width={70} height={70} alt={item.title} />
//                             <span>{item.value + "+"}</span>
//                         </a>))}
//                 </div>
//             </motion.span>

//             <motion.div initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }} className="flex flex-wrap xl:justify-between justify-center gap-5 mb-20">
//                 <div className="basis-80">
//                     <h3 className=" text-2xl md:text-3xl mb-1 ">{statisticsSection().additionalInfo[0].title}</h3>
//                     <p>{statisticsSection().additionalInfo[0].desc}</p>
//                 </div>
//                 <div className="flex flex-wrap justify-center gap-16">
//                     <Image src={statisticsSection().ourProjects[0]} alt="item" width={200} className="object-contain"></Image>
//                     <Image src={statisticsSection().ourProjects[1]} alt="item" width={140} className="object-contain"></Image>
//                     <Image src={statisticsSection().ourProjects[2]} alt="item" width={140} className="object-contain"></Image>
//                     <Image src={statisticsSection().ourProjects[3]} alt="item" width={240} className="object-contain"></Image>
//                     <Image src={statisticsSection().ourProjects[4]} alt="item" width={200} className="object-contain"></Image>

//                 </div>
//             </motion.div>
//             <motion.div initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }} className="flex flex-wrap xl:justify-between justify-center xl:gap-5 gap-20">
//                 <div className="basis-80">
//                     <h3 className=" text-2xl md:text-3xl mb-1 ">{statisticsSection().additionalInfo[1].title}</h3>
//                     <p>{statisticsSection().additionalInfo[1].desc}</p>
//                 </div>
//                 <div className="flex gap-5 ">
//                     <Image src={hack2} alt="bec" ></Image>

//                 </div>
//             </motion.div>
//         </section>
//     )
// }

// export default Statistics
