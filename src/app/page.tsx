import Notification from "@/components/client/Notification";
import RevealTextOnScroll from "@/components/landingpage/AnimatedText";
import Faq from "@/components/landingpage/Faq";
import Features from "@/components/landingpage/Features";
import FeaturesShowCase from "@/components/landingpage/FeaturesShowCase";
import Footer from "@/components/landingpage/Footer";
import NavBar from "@/components/landingpage/NavBar";
import ProductSection from "@/components/landingpage/ProductSection";
import SocialProof from "@/components/landingpage/SocialProof";
import Testimonials from "@/components/landingpage/Testimonials";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="px-8 mt-20 bg-brand-bg md:px-16">
      <NavBar />
      <Notification />
      <ProductSection />
      <SocialProof />
      <Features />
      <FeaturesShowCase/>

      {/* <Testimonials /> */}
      {/* <section className="flex items-center bg-brand-secondary/50 w-[70vw]">
        <Image
          src={"/assets/Faizan Majoon Jar UR.png"}
          width={400}
          height={400}
          alt=""
          className="rotate-2"
        />
        <div className="">
          <h2>AG1 CONTAINS YOUR</h2>
          <ul className="list-none">
            <li>- Multivitamin</li>
            <li>- Multimineral</li>
            <li>- Stress adaptogens</li>
            <li>- Multivitamin</li>
            <li>- Multimineral</li>
            <li>- Stress adaptogens</li>
            <li>- Multivitamin</li>
            <li>- Multimineral</li>
          </ul>
        </div>
      </section> */}
      {/* <RevealTextOnScroll>
        "AG1 is designed to replace multiple supplements by covering nutritional
        gaps with a comprehensive blend of nutrients. Just one tasty scoop each
        day helps meet your foundational health needs. Simply put, its a way to
        invest in your health now and in the long run."
      </RevealTextOnScroll>
      <h1 className="text-brand-primary">ZulKifL health</h1> */}
      <Faq />
      <Footer/>
    </div>
  );
};

export default page;
