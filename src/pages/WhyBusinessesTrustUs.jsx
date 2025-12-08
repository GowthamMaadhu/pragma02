import React from "react";

const WhyBusinessesTrustUs = () => {
  return (
    <div className="relative w-full h-[50vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/why.png')", // change to your BG image
      }}
    >
      {/* Floating Card */}
      <div
  className="absolute top-[65%] left-10 transform -translate-y-1/2 
  bg-white shadow-xl rounded-2xl p-10 max-w-2xl"
>
        <h2 className="text-3xl md:text-4xl font-bold text-[#021B44] mb-4 leading-snug">
          Why Businesses Trust Us
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          With decades of experience and deep domain expertise, we help
          organizations secure, modernize, and optimize their IT landscape.
          Our focus on innovation, compliance, and end-to-end delivery
          makes us a reliable partner for digital transformation.
        </p>

        {/* Read More Button (Optional) */}
        <button
          className="mt-8 flex items-center gap-2 px-6 py-3 rounded-full border border-[#021B44] 
          text-[#021B44] font-semibold hover:bg-[#021B44] hover:text-white transition-all duration-300"
        >
          Read more →
        </button>
      </div>
    </div>
  );
};

export default WhyBusinessesTrustUs;
