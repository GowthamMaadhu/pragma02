import React from "react";
import Icon from "../components/Icon";
import Button from "../components/Button";

// --- Progress Bar Component ---
const StatProgressBar = ({ stat }) => (
  <div className="space-y-2 py-2">
    <div className="flex justify-between items-center text-gray-800 font-semibold">
      <span>{stat.label}</span>
      <span className="text-sm font-bold text-cyan-700">{stat.value}</span>
    </div>

    <div className="h-3 bg-gray-200 rounded-full">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full transition-all duration-1000 ease-out shadow-inner"
        style={{ width: stat.percentage ? `${stat.percentage}%` : "0%" }}
      />
    </div>
  </div>
);

// --- Stats Data ---
const stats = [
  { label: "SAP Cybersecurity", value: "80%", percentage: 80 },
  { label: "IT Consulting", value: "90%", percentage: 90 },
  { label: "Managed IT Services", value: "75%", percentage: 75 },
];

// --- Main Section Component ---
const AboutUsSection = () => {
  const aboutText =
    "Pragma Technology Consulting Services Pvt. Ltd., is a specialized IT consulting firm with a focus on SAP cybersecurity, delivering expert security consulting and IT solutions to protect business systems against cyber threats, enhance resilience, and ensure regulatory compliance across diverse industries. Our comprehensive service offerings include Managed IT Services, Managed Outsourcing, and Software Development. Leveraging cutting-edge technology, we prioritize innovation, quality, and reliability to deliver customized solutions for both on-premises and cloud environments.";

  const whyChooseUsList = [
    "Security Strategy",
    "Cybersecurity Services",
    "Application Security",
    "Governance & Risk and Compliance",
  ];

  return (
    <section
      className="min-h-screen flex items-center py-20 bg-white overflow-hidden"
      id="about"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center lg:text-left">
          About Our Company
        </h2>

        {/* Layout: Left → Text & Stats, Right → Card */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <p className="text-3xl font-semibold text-teal-600">
              Providing your business with quality IT service is our passion.
            </p>

            {/* Body Text */}
            <div className="text-lg text-gray-600 space-y-4">
              <p>
                {aboutText.split(". Our comprehensive service offerings")[0] +
                  "."}
              </p>
              <p className="text-base">
                {
                  aboutText.split(
                    ". Our comprehensive service offerings"
                  )[1]
                }
              </p>
            </div>

            {/* Progress Bars */}
            <div className="pt-4">
              {stats.map((stat, index) => (
                <StatProgressBar key={index} stat={stat} />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE CARD */}
          <div className="relative min-h-[500px]">
            {/* Rotated background card */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-teal-700 to-cyan-500 
                         rounded-xl shadow-2xl transform rotate-3 translate-x-1 -translate-y-2"
            />

            {/* White content card */}
            <div className="bg-white p-12 md:p-16 rounded-xl shadow-xl border border-gray-100 relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Why Choose Us?
              </h3>

              <p className="font-semibold text-teal-600 mb-4">
                Skillset Profile
              </p>

              <p className="text-gray-600 mb-6 text-sm">
                Our team brings over 200,000 man-hours of rich experience in the
                IT industry, encapsulating two decades of expertise.
              </p>

              <ul className="space-y-3">
                {whyChooseUsList.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-lg text-gray-700"
                  >
                    <Icon
                      name="check"
                      className="w-6 h-6 mr-3 mt-0.5"
                      strokeColor="#10b981"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <div className="mt-8">
                <Button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-6 py-3 text-base font-medium bg-teal-600 hover:bg-teal-700 text-white rounded-md shadow-sm"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
