import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonialsData = [
  {
    description:
      "The extension is a life saver and would improve dramatically production times for developers and coders. I use it daily and purchased the PRO for this reason.",
    name: "Fabrizio Spanu",
    subTitle: "3 days ago",
    image: "https://randomuser.me/api/portraits",
  },
  {
    description:
      "The extension is a life saver and would improve dramatically production times for developers and coders. I use it daily and purchased the PRO for this reason.",
    name: "Fabrizio Spanu",
    subTitle: "1 day ago",
    image: "https://randomuser.me/api/portraits",
  },
  {
    description:
      "The extension is a life saver and would improve dramatically production times for developers and coders. I use it daily and purchased the PRO for this reason.",
    name: "Fabrizio Spanu",
    subTitle: "5 days ago",
    image: "https://randomuser.me/api/portraits",
  },
  {
    description:
      "The extension is a life saver and would improve dramatically production times for developers and coders. I use it daily and purchased the PRO for this reason.",
    name: "Fabrizio Spanu",
    subTitle: "15 days ago",
    image: "https://randomuser.me/api/portraits",
  },
];

const Testimonials = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row gap-2">
      {testimonialsData.map((testimonial, index) => (
        <Testimonial key={index} data={testimonial} />
      ))}
    </div>
  );
};

const Testimonial = ({ data }: any) => {
  const { description, image, name, subTitle } = data;
  return (
    <Card className="bg-brand-bg/60 p-6">
      <div className="flex items-center pb-2 gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h5 className=" font-semibold">{name}</h5>
          <p className="text-xs opacity-75">{subTitle}</p>
        </div>
      </div>
      <CardContent className="p-0 mt-4">
        <p className="text-sm">"{description}"</p>
      </CardContent>
    </Card>
  );
};

export default Testimonials;
