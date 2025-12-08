import React from "react";
import { useNavigate } from "react-router-dom";

const Ourservices = () => {
  const navigate = useNavigate();

  const services = [
    { title: "Salesforce", image: "/images/salesforce.png", link: "/salesforce" },
    { title: "Soterion", image: "/images/grc.png", link: "/soterion" },
    { title: "Cybersecurity", image: "/images/cyber01.png", link: "/cybersecurity" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-10">Explore our services</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer group"
            onClick={() => navigate(item.link)}
          >
            {/* IMAGE */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* FLOATING CARD */}
            <div className="relative -mt-10 mx-6 bg-white shadow-xl rounded-xl p-6">
              <p className="text-xl font-semibold text-gray-800 text-center">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourservices;
