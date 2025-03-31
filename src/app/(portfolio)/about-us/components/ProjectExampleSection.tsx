import { FocusCards } from "@/components/ui/focus-cards";

export default function ProjectExampleSection() {
  const cards = [
    {
      title: "Forest Adventure",
      content: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Valley of life",
      content: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sala behta hi jayega",
      content: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Camping is for pros",
      content: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The road not taken",
      content: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The First Rule",
      content: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      src: "https://assets.aceternity.com/the-first-rule.png",
    },
  ];

  return (
    <div className="w-full max-w-[1000px] mx-auto">
      <h1 className="p-10 py-20 text-3xl">Projects examples</h1>
      <FocusCards cards={cards} />
    </div>
  );
}

