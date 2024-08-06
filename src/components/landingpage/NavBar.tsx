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
import { paymentLink } from "@/lib/data";
import { Badge } from "../ui/badge";
import Timer from "./timer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const NavBar = () => {
  return (
    <header className="flex justify-between items-center w-full fixed bg-brand-bg left-0 right-0 top-0 px-3 py-5 border-b-2 md:px-10 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 justify-center">
      <Link href={"/"} className="">
        <Image width={80} height={80} className="" src="/New logo.png" alt="" />
      </Link>
      <nav className="font-bold hidden md:flex gap-4">
        <Link href={"/#benefits"}>
          <Button variant={"link"}>Why Us</Button>
        </Link>
        <Link href={"/#faq"}>
          <Button variant={"link"}>FAQ{"'"}s</Button>
        </Link>
        <Link href={"/#testimonils"}>
          <Button variant={"link"}>Discover Our Impact</Button>
        </Link>
        <Link href={paymentLink}>
          <Button variant={"brand-outline"}>Get a Majoon just for you!</Button>
        </Link>
        {/* <p>Offer end in</p>
        <Badge>
          <Timer />
        </Badge> */}
      </nav>

      {/* <Button className="hidden md:flex" variant={"brand"}>
        Buy Majoon
      </Button> */}

      <nav className="flex items-center gap-1 md:hidden">
        <Sheet>
          <SheetTrigger>
            <GrMenu size={20} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <h3 className="gradient-brand font-semibold">
                  <Image
                    width={40}
                    height={40}
                    className="mx-auto"
                    src="/New logo.png"
                    alt=""
                  />
                  ZulKifL Health Products
                </h3>
              </SheetTitle>
              <SheetDescription className="py-10 flex flex-col justify-between h-[90vh]">
                <div className="flex flex-col items-start">
                  <Link href={"/#benefits"}>
                    <Button variant={"ghost"}>- Why us!</Button>
                  </Link>
                  <Link href={"/#faq"}>
                    <Button variant={"ghost"}>- FAQ{"'"}s</Button>
                  </Link>
                  <Link href={"/#testimonils"}>
                    <Button variant={"ghost"}>
                      {/* - See what our patients say about us! */}- Discover
                      Our Impact
                    </Button>
                  </Link>
                  <Card className="mx-auto mt-2">
                    <CardHeader>
                      <CardTitle> Limited Time offer</CardTitle>
                      {/* <CardDescription>Card Description</CardDescription> */}
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-center">Ends in</p>
                      <Badge className="w-full flex items-center justify-center">
                        <Timer />
                      </Badge>
                    </CardContent>
                    {/* <CardFooter>
                      <p>Card Footer</p>
                    </CardFooter> */}
                  </Card>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Link href={paymentLink}>
                    <Button variant={"brand-outline"}>
                      Get a Majoon just for you!
                    </Button>
                  </Link>
                  <Link href={paymentLink}>
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
