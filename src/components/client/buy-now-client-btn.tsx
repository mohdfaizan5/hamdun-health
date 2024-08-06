"use client"
import React from "react";
import { sendGTMEvent } from "@next/third-parties/google";

const BuyNowClientBtn = () => {
  return (
    <button
      onClick={() =>
        sendGTMEvent({
          event: "event",
          value: "ads_conversion_Purchase_1",
        })
      }
      className="inline-flex w-full h-12 items-center justify-center rounded-md border  bg-gradient-to-t from-brand-primary/80 from-0% to-brand-secondary px-6 font-medium text-brand-text2 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 "
    >
      Buy Majoon-e-Keemya
    </button>
  );
};

export default BuyNowClientBtn;
