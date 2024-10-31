import IntroSection from "@/components/Intro/Intro";
import DescriptionSection from "@/components/Description/Description";
// import Customers from "@/components/Customers/Customers";

import Organizators from "@/components/Organizators/Organizators";
import Partners from "@/components/Partners/Partners";
import ForPartners from "@/components/ForPartners/ForPartners";
import Why from "@/components/Why/Why";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MissionVission from "@/components/MissionVission/MissionVission";
import Registration from "@/components/Registration/Registration";
// import SwiperContainer from "@/components/Swiper/SwiperContainer";
import CustomSwiper from "@/components/Swiper/SwiperContainer";
// import StartScreen from "@/components/animateReferences/StartScreen";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden text-neutral-50 ">
      {/* <StartScreen /> */}
      <Header />
      <IntroSection />
      <main className="flex min-h-screen flex-col space-y-20 items-center justify-between overflow-hidden bg-gradient-to-b from-[#101010] to-[#141414]">
        <DescriptionSection />
        <MissionVission />
        <ForPartners />
        <Why />
        <Registration />

        <CustomSwiper />
        <Organizators />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
