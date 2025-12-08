import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";

// --- Color Definitions ---
const PragmaBlueDark = "#00254D";
const PragmaBlue = "#004792";
const PragmaAccent = "#00E3A2";

// --- ICON COMPONENTS ---
const IconShield = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);
const IconActivity = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
);
const IconTrendingUp = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 10 12 2 20"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
);
const IconZap = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
);
const IconCheckCircle = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14 9 11"></polyline></svg>
);
const IconShieldCheck = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" style={{ filter: `drop-shadow(0 0 10px ${PragmaAccent})`, stroke: PragmaAccent }}></path>
    <path d="m9 12 2 2 4-4"></path>
  </svg>
);
const slides = [
  {
    title: "SAP Vulnerability Management",
    text: "Identifies vulnerabilities within SAP systems, helping organizations mitigate potential threats before they are exploited.",
    image: "/images/slide1.png",
  },
  {
    title: "Real-Time Threat Detection",
    text: "Continuously monitors SAP systems to detect suspicious activities or anomalies in real time, enabling rapid response to security incidents.",
    image: "/images/hotel.png",
  },
  {
    title: "Integrated with SAP",
    text: "SecurityBridge is built to integrate seamlessly with existing SAP environments, providing a deep understanding of SAP-specific protocols, configurations, and data flows.",
    image: "/images/slide3.png",
  },
   {
    title: "Compliance & Auditing",
    text: "Provides tools to help organizations stay compliant with regulatory requirements and offers detailed auditing capabilities for SAP security.",
    image: "/images/slide4.png",
  },
];

