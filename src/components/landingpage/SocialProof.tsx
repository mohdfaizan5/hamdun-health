import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const SocialProof = () => {
  return (
    <div className="flex flex-col my-10">
      <section className="text-xs flex mx-auto gap-3 items-center">
        <span className="text-black flex">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          {/* <FaStarHalfAlt /> */}
        </span>
        <p>
          <span className="underline">10,852</span> Verified 5-star reviews
        </p>
      </section>
      <section className="flex gap-3 py-3">
        <div className="p-6 border w-44 flex flex-col items-center rounded-sm bg-white">
          <h2 className="gradient-brand text-5xl font-bold ">10+</h2>
          {/* <p className="text-xs">Satisfied</p> */}
          <h3 className="my-0">Benefits</h3>
        </div>
        <div className="p-6 border w-40 flex flex-col items-center rounded-sm bg-white">
          <h2 className="gradient-brand text-5xl font-bold ">7+</h2>
          <h3>Diseases</h3>
        </div>
      </section>
    </div>
  );
};

export default SocialProof;
