"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";

const faqs = [
  {
    qusetion: "What is exactly is Majoon E Keemya?",
    answer:
      "Majoon E Keemya is a traditional herbal remedy designed to strengthen the body and enhance overall vitality. Known for its potent formulation, it targets weakness from head to toe, revitalizing energy levels and improving physical performance.",
  },
  {
    qusetion: "What are the ingredients used in Majoon E Keemya?",
    answer: `Gond Babool - Acacia Gum, 
, Ashwagandha - Withania Somnifera (Indian Ginseng)
, Kamarkas - Cissus Quadrangularis (Veldt Grape)
, Heera Kasees - Black Seed (Nigella Sativa)
, Safed Musli - Chlorophytum Borivilianum (White Musli)
, Chopchini - Smilax China (Chinese Smilax)
, Salab Misri - Orchis Latifolia (Salab Grass)
, Shatavari - Asparagus Racemosus (Wild Asparagus)
, Suranjan Shirin - Sweet Potato (also refers to a type of medicinal herb)`,
  },
  {
    qusetion: "Will this work for me?",
    answer:
      "First we need to know your health, by a questionnaire, then we prepare a custom jar just for you",
  },
  {
    qusetion: "When can I expect the product?",
    answer: "Its takes around 24-48hrs to ship to your doorstep",
  },
  {
    qusetion: "Can I use it if I have BP(Blood Pressure)?",
    answer: "Yes, we take care of all the health issues while making it",
  },
  {
    qusetion: "Can I use it if I have Sugar(Diabeties)?",
    answer: "Yes, we take care of all the health issues while making it",
  },
  {
    qusetion: "Can I cure my old pains with it?",
    answer: "Yes, by using it for a month you will see the difference",
  },
  {
    qusetion: "What exactly am I getting in the kit?",
    answer: "You'll get a box of Majoon E Keemya, a complete health guide book",
  },
  {
    qusetion: "How long does it take to see the results?",
    answer: "You will see the results in 14 days",
  },

  {
    qusetion: "How many days can I use one jar?",
    answer: "It contains 30 days of usage",
  },
];

const Faq = () => {
  return (
    <div className=" mb-20 py-16 flex flex-col justify-center items-center gap-3">
      <h2>FAQ&apos;s</h2>
      <Accordion type="single" className="md:w-[600px] mx-auto" collapsible>
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger>{faq.qusetion}</AccordionTrigger>
            <AccordionContent>{faq.answer} </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Button variant={"brand-outline"}>See What People say about it</Button>
    </div>
  );
};

export default Faq;