const FeatureSlideshow = () => {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="w-full py-16">
      {/* MAIN 2-COLUMN GRID */}
      <div className="grid lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <div className="bg-[#0057A3] text-white px-12 py-20 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-6">
            {slides[active].title}
          </h2>

          <p className="text-lg opacity-90 mb-10 max-w-xl">
            {slides[active].text}
          </p>

          <button className="px-6 py-3 border border-white rounded-full flex items-center gap-3 hover:bg-white hover:text-blue-900 transition">
            Read more →
          </button>
        </div>

        {/* RIGHT SLIDE */}
        <div className="relative h-[500px] overflow-hidden group">
          <img
            src={slides[active].image}
            alt="slide"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>

      {/* CENTERED SLIDER CONTROLS BELOW GRID */}
      <div className="flex justify-center mt-8">
        <div className="bg-white/80 backdrop-blur-xl px-8 py-4 rounded-full flex items-center gap-6 shadow-lg">

          {/* Prev */}
          <button
            onClick={prevSlide}
            className="text-gray-700 hover:text-blue-600 text-2xl"
          >
            ‹
          </button>

          {/* Dots */}
          <div className="flex items-center gap-3">
            {slides.map((_, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full cursor-pointer transition 
                  ${active === i ? "bg-blue-600" : "bg-gray-400"}
                `}
              ></div>
            ))}
          </div>

          {/* Next */}
          <button
            onClick={nextSlide}
            className="text-gray-700 hover:text-blue-600 text-2xl"
          >
            ›
          </button>
        </div>
      </div>

    </section>
  );
};

// --- REUSABLE COMPONENTS ---
const MetricCard = ({ value, title, description }) => (
  <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
      <p className="text-5xl font-extrabold mb-3" style={{ color: PragmaAccent }}>{value}</p>
      <p className="text-xl font-semibold mb-2">{title}</p>
      <p className="text-blue-200 text-sm">{description}</p>
  </div>
);

const FeatureItem = ({ title, description }) => (
  <div className="flex items-start">
    <IconCheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
    <div className="ml-4">
      <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const CapabilityCard = ({ icon: Icon, title, features }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
    <Icon className="w-8 h-8 mb-4 text-blue-800" />
    <h5 className="text-xl font-bold text-gray-900">{title}</h5>
    <ul className="mt-3 text-sm list-disc pl-5 text-gray-700 space-y-1">
      {features.map((f, i) => <li key={i}>{f}</li>)}
    </ul>
  </div>
);

const CoreBenefitItem = ({ title, description }) => (
  <div className="border-b border-blue-400/50 pb-4 last:border-b-0">
    <h4 className="text-xl font-semibold" style={{ color: PragmaAccent }}>{title}</h4>
    <p className="text-blue-200">{description}</p>
  </div>
);
const AnimatedCapabilityCard = ({ icon: Icon, title, features, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="
      relative p-6 rounded-2xl shadow-lg border border-white/10 
      bg-white/5 backdrop-blur-xl 
      hover:bg-white/10 hover:shadow-2xl
      transition-all duration-300 cursor-pointer group
    "
  >
    {/* Glowing Top Border */}
    <div
      className="absolute top-0 left-0 w-full h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition"
      style={{ background: PragmaAccent }}
    ></div>

    {/* Icon with animation */}
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="p-3 w-fit rounded-xl bg-white/10 mb-4 shadow-inner"
      style={{ color: PragmaAccent }}
    >
      <Icon className="w-8 h-8" />
    </motion.div>

    <h5 className="text-xl font-bold text-white mb-3">{title}</h5>

    <ul className="space-y-2 text-blue-100 text-sm">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400"></span>
          {f}
        </li>
      ))}
    </ul>
  </motion.div>
);

const SolutionCapabilities = () => (
  <section className="max-w-7xl mx-auto px-6 mb-20">
    <h3 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
      Solution Capabilities
    </h3>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <AnimatedCapabilityCard
        delay={0.1}
        icon={IconZap}
        title="Proactive SAP Security"
        features={[
          "Vulnerability Management",
          "Code Vulnerability Analysis",
          "Data Loss Prevention",
        ]}
      />

      <AnimatedCapabilityCard
        delay={0.2}
        icon={IconActivity}
        title="Reactive SAP Security"
        features={[
          "Threat Detection",
          "Forensic Analysis (HyperLogging)",
          "Security Dashboard",
        ]}
      />

      <AnimatedCapabilityCard
        delay={0.3}
        icon={IconTrendingUp}
        title="Compliance & Hardening"
        features={[
          "Patch Management",
          "Identity Protection",
          "Security Roadmap",
        ]}
      />

      <AnimatedCapabilityCard
        delay={0.4}
        icon={IconShieldCheck}
        title="Integration & Access"
        features={[
          "SIEM Integration for SAP",
          "Interface Traffic Monitor",
          "Privileged Access Management",
        ]}
      />
    </div>
  </section>
);


// ===========================================
// MAIN APP COMPONENT
// ===========================================

const Cybersecurity = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroImageUrl = "https://i.ibb.co/99H1g42d/bg-cs.png";

  // Data for the Command Center Slides
  const commandCenterSlides = [
    {
      title: "360° Security Posture",
      text: "Get a 360° overview of your SAP security posture.",
      image: "./images/394.png" 
    },
    {
      title: "SOC Visibility",
      text: "Bring SAP security data into your SOC for complete visibility.",
      image: "./images/lighthousee.png"
    },
    {
      title: "System Hardening",
      text: "Harden your SAP systems one step at a time, at your own pace.",
      image: "./images/rock.png"
    }
  ];

  return (
    <div className="bg-gray-50 font-inter min-h-screen">

      {/* 1. Header (Max-width container) */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">
          <div className="text-xl font-bold">Pragma Company</div>

          <nav className="hidden md:flex space-x-8 text-gray-600 text-sm">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">Services</a>
            <a href="#" className="font-semibold text-blue-800 border-b-2 border-blue-800 pb-1">Cybersecurity</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
          </nav>

          <button
            className="px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg flex items-center transition duration-300"
            style={{ backgroundColor: PragmaAccent, color: PragmaBlueDark }}
          >
            Get in Touch
          </button>
        </div>
      </header>

      {/* Breadcrumbs (Max-width container) */}
      <div className="max-w-7xl mx-auto px-6 py-3 text-sm text-gray-500">
        Home / Services / <span className="text-gray-900 font-medium">Cybersecurity</span>
      </div>

      {/* 2. HERO SECTION */}
      <section className="mb-16 relative shadow-2xl">
        <div
          className="relative h-[450px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImageUrl})`,
            filter: "contrast(1.1) saturate(1.15)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div
                className="p-8 rounded-xl max-w-lg shadow-2xl"
                style={{
                  backgroundColor: PragmaBlue,
                  borderLeft: `6px solid ${PragmaAccent}`,
                }}
              >
                <h1 className="text-5xl font-extrabold text-white">SAP Cybersecurity</h1>
                <p className="text-blue-200 text-lg mt-4">We protect your most critical business systems.</p>

                <button
                  className="mt-6 px-4 py-2 rounded-lg border font-semibold flex items-center hover:opacity-80 transition duration-300"
                  style={{
                    color: PragmaAccent,
                    borderColor: PragmaAccent,
                    background: "transparent"
                  }}
                >
                  Discover Solutions &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Overview Section (Max-width container) */} 
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              SecurityBridge: The Leading SAP Cybersecurity Platform
            </h2>
            <div className="flex items-center text-blue-600 font-semibold mb-6">
              <IconShield className="w-6 h-6 mr-2" />
              <span className='text-blue-800'>A Pragma & SecurityBridge Partnership</span>
            </div>
          </div>
          <div className="lg:col-span-2 text-gray-700 space-y-6 text-lg">
            <p>SecurityBridge is the leading provider of a comprehensive SAP-native cybersecurity platform, trusted by organizations globally to safeguard their most critical business systems. SecurityBridge platform seamlessly integrates **real-time threat monitoring, vulnerability management, and compliance** into the SAP environment, empowering businesses to protect data integrity, confidentiality, and availability with minimal manual effort.</p>
            <p>With a proven track record, exceptional customer satisfaction, and **over $5,000 SAP systems secured worldwide**, SecurityBridge offers a **360° view of your SAP security posture**. Known for its ease of use, rapid implementation, and transparent licensing, SecurityBridge is committed to innovation and customer-centricity, helping businesses confidently navigate the evolving SAP security landscape.</p>
            <p className="italic text-gray-500">It serves as an essential tool for CISOs, IT security teams, and auditors in ensuring the integrity and security of their SAP systems.</p>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE COMMAND CENTER (FULL WIDTH LAYOUT) */} 
      <section className="mb-16"> {/* Full viewport width */}
        {/* Inner container to apply horizontal padding/margin while keeping it full width */}
        <div className="mx-4 sm:mx-6 lg:mx-8">
            <div className="rounded-xl overflow-hidden shadow-2xl bg-white">
            
            {/* Top Bar: Horizontal Navigation (Control Panel) */}
            <div className="p-4 md:p-6" style={{ backgroundColor: PragmaBlueDark }}>
                <h3 className="text-2xl font-extrabold text-white mb-6 text-center md:text-left">
                The Cybersecurity Command Center
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {commandCenterSlides.map((slide, index) => {
                    const isActive = activeSlide === index;
                    return (
                    <button 
                        key={index}
                        onClick={() => setActiveSlide(index)}
                        className={`
                        relative p-4 rounded-lg text-left transition-all duration-300 group
                        ${isActive ? "bg-white/10" : "hover:bg-white/5"}
                        `}
                    >
                        {/* Active "Cursor" / Indicator Bar */}
                        <div 
                        className={`absolute bottom-0 left-0 h-1 rounded-full transition-all duration-300 ease-out`}
                        style={{ 
                            width: isActive ? '100%' : '0%',
                            backgroundColor: PragmaAccent 
                        }}
                        />
                        
                        <h4 
                        className={`font-bold text-lg mb-1 transition-colors ${isActive ? 'text-white' : 'text-blue-200'}`}
                        style={{ color: isActive ? PragmaAccent : undefined }}
                        >
                        {slide.title}
                        </h4>
                        
                        {/* Only show brief text on desktop to keep alignment clean, or show truncated */}
                        <p className="text-sm text-blue-300 line-clamp-2 opacity-80 group-hover:opacity-100">
                        {slide.text}
                        </p>
                    </button>
                    );
                })}
                </div>
            </div>

            {/* Bottom Area: Content Display */}
           <div className="relative h-[400px] md:h-[500px] overflow-hidden group">

  <div className="relative h-[400px] md:h-[500px] overflow-hidden group">

  {/* CLEARER, BRIGHTER BACKGROUND IMAGE + ZOOM EFFECT */}
  <div
    className="
      absolute inset-0 bg-cover bg-center 
      transition-all duration-700 ease-in-out 
      brightness-110 contrast-110 saturate-125 
      group-hover:scale-110
    "
    style={{
      backgroundImage: `url(${commandCenterSlides[activeSlide].image})`,
    }}
  >
    {/* Soft Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
  </div>

  </div>


                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                    <div className="max-w-3xl transform transition-all duration-500 translate-y-0 opacity-100">
                    <span 
                        className="inline-block px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-3 text-black"
                        style={{ backgroundColor: PragmaAccent }}
                    >
                        Active Module
                    </span>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                        {commandCenterSlides[activeSlide].title}
                    </h3>
                    <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl">
                        {commandCenterSlides[activeSlide].text}
                    </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
      </section>

      {/* 5. Solution Capabilities Section (Max-width container) */}
      <SolutionCapabilities />

     <FeatureSlideshow/>

      {/* 7. Key Metrics Section (Full width container with blue background) */}
      <section className="py-16 mb-16" style={{ backgroundColor: PragmaBlueDark }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h3 className="text-4xl font-extrabold text-center mb-12">
            Proven Success & Expertise
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <MetricCard value="+5,000" title="SAP Systems Protected" description="Trusted by hundreds of customers worldwide, our native SAP platform is built by SAP experts." />
            <MetricCard value="100%" title="Customer Satisfaction" description="We are passionate about happy customers and delivering a solid platform. We act as an extension of the SAP team." />
            <MetricCard value="75% Lower" title="Startup Costs" description="No hardware is needed, limited configuration is required, and time to value is often less than 48 hours." />
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to secure your SAP environment?</h3>
            <p className="text-gray-400 mb-6">Contact Pragma to schedule a SecurityBridge demonstration.</p>
            <a href="#" 
                className="font-bold py-3 px-8 rounded-lg shadow-xl hover:opacity-90 transition duration-300 transform hover:scale-[1.02] text-lg"
                style={{ backgroundColor: PragmaAccent, color: PragmaBlueDark }}
            >
                Request a Demo Today
            </a>
            <p className="text-gray-600 text-sm mt-8">&copy; 2025 Pragma Company. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default Cybersecurity;