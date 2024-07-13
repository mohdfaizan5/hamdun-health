import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator";

const ProductSection = () => {
  return (
    <div className="min-h-[70vh] flex mx-auto flex-col-reverse md:flex-row items-center justify-center md:gap-5">
      <section className="md:w-[40vw] flex flex-col gap-2 py-3 md:py-0">
        <h2>
          Get started with your <br />
          <span className="font-bold"> Majoon-e-Keemya Kit**</span>
        </h2>
        <div className="flex justify-between pt-2 scale-90 md:scale-100">
          <div>
            <h4 className=" font-semibold">AG1 Pouch</h4>
            <p className="opacity-80 text-xs">
              30 day supply per pouch, ships every 30 days
            </p>
          </div>
          <h4>$79/mo USD</h4>
        </div>
        <Separator />
        <p className="text-xs">FIRST TIME PURCHASE INCLUDES:</p>
        <div className="flex justify-between pt-2 scale-90 md:scale-100">
          <div>
            <h4 className=" font-semibold">AG1 Pouch</h4>
            <p className="opacity-80 text-xs w-80 md:w-full">
              30 day supply per pouch, ships every 30 days
            </p>
          </div>
          <p className=" font-semibold">
            <span className="line-through opacity-80 font-light">$79/mo</span>{" "}
            Free
          </p>
        </div>
        <div className="flex justify-between pt-2 scale-90 md:scale-100">
          <div>
            <h4 className=" font-semibold">AG1 Pouch</h4>
            <p className="opacity-80 text-xs">
              30 day supply per pouch, ships every 30 days
            </p>
          </div>
          <p className=" font-semibold">
            <span className="line-through opacity-80 font-light">$79/mo</span>{" "}
            Free
          </p>
        </div>
        <Separator />
        <div className="flex justify-between pt-2 text-xl scale-90 md:scale-100">
          <div>
            <h4 className=" font-semibold">Total</h4>
          </div>
          <p className=" font-semibold">
            <span className="line-through opacity-80 font-light">$299/mo</span>{" "}
            $99
          </p>
        </div>
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
