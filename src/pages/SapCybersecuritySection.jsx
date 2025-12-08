import React, { useState, useRef } from "react";
import { CheckCircle, ChevronDown } from "lucide-react";

// --- CONSTANTS ---
const ACCENT_TEAL = "#00877a";
const TEAL_START = "#00c6c2";
const TEAL_END = ACCENT_TEAL;
const LINK_COLOR = "#00897b";
const LINK_HOVER_COLOR = "#00a090";
const ACCENT_CYAN = "#00BCD4";

// --- ICON COMPONENT ---
const Icon = ({ name, className }) => {
  const icons = {
    "check-circle": CheckCircle,
    "chevron-down": ChevronDown,
  };

  const LucideIcon = icons[name];
  return LucideIcon ? <LucideIcon className={className} /> : null;
};

// --- CHECKLIST ITEM ---
const ChecklistItem = ({ text }) => (
  <div className="flex items-start space-x-3 w-full sm:w-1/2 p-2">
    <Icon name="check-circle" className="w-5 h-5 text-teal-600" />
    <span className="text-gray-700">{text}</span>
  </div>
);

// --- ACCORDION COMPONENT ---
const Accordion = ({ title, children, isOpen, onClick, id }) => {
  const contentRef = useRef(null);

  const maxHeight = isOpen
    ? contentRef.current
      ? contentRef.current.scrollHeight + 30
      : "500px"
    : "0";

  return (
    <div
      className="mb-5 rounded-xl bg-white border border-gray-200 transition-all duration-300 hover:shadow-md"
      style={{ "--hover-border-color": ACCENT_CYAN }}
    >
      <button
        className="w-full text-left p-4 md:p-6 flex justify-between items-center transition-shadow duration-300"
        onClick={() => onClick(id)}
        aria-expanded={isOpen}
        aria-controls={id}
      >
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>

        <Icon
          name="chevron-down"
          className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        id={id}
        ref={contentRef}
        className="px-6 md:px-8 overflow-hidden transition-[max-height] duration-400 ease-in-out"
        style={{ maxHeight }}
      >
        <div className="pb-6 md:pb-8 border-t border-gray-100 pt-6">
          {children}
        </div>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
const SapCybersecuritySection = () => {
  const proactiveList = [
    "Patch Management",
    "Vulnerability Management",
    "Code Vulnerability Analysis",
    "Security Dashboard",
    "Security Roadmap",
    "Interface Traffic Monitor",
    "Privileged Access Management",
  ];

  const reactiveList = [
    "Threat Detection",
    "Identity Protection",
    "Data Loss Prevention",
    "Forensic Analysis (HyperLogging)",
    "SIEM Integration for SAP",
  ];

  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section className="py-20 bg-white" id="partners">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        {/* Header */}
        <header className="text-center mb-12 mt-12 md:mt-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
            Trusted Solution Partners
          </h1>
          <p className="text-lg text-gray-600">
            Featuring SecurityBridge - Our Primary SAP Cybersecurity Platform
          </p>
        </header>

        <hr className="my-8" />

        {/* Overview */}
        <section
          className="p-6 md:p-8 rounded-xl bg-white mb-10"
          style={{
            border: `1px solid ${ACCENT_CYAN}`,
            boxShadow: `0 0 10px rgba(0, 188, 212, 0.1)`,
          }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Overview of SecurityBridge
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              SecurityBridge is the leading provider of a comprehensive
              <strong> SAP-native cybersecurity platform</strong>, trusted by
              organizations globally to safeguard their most critical business
              systems.
            </p>

            <p>
              With over <strong>5,000 SAP systems secured worldwide</strong>,
              the platform offers real-time monitoring, vulnerability
              management, and compliance in a unified interface.
            </p>
          </div>
        </section>

        {/* Proactive SAP Security */}
        <Accordion
          title="Proactive SAP Security"
          isOpen={openAccordion === "proactive-content"}
          onClick={handleAccordionClick}
          id="proactive-content"
        >
          <div className="flex flex-wrap -m-2">
            {proactiveList.map((item, index) => (
              <ChecklistItem key={index} text={item} />
            ))}
          </div>
        </Accordion>

        {/* Reactive SAP Security */}
        <Accordion
          title="Reactive SAP Security"
          isOpen={openAccordion === "reactive-content"}
          onClick={handleAccordionClick}
          id="reactive-content"
        >
          <div className="flex flex-wrap -m-2">
            {reactiveList.map((item, index) => (
              <ChecklistItem key={index} text={item} />
            ))}
          </div>
        </Accordion>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-20">
          {[
            { num: "+5,000", text: "SAP Systems Protected" },
            { num: "100%", text: "Customer Satisfaction" },
            { num: "75% Lower", text: "Startup Costs" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border-2 bg-white shadow-lg"
              style={{ borderColor: ACCENT_CYAN }}
            >
              <div
                className="text-3xl font-extrabold mb-2"
                style={{ color: ACCENT_CYAN }}
              >
                {stat.num}
              </div>
              <h4 className="text-xl font-semibold text-gray-900">
                {stat.text}
              </h4>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default SapCybersecuritySection;
