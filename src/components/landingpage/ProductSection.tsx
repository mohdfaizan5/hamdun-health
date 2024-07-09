import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const ProductSection = () => {
  return (
    <div className="min-h-[70vh] flex flex-col-reverse md:flex-row">
      <section>
        <h2>Get started with your</h2>
        <h2 className="font-bold "> Majoon-e-Keemya Kit**</h2>
        <Button variant={"brand"}>Buy Majoon-e-Keemya</Button>
      </section>
      <section>
        <Image
          src={"/assets/Faizan Majoon Jar.png"}
          width={400}
          height={400}
          alt=""
        />
      </section>
    </div>
  );
};

export default ProductSection;
