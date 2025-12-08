import React, { useState, useEffect } from "react";
import { ChevronDown, UploadCloud } from "lucide-react";

// -----------------------------------------
// CONSTANTS
// -----------------------------------------
const PRIMARY_TEAL = "bg-[#0097B2]";
const PRIMARY_TEAL_HOVER = "hover:bg-[#007A92]";
const TEXT_DARK = "text-gray-800";

// -----------------------------------------
// INPUT COMPONENT
// -----------------------------------------
const FormInput = ({
  label,
  type = "text",
  placeholder,
  required,
  children,
  className = "",
}) => (
  <div className={`mb-6 ${className}`}>
    <label className={`block mb-2 text-sm font-medium ${TEXT_DARK}`}>
      {label} {required && <span className="text-red-500">*</span>}
    </label>

    {children ? (
      children
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600 transition duration-150"
        required={required}
      />
    )}
  </div>
);
// -----------------------------------------
// SLIDES DATA
// -----------------------------------------
const slides = [
  {
    title: "Innovation",
    text: "We encourage new ideas and creative solutions. We actively empower individuals to think beyond conventional boundaries and experiment with forward-thinking approaches that drive meaningful progress.",
    img: "/images/innovation.png",
  },
  {
    title: "Growth",
    text: "We invest in your professional development. We empower you with ongoing training, mentorship, and career-enhancing experiences that support long-term success and personal advancement.",
    img: "/images/growth.png",
  },
  {
    title: "Culture",
    text: "Supportive and collaborative team environment. We cultivate a positive work culture where teamwork, transparency, and inclusivity drive meaningful connections and collective success",
    img: "/images/team.png",
  },
  {
    title: "Flexibility",
    text: "Work-life balance with flexible options. We offer adaptable schedules and supportive policies that allow you to manage personal commitments while maintaining professional excellence.",
    img: "/images/life.png",
  },
];


// -----------------------------------------
// MAIN COMPONENT
// -----------------------------------------
const CareerApplicationForm = () => {
  const [fileName, setFileName] = useState("No file chosen");
  const [showForm, setShowForm] = useState(false);
  const [isPaused, setIsPaused] = useState(false);


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : "No file chosen");
  };
  // Auto Slide
useEffect(() => {
  if (isPaused) return; // stop auto-slide when paused

  const timer = setInterval(() => {
    setActive((prev) => (prev + 1) % slides.length);
  }, 4000);

  return () => clearInterval(timer);
}, [isPaused]);



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    setShowForm(false);
  };
  const [active, setActive] = useState(0);

