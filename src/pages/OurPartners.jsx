import React, { useState } from "react";
import { motion } from "framer-motion";

const partnerDetails = [
  {
    logo: "/images/securitybridge.png",
    title: "SecurityBridge",
    desc: "Strengthen your cybersecurity posture with real-time threat detection and automated protection.",
  },
  {
    logo: "/images/krishivala.png",
    title: "Krishivala",
    desc: "Delivering innovative digital solutions to help organizations operate smarter and faster.",
  },
  {
    logo: "/images/soterion.png",
    title: "Soterion",
    desc: "Empowering businesses with powerful governance, risk, and compliance solutions.",
  },
  {
    logo: "/images/sap.png",
    title: "SAP",
    desc: "Helping enterprises run at their best through intelligent ERP and digital transformation.",
  },
  {
    logo: "/images/salesforce.png",
    title: "Salesforce",
    desc: "Grow your business with the world’s #1 CRM and cloud-based customer platform.",
  },
];

const logos = partnerDetails.map((p) => p.logo);

const OurPartners = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="w-full py-20 bg-white transition-all duration-300"
    >
      {/* Heading Left Side */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="inline-block">
          
            <p className="text-orange-500 font-semibold tracking-widest">
              SOLUTION PARTNERS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#021B44] mt-2">
              Our Partners
            </h2>
        
        </div>
      </div>

      {/* Quote Box */}
      <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl shadow p-10 text-center">
        <div className="flex justify-center mb-4">
          <span className="text-yellow-400 text-3xl">★★★★★</span>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed italic">
          “Pragma is an IT business solution partner for industry-leading
          companies, dedicated to promoting IT products and facilitating the
          deployment of effective IT solutions for businesses.”
        </p>
      </div>

      {/* Partner Cards */}
      <div className="mt-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {partnerDetails.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-10 flex gap-8 items-center hover:shadow-2xl transition duration-300"
          >
            {/* Logo */}
            <div className="w-28 flex justify-center">
              <img
                src={item.logo}
                alt={item.title}
                className="h-16 object-contain"
              />
            </div>

            {/* Divider */}
            <div className="w-px h-24 bg-gray-300"></div>

            {/* Text */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-500 mt-2 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Sliding Logos */}
     
    </div>
  );
};

export default OurPartners;
