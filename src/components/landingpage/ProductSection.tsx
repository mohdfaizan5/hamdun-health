import React from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { paymentLink } from "@/lib/data";
import ProductImageCarousel from "./product-image-carousel";
import BuyNowClientBtn from "../client/buy-now-client-btn";

const ProductSection = () => {
  return (
    <div className="min-h-[70vh] flex mx-auto flex-col-reverse md:flex-row mt-5 md:mt-0 items-center justify-center md:gap-5">
      <section className="md:max-w-[500px] px-5 flex flex-col gap-2 py-3 ">
        <h2 className="mb-3 text-3xl font-semibold"> Majoon-e-Keemya Kit</h2>
        <p className="text-brand-text2/80 text-[15px] mb-3">
          Majoon Keemya, the ancient formula for modern pain relief. Experience
          renewed strength, vitality & Improve overall well-being. Order today.
          Limited time offer: Experience the difference.
        </p>
        {/* <h2 className="">
          Get started with your <br />
        </h2> */}
        <div className="flex justify-between pt-2 ">
          <div>
            <h4 className="font-semibold ">Majoon Keemya Jar</h4>
            <p className="text-xs opacity-80">30 day supply per Jar</p>
          </div>
          <div className="flex items-center gap-2">
            <h4 className=" scale-90">
              <span className="font-light opacity-80 relative">
                ₹3999{" "}
                <span className="absolute left-2 bottom-2 -rotate-12 w-10 h-[1px] bg-red-600" />
              </span>
            </h4>
            <p className="font-semibold flex gap-2">₹2977</p>
          </div>
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
          <div className="flex items-center gap-2">
            <h4 className=" scale-90">
              <span className="font-light opacity-80 relative">
                ₹999
                <span className="absolute left-2 bottom-2 -rotate-12 w-8 h-[1px] bg-red-600" />
              </span>
            </h4>
            <p className="font-semibold flex gap-2">Free</p>
          </div>
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
          <div className="flex items-center gap-2">
            <h4 className=" scale-90">
              <span className="font-light opacity-80 relative">
                ₹999
                <span className="absolute left-2 bottom-2 -rotate-12 w-8 h-[1px] bg-red-600" />
              </span>
            </h4>
            <p className="font-semibold flex gap-2">Free</p>
          </div>
        </div>
        <Separator />
        <div className="flex justify-between pt-2 text-xl text-brand">
          <div>
            <h4 className="font-semibold ">Total</h4>
          </div>
          <div className="flex items-center gap-2">
            <h4 className=" scale-75">
              <span className="font-light opacity-80 relative">
                ₹6000
                <span className="absolute left-2 bottom-3 -rotate-[15deg] w-14 h-[1px] bg-red-600" />
              </span>
            </h4>{" "}
            <p className="font-semibold ">₹2977</p>
          </div>{" "}
        </div>
        <Link className="w-full mt-3" href={paymentLink} target="_blank">
          {/* <Button className="w-full" variant={"brand"}>
            Buy Majoon-e-Keemya
          </Button> */}
          <BuyNowClientBtn/>
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
