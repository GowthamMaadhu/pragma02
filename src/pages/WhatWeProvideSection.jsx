import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Shield,
  Lock,
  ClipboardCheck,
  Server,
  Users,
  Settings,
  Code,
  Cloud,
  ArrowRight,
} from "lucide-react";

const iconMap = {
  ShieldCheck,
  Shield,
  Lock,
  ClipboardCheck,
  Server,
  Users,
  Settings,
  Code,
  Cloud,
  ArrowRight,
};

// ------- SERVICE DATA --------
const serviceData = [
  { title: "Security Strategy", description: "An effective security strategy for SAP is crucial to safeguarding sensitive business data, preventing unauthorized access, and ensuring compliance with industry regulations and best practices. This approach helps maintain system integrity, minimize risks, and support overall business continuity.", image: "/images/we1.png" },
  { title: "Cybersecurity Services", description: "With SecurityBridge, is a cybersecurity platform designed specifically to protect SAP systems from cyber threats. It provides real-time monitoring, vulnerability detection, and threat response to safeguard critical business applications that run on SAP environments.", image: "/images/we2.png" },
  { title: "Application Security", description: "Our focus is on securing the core components of SAP, both on-premises and in the cloud. This includes safeguarding applications, databases, and infrastructure. As SAP systems handle critical business data, they are prime targets for cyberattacks. A robust application security strategy is essential to mitigate risks like unauthorized access, data breaches, and system vulnerabilities", image: "/images/we3.png" },
  {
  title: "GRC",
  description: `We provide implementation and managed services for SAP GRC Access Control, Process Control, Risk Management, and Cloud Identity Access Governance.

● Risk Management: Implement SAP GRC to monitor and mitigate risks like segregation of duties (SoD) conflicts, unauthorized access, and potential fraud.

● Compliance Monitoring: Ensure SAP system compliance with industry standards (GDPR, SOX, ISO) through regular audits.

● Security Policies: Define and enforce security policies that align with SAP capabilities and the company’s overall security objectives.`,
  image: "/images/we4.png"
},
  { title: "Managed Security Services", description: "Our managed SAP Security Services offer organizations specialized, outsourced expertise to protect their SAP environments. We help maintain security, compliance, and system integrity without the need for extensive in-house resources. Our comprehensive approach includes continuous monitoring, threat detection, vulnerability management, and compliance assurance across SAP landscapes.", image: "/images/we5.png" },
  { title: "Shared Professional Services", description: "Our Subject Matter Experts bring a blend of deep expertise, industry knowledge, responsibility, quality, innovation, automation, and IT best practices. We take a unique approach, recruiting top talent both locally and globally to ensure the best resources for our clients.", image: "/images/we6.png" },
  { title: "Managed IT Services", description: "We provide Managed IT Services, Managed Outsourcing, and Software Development, leveraging cutting edge technologies with a focus on innovation, quality, reliability, and timely delivery. Our expertise spans both offshore and onshore Technology Consulting Services.", image: "/images/we7.png" },
  { title: "Software Development", description: "Our services include comprehensive consulting in gap analysis, project baselining, solution implementation with timelines and milestones, with innovation ,quality reliability and Industry best practice.", image: "/images/we8.png" },
  { title: "Salesforce", description: "Grow your business with comprehensive CRM and cloud solutions, offering an all-in-one platform for Sales, Service, Marketing, and more. Our complete CRM system is tailored to your needs, regardless of industry or business size.", image: "/images/we9.png" },
];

// ------- SERVICE CARD --------
const ServiceCard = ({ service, index, activeIndex, setActiveIndex }) => {
  const expanded = activeIndex === index;
  const shortText = service.description.slice(0, 80);

  return (
    <div className="service-card self-start rounded-xl overflow-hidden flex flex-col transition-all duration-300 bg-white shadow">
      <div className="w-full h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="px-6 pt-4 pb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>

        <p className="text-gray-600 text-sm whitespace-pre-line">
          {expanded ? service.description : shortText + "..."}
        </p>

        <button
          className="text-teal-500 mt-2 font-semibold text-sm"
          onClick={() => setActiveIndex(expanded ? null : index)}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};



// ------- MAIN SECTION WITH SLIDES --------
const WhatWeProvideSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    serviceData.slice(0, 3),
    serviceData.slice(3, 6),
    serviceData.slice(6, 9),
  ];

  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-white to-gray-100">

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-black">
            What We Provide
          </h2>
          <p className="mt-4 text-xl text-gray-200">
            Comprehensive IT Solutions for Your Business
          </p>
        </div>

        {/* SLIDES */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex} className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 flex-shrink-0">
                {slide.map((service, index) => (
  <ServiceCard
    key={index + slideIndex * 3}
    service={service}
    index={index + slideIndex * 3}   // FIXED
    activeIndex={activeIndex}
    setActiveIndex={setActiveIndex}
  />
))}

              </div>
            ))}
          </div>
        </div>

  {/* SLIDER CONTROLS WITH ANIMATION */}
<div className="absolute left-1/2 transform -translate-x-1/2 -bottom-24">
  <div className="flex items-center bg-white shadow-xl rounded-full px-7 py-4 space-x-8">

    {/* LEFT ARROW */}
    <button
      onClick={() =>
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
      }
      className="ripple text-gray-700 hover:text-black text-2xl px-3 py-2 rounded-full"
    >
      &#10094;
    </button>

    {/* DOTS */}
    <div className="flex space-x-3">
      {slides.map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentSlide(i)}
          className={`w-3 h-3 rounded-full ripple ${
            currentSlide === i ? "bg-teal-500" : "bg-gray-300"
          }`}
        ></button>
      ))}
    </div>

    {/* RIGHT ARROW */}
    <button
      onClick={() =>
        setCurrentSlide((prev) =>
          prev === slides.length - 1 ? 0 : prev + 1
        )
      }
      className="ripple text-gray-700 hover:text-black text-2xl px-3 py-2 rounded-full"
    >
      &#10095;
    </button>

  </div>
</div>

      </div>
    </section>
  );
};

export default WhatWeProvideSection;
