"use client";
import React from "react";
import Image from "next/image";
import {cn} from "@/lib/utils";

const ServiceSection = () => {

  return (
   <div className="max-w-2xl mx-auto antialiased pt-4 px-8">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className={cn("mb-10 md:flex my-20 gap-8", index % 2 === 0 ? "md:flex-row-reverse" : "")}>
            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover h-full"
                />
              )}
            </div>
            <div className="max-w-[400px] flex flex-col gap-8">
              <h1 className="text-2xl font-bold">
                {item.title}
              </h1>
              {item.description}
            </div>
          </div>
        ))}
      </div>
  );
};

const dummyContent = [
  {
    title: "Frontend and SEO",
    description: (
      <>
        <p>
          On the front end, we design intuitive, attractive, and fully responsive interfaces, ensuring that every user enjoys a fluid experience regardless of their device. We work with modern technologies such as React, Next.js, and TypeScript, always taking care of every visual and accessibility detail.
        </p>
      </>
    ),
    badge: "React",
    image:
      "/frontend_banner.gif",
  },
  {
    title: "Documented Rest APIs",
    description: (
      <>
        <p>
          On the backend, we develop robust, scalable, and secure solutions using 
          technologies such as Laravel and Node.js. We focus on writing clean and
          modular code, prioritizing performance and maintainability. We also
          document each API clearly and professionally (using tools like
          Swagger/OpenAPI), allowing other developers to integrate quickly and seamlessly.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "/backend_api_banner.gif",
  },
  {
    title: "Responsive Design",
    description: (
      <>
        <p>
         In a world where the majority of web traffic comes from mobile devices, responsive design isn&apos;t an option—it&apos;s a necessity. We&apos;ll create interfaces that adapt perfectly to any screen size, from smartphones and tablets to desktop monitors.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "/responsive_design_banner.gif",
  },
];

export default ServiceSection
