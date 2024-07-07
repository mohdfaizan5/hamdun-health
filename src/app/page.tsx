import AnimatedText from "@/components/landingpage/AnimatedText";
import Faq from "@/components/landingpage/Faq";
import NavBar from "@/components/landingpage/NavBar";
import ProductSection from "@/components/landingpage/ProductSection";
import Testimonials from "@/components/landingpage/Testimonials";
import React from "react";

const page = () => {
  return (
    <div className="prose">
      <NavBar />
      <ProductSection/>
      <Testimonials/>
      <AnimatedText/>
      <Faq/>
      <h1 className="text-brand-primary">Hamdun health</h1>
    </div>
  );
};

export default page;
