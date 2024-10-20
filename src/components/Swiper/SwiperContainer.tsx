"use client";
import React, { useEffect, useState } from "react"; // Import useEffect and useState
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { motion } from "framer-motion"; // For animations

import stopiadesiat from "../../public/swiper/153.png";
import anya from "../../public/swiper/anya.png";
import bodjan from "../../public/swiper/bodjan.png";
import danik from "../../public/swiper/danik.png";
import harevo from "../../public/swiper/harevo.png";
import romchyk from "../../public/swiper/romchyk.png";
import veronika from "../../public/swiper/veronika.png";
import vika from "../../public/swiper/vika.png";
import vikrot from "../../public/swiper/vikrot.png";
import yulik from "../../public/swiper/yulik.png";
import zhuzha from "../../public/swiper/zhuzha.png";

import arrowLeft from "../../public/swiper/arrow-right.svg";
import arrowRight from "../../public/swiper/arrow-left.svg";

import Image from "next/image";

const activeSlideStyle = {
  boxShadow: "0 0 2px #F2003C, 0 0 4px #F2003C, 0 0 6px #F2003C", // Neon glow effect
  borderColor: "#F2003C", // Neon border color
};

const neonEffect = {
  textShadow: "0 0 80px #f00, 0 0 80px #f00, 0 0 80px #f00", // Neon glow effect
};

const Card = ({ img, name, resp, text }: any) => {
  const swiperSlide = useSwiperSlide(); // Check if the slide is active

  return (
    <motion.div
      className={`relative rounded-xl bg-[#222227] text-center border border-[#F2003C] h-[600px] space-y-4 w-72 mx-auto pt-16 ${
        swiperSlide.isActive ? "active-slide" : ""
      }`}
      style={swiperSlide.isActive ? activeSlideStyle : {}} // Apply neon border if active
      initial={{ opacity: 0.8, scale: 0.95 }}
      animate={
        swiperSlide.isActive
          ? { opacity: 1, scale: 1 }
          : { opacity: 0.8, scale: 0.95 }
      }
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Resp with neon effect when active */}
      <motion.h3
        initial={{ opacity: 0, y: 0 }}
        animate={
          swiperSlide.isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
        }
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={swiperSlide.isActive ? neonEffect : {}}
        className="absolute top-3 left-0 w-full text-center text-[#F2003C] text-2xl font-bold z-10"
      >
        {resp}
      </motion.h3>

      {/* Image without glitch effect */}
      <div className="relative">
        <Image src={img} alt="" className="p-1 rounded-lg w-full" />
      </div>

      {/* Title and Description */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={swiperSlide.isActive ? { opacity: 1 } : { opacity: 0.5 }}
        transition={{ duration: 0.5 }}
        className="px-3"
      >
        <h2 className="text-[#E5E5E5] text-3xl">{name}</h2>
        <p className="p-3">{text}</p>
      </motion.div>
    </motion.div>
  );
};

// Custom navigation buttons
const CustomPrevButton = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2  text-white p-2 rounded-full hover:bg-opacity-80 transition duration-300 hover:animate-vibrate" // Add animation on hover
    style={{ zIndex: 10 }} // Ensure it is above the swiper slides
  >
    <Image src={arrowLeft} alt="Prev" />
  </button>
);

const CustomNextButton = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2  text-white p-2 rounded-full hover:bg-opacity-80 transition duration-300 hover:animate-vibrate" // Add animation on hover
    style={{ zIndex: 10 }} // Ensure it is above the swiper slides
  >
    <Image src={arrowRight} alt="Next" />
  </button>
);

// Swiper Component
const CustomSwiper = () => {
  const swiperRef = React.useRef<any>(null); // Create a ref for the Swiper
  const [isMobile, setIsMobile] = useState(false); // State to track if the screen is mobile

  // Function to update screen size state
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Update state based on window width
  };

  useEffect(() => {
    handleResize(); // Check the size on mount
    window.addEventListener("resize", handleResize); // Add resize listener

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener on unmount
    };
  }, []);

  const goToNext = () => {
    swiperRef.current?.swiper.slideNext(); // Use swiper instance to slide
  };

  const goToPrev = () => {
    swiperRef.current?.swiper.slidePrev(); // Use swiper instance to slide
  };

  return (
    <div className="container relative p-0" id="organizators">
      <motion.h2 className="text-center text-3xl  md:text-5xl  mb-16">
        Команда організатор:
      </motion.h2>
      {/* Custom navigation buttons, conditionally rendered */}
      {!isMobile && <CustomPrevButton onClick={goToPrev} />}
      {!isMobile && <CustomNextButton onClick={goToNext} />}

      <Swiper
        ref={swiperRef} // Assign the ref to Swiper
        grabCursor={true}
        centeredSlides={true}
        // Ensure Navigation is included
        spaceBetween={50}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            navigation: {},
          },
        }}
      >
        <SwiperSlide>
          <Card
            img={vikrot}
            name="Віктор Гаврилюк"
            resp="Main Organizer"
            text={"Наш мозок - якби не він ви б не читали цей текст"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            img={bodjan}
            name="Богдан Вівчар"
            resp="Mentor"
            text={"Людина, що вчить та допомагає рухатись у правильне русло "}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            img={yulik}
            name="Юля Синичак"
            resp="Human Resources"
            text={
              "Наша батарейка, що надавала нам мотивацію протягом часу створення івенту "
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            img={romchyk}
            name="Роман Фігель"
            resp="Content Responsible"
            text={
              "Генератор ідей, що безупинно працював з Веронікою для створення завдань, категорій та системи оцінювання"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            img={veronika}
            name="Вероніка Мороз"
            resp="Content Responsible"
            text={"Майстриня своєї справи з золотими руками і світлою головою"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            img={stopiadesiat}
            name="Микита Клименко"
            resp="IT Responsible"
            text={"Людина-інтернет, він створив сайт та бота у телеграмі"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            img={harevo}
            name="Максим Палій"
            resp="Logistics Responsible"
            text={"Він вирішує де ви будете працювати і що їсти"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            img={vika}
            name="Віка Шевченко"
            resp="Fundraising Responsible"
            text={
              "Саме вона спілкується з компаніями і відкриває їм очі на наш івент"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            img={anya}
            name="Аня Гащук"
            resp="Fundraising Responsible"
            text={
              "Вона відкриває очі компаніям на те, чому їм варто з нами співпрацювати"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            img={zhuzha}
            name="Женя Маринчак"
            resp="Public Relationships Responsible"
            text={
              "Наш голос - саме вона поширює інформацію про наш івент на увесь НУЛП"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            img={danik}
            name="Данило Петрушенко"
            resp="Design Responsible"
            text={"Ви зараз дивитесь на мій дизайн"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CustomSwiper;
