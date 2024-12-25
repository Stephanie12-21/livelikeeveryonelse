"use client";

import React, { useState, useEffect, useRef } from "react";
import Faq from "@/components/MainComponent/Sections/Faq/Faq";
import Hero from "@/components/MainComponent/Sections/Hero/Hero";
import Informations from "@/components/MainComponent/Sections/Informations/Informations";
import Sponsors from "@/components/MainComponent/Sections/Sponsors/Sponsors";
import Partenaires from "@/components/MainComponent/Sections/Partenaires/Partenaires";
import Adds from "@/components/MainComponent/Sections/Adds/Adds";

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [animationDirection, setAnimationDirection] = useState("left");
  const sectionRefs = useRef([]);

  const sections = [
    { id: "hero", component: <Hero /> },
    { id: "informations", component: <Informations /> },
    { id: "faq", component: <Faq /> },
    { id: "sponsors", component: <Sponsors /> },
    { id: "partenaires", component: <Partenaires /> },
  ];

  useEffect(() => {
    const localRefs = sectionRefs.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsPopupOpen(false);
            setTimeout(() => {
              setAnimationDirection((prev) =>
                prev === "left" ? "right" : "left"
              );
              setIsPopupOpen(true);
            }, 300);
          }
        });
      },
      { threshold: 0.5 }
    );

    localRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      localRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <main className="p-8">
      {sections.map((section, index) => (
        <div
          key={section.id}
          id={section.id}
          ref={(el) => (sectionRefs.current[index] = el)}
          className="mb-8"
        >
          {section.component}
        </div>
      ))}

      {isPopupOpen && (
        <Adds
          direction={animationDirection}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
    </main>
  );
}
