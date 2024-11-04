import { dataItem, iOptional } from "@/types";
import { iSellingPoint } from "@/types";

import facebookLogo from "@/public/facebook.svg";
import instagramLogo from "@/public/instagram.svg";
import linkedinLogo from "@/public/linkedin.svg";
import telegramLogo from "@/public/telegram.svg";
import hackPhoto from "@/public/eventLogo.png";

import jeopardy from "@/public/jeopardyDiagram.svg";
import jeopardyWeb from "@/public/web.svg";
import jeopardyCrypto from "@/public/crypto.svg";
import jeopardyMisc from "@/public/misc.svg";
import jeopardyForensic from "@/public/forensic.svg";
import jeopardyReverse from "@/public/reverse.svg";
import jeopardyPwn from "@/public/pwn.svg";

export const jeopardyTypes = [
  jeopardyWeb,
  jeopardyCrypto,
  jeopardyMisc,
  jeopardyForensic,
  jeopardyReverse,
  jeopardyPwn,
];

import softserve from "@/public/softserve.svg";
import sigma from "@/public/sigma.svg";
import blackthorm from "@/public/blackthorn.png";
import binance from "@/public/binance.svg";
import underdefence from "@/public/underdefence.png";
import sombra from "@/public/sombra.svg";

import bestLvivLogo from "@/public/logo.svg";

import bec from "@/public/bec.svg";
import ejf from "@/public/ejfLogo.png";
import hack from "@/public/hackLogo.png";
import bci from "@/public/bciLogo.png";
import btw from "@/public/btw.png";

const socialMediaLogos = [
  facebookLogo,
  instagramLogo,
  linkedinLogo,
  telegramLogo,
];
const ourProjects = [bec, ejf, hack, bci, btw];

export const headerNavigation = () => {
  return [
    {
      name: "Про нас",
      href: "#about",
    },
    {
      name: "Формат",
      href: "#format",
    },
    {
      name: "Організатори",
      href: "#organizators",
    },
  ];
};

export const introSection = () => {
  return {
    title: "Capture The Flag",
    term: "16-17 листопада",
    description: "Щоб захищати, треба вміти атакувати",
  };
};

export const descriptionSectionText = () => {
  return {
    title: "Про наш івент",
    titleDescription1:
      " BEST Capture The Flag – це перший офлайн CTF у Львові, організований для розвитку навичок у сфері кібербезпеки серед молоді. Учасники змагатимуться у вирішенні різноманітних завдань з різних аспектів кібербезпеки, що покращить їхні навички у сфері.",
    titleDescription2:
      "Ми проводимо перші CTF-змагання у Львові, що є унікальною можливістю для Вас зробити внесок у розвиток етичного хакінгу серед студентів.",

    // term: introSection().term,

    img1: {
      src: hackPhoto,
      alt: "img1",
    },
  };
};

export const forPartnersSection = () => {
  return {
    title: "Формат - Jeopardy",
    description:
      "Завдання класифікуються за категоріями, кожна з яких має свій баловий еквівалент, зважаючи на складність. Учасники намагаються вирішити якомога більше завдань за встановлений час, і відповідно до кількості балів визначається їх місце в рейтингу в реальному часі.",
    img: jeopardy,
  };
};

export const whySection = () => {
  return {
    title: "Чому варто брати участь у CTF-змаганнях? ",
    items: [
      { desc: "Отримати море емоцій та повеселитись з організаторами івенту" },
      {
        desc: "Поспілкуватись з провідними ІТ компаніями на воркшопі або відвідати тренінги від представників",
      },
      { desc: "Отримати досвід у етичному хакінгу" },
      { desc: "Стати частиною історії першого офлайн CTF у Львові" },
    ],
  };
};
export const statisticsSection = () => {
  return {
    title: "Статистика",
    items: [
      {
        title: "facebook",
        value: 2100,
        img: socialMediaLogos[0],
        link: "https://www.facebook.com/BEST.Lviv/?locale=uk_UA",
      },
      {
        title: "instagram",
        value: 2900,
        img: socialMediaLogos[1],
        link: "https://www.instagram.com/best_lviv/",
      },
      {
        title: "linkedIn",
        value: 300,
        img: socialMediaLogos[2],
        link: "https://www.linkedin.com/company/bestlviv/mycompany/",
      },
      {
        title: "telegram",
        value: 800,
        img: socialMediaLogos[3],
        link: "https://t.me/s/bestlviv?after=560",
      },
    ],
    additionalInfo: [
      {
        title: "BEST Lviv",
        desc: "(Board of European Students of Technology) – осередок міжнародної неприбуткової громадської організації, який об’єднує студентів технічних спеціальностей. Нашою місією є розви-ток студентів через обмін знаннями та співпрацю компаній, університетів та студентів Європи.",
      },
      // {
      //   title: t("title2"),
      //   desc: t("desc2"),
      // },
    ],
    ourProjects: ourProjects,
  };
};

// export const customersSection = () => {
//   return {
//     title: t("title"),
//     personType: [
//       { title: t("title1") },
//       { title: t("title2") },
//       { title: t("title3") },
//     ],
//     specialisation: [
//       t("field1"),
//       t("field2"),
//       t("field3"),
//       t("field4"),
//       t("field5"),
//       t("field6"),
//       t("field7"),
//       t("field8"),
//       t("field9"),
//     ],
//   };
// };

export const partnersSection = () => {
  return {
    heading: "Наші партнери",
    logos: [
      {
        image: underdefence,
        width: 250,
        height: 50,
      },

      {
        image: softserve,
        width: 250,
        height: 50,
      },
      {
        image: binance,
        width: 250,
        height: 20,
      },
      {
        image: blackthorm,
        width: 250,
        height: 20,
      },

      {
        image: sigma,
        width: 250,
        height: 50,
      },
      {
        image: sombra,
        width: 250,
        height: 50,
      },
    ],
  };
};

export const organizatorsSection = () => {
  return {
    heading: "Хто ми?",
    title: "BEST Lviv",
    logo: bestLvivLogo,
    description:
      "(Board of European Students of Technology) – осередок міжнародної неприбуткової громадської організації, який об’єднує студентів технічних спеціальностей. Нашою місією є розви-ток студентів через обмін знаннями та співпрацю компаній, університетів та студентів Європи.",
    statistics: [
      { title: "Країн", desc: "Майже у всіх країнах Європи", value: 84 },
      {
        title: "Осередків",
        desc: "Більше 15 тисяч бестівців по усьому світі",
        value: 30,
      },
      {
        title: "Років досвіду",
        desc: "З 1989 ми забезпечуємо співпрацю та комунікацію між студентами технічних спеціальностей",
        value: 35,
      },
    ],
  };
};

export const footerSection = () => ({
  socialMedia: [
    {
      img: socialMediaLogos[0],
      link: "https://www.facebook.com/BEST.Lviv/?locale=uk_UA",
    },
    { img: socialMediaLogos[1], link: "https://www.instagram.com/best_lviv/" },
    {
      img: socialMediaLogos[2],
      link: "https://www.linkedin.com/company/bestlviv/mycompany/",
    },
    { img: socialMediaLogos[3], link: "https://t.me/s/bestlviv?before=412" },
  ],
  year: 2024,
});
