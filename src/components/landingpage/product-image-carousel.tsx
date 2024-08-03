"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "../ui/button";
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

const ProductImageCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <section className="md:max-w-[29rem]">
      <Carousel setApi={setApi} opts={{ loop: false }}>
        <CarouselContent className="relative">
          <CarouselItem className="">
            <Image
              className="mx-auto"
              src={"/assets/Faizan Majoon Jar.png"}
              width={350}
              height={400}
              alt=""
            />
          </CarouselItem>
          <CarouselItem className="">
            <Image
              className="mx-auto"
              src={"/assets/features.png"}
              width={400}
              height={400}
              alt=""
            />
          </CarouselItem>
          <CarouselItem className="">
            <Image
              className="mx-auto my-auto"
              src={"/assets/Faizan Majoon Jar UR.png"}
              width={400}
              height={400}
              alt=""
            />
          </CarouselItem>
        </CarouselContent>
        <div className="flex justify-between   top-[50%] right-0 left-0">
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => api?.scrollTo(current - 1)}
          >
            <ArrowLeftIcon />
          </Button>
          <Button
            onClick={() => api?.scrollTo(current + 1)}
            variant={"outline"}
            size={"icon"}
          >
            <ArrowRightIcon />
          </Button>
        </div>
      </Carousel>
    </section>
  );
};

export default ProductImageCarousel;
