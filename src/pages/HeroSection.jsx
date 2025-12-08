import React, { useState, useEffect } from "react";
import Button from "../components/Button";

const HeroSection = () => {
  const images = [
    "/images/pic5.png",
    "/images/pic6.png",
    "/images/pic7.png",
    "/images/paris1.png",
    "/images/bridge1.png",
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
<section
  id="home"
  className="relative pt-28 h-[80vh] flex items-center"
>
      {/* ======== SLIDESHOW BACKGROUND ======== */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms]
              ${i === index ? "opacity-100" : "opacity-0"}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
      </div>

      {/* Slight dark overlay to improve text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* ======= FLOATING LEFT BOX (Capgemini style) ======= */}
<div
  className="
    absolute left-10 top-1/2 translate-y-[20%] 
    md:left-20 md:top-1/2 md:translate-y-[25%]
    bg-[#0A4A87]/90 backdrop-blur-lg 
    p-3 md:p-5
    rounded-xl shadow-2xl 
    max-w-xl z-20
  "
>

        {/* === Your Full Left Side Content Stays SAME === */}
        <h1 className="text-3xl md:text-4xl font-black text-white leading-tight drop-shadow-lg">
          Protecting Your SAP Landscape.
          <span
            className="block text-transparent bg-clip-text 
            bg-gradient-to-r from-cyan-300 to-blue-400 mt-0.5"
          >
            Empowering Your Enterprise.
          </span>
        </h1>

        <p
          className="text-xl md:text-2xl text-white mt-4 mb-8 
          drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)] leading-relaxed"
        >
          Industry-leading SAP cybersecurity and compliance solutions.
        </p>

        
      </div>
    </section>
  );
};

export default HeroSection;
