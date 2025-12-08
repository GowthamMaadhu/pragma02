import React from "react";
import { Linkedin, Twitter, Facebook, ArrowRight, MapPin, Phone, Mail } from "lucide-react";

const AppFooter = () => {
  // Utility function to scroll smoothly to a section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log(`Scrolling to #${id} (element not found)`);
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 rounded-t-xl shadow-2xl">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* ---------------- COMPANY INFO ---------------- */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-extrabold text-xl">P</span>
              </div>
              <div>
                <div className="font-extrabold text-2xl text-white">Pragma</div>
                <div className="text-xs font-medium text-slate-400">IT Solutions</div>
              </div>
            </div>

            <p className="text-sm text-slate-400 mb-6">
              Specialized IT consulting firm with a focus on SAP cybersecurity,
              delivering expert security consulting and tailored IT solutions across the globe.
            </p>

            <div className="flex space-x-4">
              {[Linkedin, Twitter, Facebook].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110 p-1 rounded-full border border-slate-700 hover:border-cyan-400"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* ---------------- QUICK LINKS ---------------- */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6 border-b-2 border-cyan-500/50 pb-2 inline-block">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Partners", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() =>
                      scrollToSection(item.toLowerCase().replace(" ", ""))
                    }
                    className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-base group"
                  >
                    <ArrowRight
                      size={16}
                      className="mr-2 text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------------- SERVICES ---------------- */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6 border-b-2 border-cyan-500/50 pb-2 inline-block">
              Our Focus
            </h3>

            <ul className="space-y-3">
              {[
                "Security Strategy",
                "SAP Cybersecurity",
                "Application Security",
                "Threat Intelligence",
                "Managed IT Services"
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-base group"
                  >
                    <ArrowRight
                      size={16}
                      className="mr-2 text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------------- CONTACT INFO ---------------- */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6 border-b-2 border-cyan-500/50 pb-2 inline-block">
              Get in Touch
            </h3>

            <ul className="space-y-5">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-base text-slate-400">
                  Salarpuria Sattva Knowledge City, Level 1, Hyderabad-500081, India
                </span>
              </li>

              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-cyan-400" />
                <span className="text-base text-slate-400">
                  +91 (123) 456-7890 (24/7 Support)
                </span>
              </li>

              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-cyan-400" />
                <span className="text-base text-slate-400">info@pragma.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ---------------- BOTTOM BAR ---------------- */}
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500 text-center md:text-left">
            © 2024 Pragma Technology Consulting Services Pvt. Ltd. — All Rights Reserved.
          </p>

          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="text-sm text-slate-500 hover:text-cyan-400">
              Terms & Conditions
            </a>
            <a href="#" className="text-sm text-slate-500 hover:text-cyan-400">
              Privacy Policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default AppFooter;
