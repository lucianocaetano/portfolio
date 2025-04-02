"use client";

import Carousel from "@/components/ui/carousel";

export function BannerImageSection() {
  const slideData = [
    {
      title: "Complete systems",
      src: "/system.gif",
    },
    {
      title: "API RESTful",
      src: "/api_rest.gif",
    },
    {
      title: "Responsive Design",
      src: "/responsive_design.gif",
    },
    {
      title: "Deployment",
      src: "/deployment.gif",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-16">
      <Carousel slides={slideData} />
    </div>
  );
}
