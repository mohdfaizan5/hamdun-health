import React from "react";
import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { paymentLink } from "@/lib/data";
import { Badge } from "../ui/badge";
import ProductImageCarousel from "./product-image-carousel";

const ProductSection = () => {
  return (
    <div className="min-h-[70vh] flex mx-auto flex-col-reverse md:flex-row items-center justify-center md:gap-5">
      <section className="md:w-[500px] px-5 flex flex-col gap-2 py-3 ">
        <h2 className="mb-3 text-3xl font-semibold"> Majoon-e-Keemya Kit</h2>
        <p></p>
        {/* <h2 className="">
          Get started with your <br />
        </h2> */}
        <div className="flex justify-between pt-2 ">
          <div>
            <h4 className="font-semibold ">Majoon Keemya Jar</h4>
            <p className="text-xs opacity-80">30 day supply per Jar</p>
          </div>
          <h4>₹ 2977</h4>
        </div>
        <Separator />
        <p className="text-xs">FIRST TIME PURCHASE INCLUDES:</p>
        <div className="flex justify-between pt-2 ">
          <div>
            <h4 className="flex items-center gap-2 font-semibold">
              Health practical book
              <BadgeShine>Bonus</BadgeShine>
            </h4>
            <p className="text-xs opacity-80 w-80 md:w-full">
              A full guide to healthy life
            </p>
          </div>
          <p className="font-semibold ">
            <span className="font-light line-through opacity-80">₹999</span>
            Free
          </p>
        </div>
        <div className="flex justify-between pt-2 ">
          <div>
            <h4 className="flex items-center gap-2 font-semibold">
              Guide
              <BadgeShine>Bonus</BadgeShine>
              {/* <Badge className="mb-2 bg-slate-700 -rotate-3">Bonus</Badge> */}
            </h4>
            <p className="text-xs opacity-80">Checklist to keep you healthly</p>
          </div>
          <p className="font-semibold ">
            <span className="font-light line-through opacity-80">₹599</span>
            Free
          </p>
        </div>
        <Separator />
        <div className="flex justify-between pt-2 text-xl text-brand">
          <div>
            <h4 className="font-semibold ">Total</h4>
          </div>
          <p className="font-semibold ">
            <span className="font-light line-through opacity-80">₹6000</span>{" "}
            ₹2977
          </p>
        </div>
        <Link className="w-full mt-3" href={paymentLink} target="_blank">
          <Button className="w-full" variant={"brand"}>Buy Majoon-e-Keemya</Button>
        </Link>
      </section>
      <ProductImageCarousel />
    </div>
  );
};

const BadgeShine = ({ children }: any) => {
  return (
    <span className="inline-flex h-full animate-background-shine cursor-pointer items-center justify-center rounded-full border border-green-800 bg-[linear-gradient(110deg,#000,45%,#33b540,55%,#000)] bg-[length:250%_100%] px-2 py-0 text-xs font-medium text-gray-300">
      {children}
    </span>
  );
};

export default ProductSection;
