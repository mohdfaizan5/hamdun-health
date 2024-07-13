import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";

const faqs = [
  { qusetion: "What is Majoon E Keemya?", answer: "Its a herbal product..." },
  {
    qusetion: "Can I cure my old pains with it?",
    answer: "Its a herbal product...",
  },
  {
    qusetion: "Can I use it if I have BP(Blood Pressure)?",
    answer: "Its a herbal product...",
  },
  {
    qusetion: "Can I use it if I have Sugar(Diabeties)?",
    answer: "Its a herbal product...",
  },
];

const Faq = () => {
  return (
    <div className=" mb-20 py-16">
      <h2>FAQ&apos;s</h2>
      <Accordion type="single" className="max-w-96" collapsible>
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
