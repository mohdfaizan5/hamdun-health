import Footer from "@/components/landingpage/Footer";
import NavBar from "@/components/landingpage/NavBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="min-h-screen pt-28">
      <NavBar />
      <section className="min-h-[50vh] flex flex-col items-center">
        <h2 className=" text-center text-balance">
          Thank you for purchasing from
          <span className="bg-brand-secondary px-1">Zulkilf Health</span>
        </h2>
        <Image
          src={"/svgs/sales.svg"}
          width={300}
          height={300}
          alt="gift"
          className="mx-auto my-10"
        />
        <p className="text-center text-balances max-w-72 my-2">
          Fill your health details so that we make the{" "}
          <span className="font-semibold">kit just for you!</span>
        </p>
        <Button variant={"brand"} className="w-52 text-brand-dark">
          Fill form
        </Button>
        <Image
          src={"/svgs/fun-arrow.svg"}
          width={60}
          height={60}
          alt="gift"
          className="mx-auto my-2 animate-pulse"
        />
      </section>
      <Footer />
    </main>
  );
};

export default page;