const nextSlide = () => {
  setActive((prev) => (prev + 1) % slides.length);
};
const prevSlide = () => {
  setActive((prev) => (prev - 1 + slides.length) % slides.length);
};

  const formStyles = showForm
    ? "max-h-[2000px] opacity-100 translate-y-0"
    : "max-h-0 opacity-0 -translate-y-5 pointer-events-none";

  return (
    <div className="min-h-screen py-16 flex justify-center px-6 relative overflow-hidden">

      {/* Animated BG Circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#0097B2] opacity-20 rounded-full animate-pulse blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#007A92] opacity-20 rounded-full animate-spin-slow blur-xl"></div>

    <div className="w-full relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto animate-fadeIn">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 
            bg-clip-text text-transparent bg-gradient-to-r from-[#00A7C4] to-[#005A68] animate-gradient">
            Careers
          </h2>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            At Pragma IT Solutions, we believe in empowering talent, encouraging
            innovation, and building a culture where everyone grows.
          </p>
        </div>

        {/* BACKGROUND WORD */}
       

        {/* VALUE CARDS */}
{/* VALUE CARDS */}
<div
  className="w-full md:w-[90%] mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
  onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
>
  <div className="grid grid-cols-1 lg:grid-cols-2">
  
  {/* WRAPPER FOR SYNC EFFECT */}
  <div
    key={active}
    className="contents animate-fadeSlideSync"
  >
    {/* LEFT TEXT SECTION */}
    <div className="bg-[#004792] p-10 flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-white mb-4">
        {slides[active].title}
      </h2>

      <p className="text-white/90 text-lg leading-relaxed">
        {slides[active].text}
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div>
      <img
        src={slides[active].img}
        className="w-full h-[260px] md:h-[400px] object-cover"
        alt="slide"
      />
    </div>
  </div>
</div>

  {/* SLIDER CONTROLS */}
  <div className="flex items-center justify-center gap-6 py-5 bg-white">

    <button
      onClick={prevSlide}
      className="p-3 bg-white rounded-full border shadow hover:bg-gray-100"
    >
      <ChevronDown className="rotate-90 text-gray-700" size={22} />
    </button>

    <div className="flex gap-3">
      {slides.map((_, i) => (
        <div
          key={i}
          onClick={() => setActive(i)}
          className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 
            ${active === i ? "bg-[#004792] scale-110" : "bg-gray-300"}`}
        ></div>
      ))}
    </div>

    <button
      onClick={nextSlide}
      className="p-3 bg-white rounded-full border shadow hover:bg-gray-100"
    >
      <ChevronDown className="-rotate-90 text-gray-700" size={22} />
    </button>

  </div>
</div>




        {/* CTA TEXT */}
        <p className="text-center text-lg text-gray-700 mb-6 animate-fadeIn">
          Ready to be part of something extraordinary?
        </p>

        {/* APPLY NOW BUTTON */}
        <div className="text-center mb-10">
          <button
            onClick={() => setShowForm(!showForm)}
            className={`px-10 py-3 text-lg font-semibold text-white rounded-xl shadow-xl 
              ${PRIMARY_TEAL} ${PRIMARY_TEAL_HOVER} transition hover:scale-[1.03] 
              animate-pulseSlow`}
          >
            {showForm ? "Close" : "Apply Now"}
          </button>
        </div>

        {/* FORM */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${formStyles}`}
        >
          <div className="bg-white p-8 sm:p-10 rounded-xl shadow-xl border border-gray-100 animate-dropFade">

            <form onSubmit={handleSubmit}>
              <FormInput label="Your Name" placeholder="Enter your name" required />

              <FormInput
                label="Your Email"
                type="email"
                placeholder="Enter your email"
                required
              />

              <FormInput
                label="Phone"
                type="tel"
                placeholder="Enter your phone number"
                required
              />

              {/* SUBJECT */}
              <FormInput label="Subject" required>
                <div className="relative">
                  <select
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg appearance-none 
                    focus:outline-none focus:ring-2 focus:ring-cyan-600"
                    required
                  >
                    <option value="" disabled>Select a subject</option>
                    <option>General Application</option>
                    <option>Internship</option>
                    <option>Query</option>
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown size={18} />
                  </div>
                </div>
              </FormInput>

              {/* FILE UPLOAD */}
              <FormInput label="Resume">
                <div className="flex items-center border border-gray-300 rounded-lg bg-white overflow-hidden">

                  <input
                    type="file"
                    id="resume-file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                  />

                  <label
                    htmlFor="resume-file"
                    className={`px-4 py-3 text-white cursor-pointer text-sm font-medium 
                    flex items-center ${PRIMARY_TEAL} ${PRIMARY_TEAL_HOVER}`}
                  >
                    <UploadCloud size={18} className="mr-2" /> Choose file
                  </label>

                  <span className="flex-grow px-4 py-3 text-sm text-gray-500 truncate">
                    {fileName}
                  </span>
                </div>
              </FormInput>

              {/* MESSAGE */}
              <FormInput label="Message" className="!mb-8">
                <textarea
                  placeholder="Tell us about yourself..."
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                  focus:ring-2 focus:ring-cyan-600"
                  required
                />
              </FormInput>

              {/* SUBMIT */}
              <button
                type="submit"
                className={`w-full text-lg font-semibold text-white py-3 rounded-lg shadow-lg 
                ${PRIMARY_TEAL} ${PRIMARY_TEAL_HOVER} transition hover:scale-[1.03]`}
              >
                Submit Resume
              </button>
            </form>

          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { animation: fadeIn 1s ease forwards; }

      @keyframes fadeSlide {
  0% { 
    opacity: 0; 
    transform: translateX(60px);
  }
  100% { 
    opacity: 1; 
    transform: translateX(0);
  }
}

.animate-fadeSlide {
  animation: fadeSlide 0.8s ease forwards;
}

          @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slideUp { animation: slideUp .7s ease forwards; }

          @keyframes dropFade {
            0% { opacity: 0; transform: translateY(-10px) scale(0.98); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
          .animate-dropFade { animation: dropFade .6s ease forwards; }

          @keyframes pulseSlow {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.03); }
          }
          .animate-pulseSlow { animation: pulseSlow 2.4s infinite ease-in-out; }

          @keyframes spinSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow { animation: spinSlow 14s linear infinite; }

          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          .animate-gradient {
            background-size: 200% auto;
            animation: gradientMove 3s linear infinite alternate;
          }
            @keyframes fadeSlideSync {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeSlideSync {
  animation: fadeSlideSync 0.7s ease forwards;
}

        `}
      </style>
    </div>
  );
};

export default CareerApplicationForm;
    