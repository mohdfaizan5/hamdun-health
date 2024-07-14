import React from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdOutlineScience } from "react-icons/md";
import { BsArrowRepeat } from "react-icons/bs";
import { PiMedalDuotone } from "react-icons/pi";
import { MdHealthAndSafety } from "react-icons/md";
import { PiPlantDuotone } from "react-icons/pi";

const featuresData: {
  title: React.ReactNode;
  icon: any;
  styles?: string;
}[] = [
  {
    title: "Science-driven nutrition supplement",
    icon: <MdOutlineScience />,
    styles: "col-start-1 col-end-4",
  },
  {
    title: "75 ingredients your body can easily absorb",
    icon: <PiPlantDuotone />,
    styles: "col-start-4",
  },
  {
    title: "Third-party certified for safety",
    icon: <PiMedalDuotone />,
    // styles: "col-start-6",
  },
  {
    title: "Optimized for flavor without artificial sweeteners",
    icon: <MdHealthAndSafety />,
  },
  {
    title: "Trusted by leading doctors and scientists",
    icon: <VscWorkspaceTrusted />,
  },
  {
    title: `Continuously improved since 2010`,
    icon: <BsArrowRepeat />,
  },
];

const Features = () => {
  return (
    <div className="flex flex-col gap-3 pb-5 md:mx-auto md:grid md:grid-cols-4">
      {featuresData.map((feature, i) => (
        <div
          className={`flex md:col-span-2 gap-5 items-center md:${feature?.styles}`}
          key={i}
        >
          <span
            className={`text-2xl bg-brand-primary text-white rounded-full p-2 font-light  top-0 
            `}
          >
            {feature.icon}
          </span>
          <p className=" text-balance max-w-72 my-0 ">{feature.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
