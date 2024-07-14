import Image from "next/image";
import React from "react";
import { GrMenu } from "react-icons/gr";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="flex justify-between items-center w-full fixed bg-brand-bg left-0 right-0 top-0 px-3 py-3 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <section className="">
        <Image
          width={80}
          height={80}
          className=""
          src="/New logo.png"
          alt=""
        />
      </section>
      <nav className="hidden md:flex">
        <Link href={"#benefits"}>
          <Button variant={"link"}>Why us!</Button>
        </Link>

        <Link href={"#testimonils"}>
          <Button variant={"link"}>See what our patients say about us!</Button>
        </Link>
        <Link href={""}>
          <Button variant={"brand-outline"}>Get a Majoon just for you!</Button>
        </Link>
      </nav>
      <Button variant={"brand"}>Buy Majoon</Button>

      <nav className="flex items-center gap-1 md:hidden">
        <Sheet>
          <SheetTrigger>
            <GrMenu size={20} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <h3 className="gradient-brand font-semibold">
                  ZulKifL Health Products
                </h3>
              </SheetTitle>
              <SheetDescription className="py-10 flex flex-col justify-between h-[90vh]">
                <div>
                  <Link href={"#benefits"}>
                    <Button variant={"ghost"}>- Why us!</Button>
                  </Link>

                  <Link href={"#testimonils"}>
                    <Button variant={"ghost"}>
                      - See what our patients say about us!
                    </Button>
                  </Link>
                </div>
                <div>
                  <Link href={""}>
                    <Button variant={"brand-outline"}>
                      Get a Majoon just for you!
                    </Button>
                  </Link>
                  <Link href={""}>
                    <Button variant={"brand"}>Buy Majoon Keemya</Button>
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default NavBar;
