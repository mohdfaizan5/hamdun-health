import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const testimonialsData = [
  {
    description:
      "I had been suffering from debilitating back pain for years. Nothing seemed to work until I tried Majoon Keemya. Within a few weeks, I noticed a significant reduction in pain. It's like a miracle cure! I can now enjoy activities I haven't been able to do in years.",
    name: "	Himani Godara",
    subTitle: "3 days ago",
    image:
      "https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/b4da3e31-4b07-4f7d-8535-e7324cee1f3e._CR0,0,424,424_SX48_.jpg",
  },
  {
    description:
      "Living with a slip disc was a nightmare. I tried countless medications and therapies without much success. Majoon Keemya was my last hope, and it didn't disappoint. The pain has reduced drastically, and I'm regaining my mobility. I'm so grateful for this product.",
    name: "Fatima Banu",
    subTitle: "1 day ago",
    image:
      "https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/f9f1e5c2-d849-410d-9b6e-459e8e264ccf._CR0,0,500,500_SX48_.jpg",
  },
  {
    description:
      "Majoon Keemya has transformed my life. I used to be constantly in pain, but now I can enjoy my hobbies and spend quality time with my family without worrying about discomfort. This product is a true blessing.",
    name: "AjishPG",
    subTitle: "9 days ago",
    image:
      "https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/2208f3a2-eb43-4625-b28b-94d917a2fadc._CR0,0,375,375_UX460_.jpg",
  },
  {
    description:
      "I was hesitant to try another pain relief product, but Majoon Keemya's natural ingredients convinced me. I'm amazed at how quickly it worked. It's gentle on my body and provides long-lasting relief. I highly recommend it.",
    name: "Abdul majeed",
    subTitle: "13 days ago",
    image:
      "https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20" id="testimonils">
      <h3 className="text-brand-text2 font-semibold text-3xl text-center mb-8">
        See what our customers{" "}
        <span className="text-brand-primary ">
          say!{" "}
          <Image
            src={"/svgs/chat-text.svg"}
            width={30}
            className="inline -mt-3"
            height={30}
            alt=""
          />
        </span>
      </h3>
      <div className=" flex flex-col md:flex-row gap-2">
        {testimonialsData.map((testimonial, index) => (
          <Testimonial key={index} data={testimonial} />
        ))}
      </div>
    </section>
  );
};

const Testimonial = ({ data }: any) => {
  const { description, image, name, subTitle } = data;
  return (
    <Card className="bg-brand-bg/30 p-6">
      <div className="flex items-center pb-2 gap-2">
        <Avatar>
          <AvatarImage src={image} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h5 className=" font-semibold">{name}</h5>
          <p className="text-xs opacity-75">{subTitle}</p>
        </div>
      </div>
      <CardContent className="p-0 mt-4">
        <p className="text-sm">&ldquo;{description}&ldquo;</p>
      </CardContent>
    </Card>
  );
};

export default Testimonials;
