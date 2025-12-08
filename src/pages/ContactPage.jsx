import React from "react"; 
import { MapPin, ChevronUp } from "lucide-react"; 

/* ----------------------------
   CUSTOM COLORS & SHIMMER CSS
----------------------------- */
const PRIMARY_TEAL1 = '#0096A6';
const DARKER_TEAL = '#007A8C';
const LIGHTER_TEAL = '#00B3C4';
const TEXT_COLOR = '#333333';
const LIGHT_BACKGROUND = '#F8F8F8';

const SHIMMER_CSS = `
  @keyframes shimmer {
    0% { transform: skewX(-20deg) translateX(-100%); }
    100% { transform: skewX(-20deg) translateX(200%); }
  }

  .shimmer-card {
    position: relative;
    overflow: hidden;
    z-index: 1; 
    cursor: pointer; 
    transition: transform 0.3s ease;
  }

  .shimmer-card:hover { transform: translateY(-5px); }

  .shimmer-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3); 
    transform: skewX(-20deg) translateX(-100%);
    opacity: 0; 
    z-index: 10;
  }

  .shimmer-card.is-shining::before {
    opacity: 1;
    animation: shimmer 1s linear;
  }

  .shimmer-btn {
    position: relative;
    overflow: hidden;
    z-index: 10; 
    transition: all 0.2s ease-out;
  }

  .shimmer-btn:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.4);
    transform: skewX(-20deg) translateX(-100%);
    animation: shimmer 1s linear;
    z-index: 1;
  }

  .shimmer-btn:hover {
    box-shadow: 0 6px 15px rgba(0, 150, 166, 0.4); 
    transform: translateY(-2px);
  }

  .shimmer-btn:active {
    transform: scale(0.98);
    box-shadow: 0 2px 5px rgba(0, 150, 166, 0.4);
  }
`;

/* ----------------------------
   HEADER COMPONENT
----------------------------- */
const ContactHeader = () => (
    <div className="text-center mb-10 md:mb-16 pt-8">
        <h1 className="text-4xl font-extrabold text-[#333333] mb-2">Contact</h1>
        <p className="text-xl text-gray-600">Get in Touch - Just fill in the contact form</p>
    </div>
);


/* ----------------------------
   FORM FIELD COMPONENT
----------------------------- */
const FormField = ({ label, type = "text", rows, required = true }) => {
  const isTextarea = rows > 0;

  // Function to determine the placeholder text
  const getPlaceholder = () => {
    if (isTextarea) return "How can we help you?";
    if (label === "Your Name") return "Enter your name";
    if (label === "Your Company Email") return "Enter your email";
    if (label === "Phone") return "Enter your phone number";
    if (label === "Subject") return "Subject";
    return label;
  }

  return (
    <div className="mb-6">
      <label className="block text-sm font-semibold mb-2 text-[#333333]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {isTextarea ? (
        <textarea
          rows={rows}
          placeholder={getPlaceholder()}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096A6] placeholder-gray-400 outline-none transition duration-150 resize-none"
        />
      ) : (
        <input
          type={type}
          placeholder={getPlaceholder()}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0096A6] placeholder-gray-400 outline-none transition duration-150"
        />
      )}
    </div>
  );
};

/* ----------------------------
   CONTACT FORM (LEFT PANEL)
----------------------------- */
const ContactForm = () => (
  // The white card container for the form
  <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
    <form onSubmit={(e) => e.preventDefault()}>
      <FormField label="Your Name" />
      <FormField label="Your Company Email" type="email" />
      <FormField label="Phone" type="tel" />
      <FormField label="Subject" />
      <FormField label="Message" rows={4} />

      <button
          type="submit"
          className={`w-full py-3 mt-4 text-lg font-semibold text-white bg-[#0096A6] hover:bg-[#007A8C] rounded-lg shadow-md transition duration-300 ease-in-out shimmer-btn`}
        >
          Send Message
        </button>
    </form>
  </div>
);

/* ----------------------------
   LOCATIONS CARD (RIGHT TOP) - Restored as a Card
----------------------------- */
const LocationsCard = () => (
  // This is now a self-contained card matching the style of the form card
  <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 mb-8"> 
    <h3 className="text-2xl font-bold mb-6 text-[#333333]">Locations</h3>

    <div className="mb-6">
      <h4 className="text-lg font-semibold mb-3 text-[#333333]">
        Registered & Corporate Headquarters
      </h4>

      <div className="flex items-start space-x-2 text-sm">
        {/* Added MapPin icon next to 'India' label as seen in screenshot */}
        <MapPin className={`w-4 h-4 mt-1 text-[#0096A6] flex-shrink-0`} /> 
        <p className="text-gray-700 leading-relaxed">
            India
            <br className="mb-2"/>
            Pragma Technology Consulting Services Pvt. Ltd. <br />
            Salarpuria Sattva Knowledge City, Level 1, Unit 2, <br />
            Sy. No. 83/1, Plot No. 2, Inorbit Mall Road, <br />
            Raidurg Village, Hitech City, <br />
            Hyderabad-500081, India.
        </p>
      </div>
    </div>
    
    {/* NEW: Map View Section */}
    <div>
      <h4 className="text-lg font-semibold mb-3 text-[#333333]">View on Map</h4>

      <div className="w-full h-48 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center text-gray-500 overflow-hidden shadow-inner">
        <div className="text-center">
          <MapPin className="w-8 h-8 mx-auto mb-2 text-gray-400" />
          <p className="text-sm">Map View Placeholder</p>
        </div>
      </div>
    </div>
    {/* END NEW: Map View Section */}
  </div>
);

/* ----------------------------
   CTA CARD (RIGHT BOTTOM) - Restored
----------------------------- */
const CTACard = () => {
  const [isShining, setIsShining] = React.useState(false);

  const handleShine = () => {
    setIsShining(false);
    setTimeout(() => setIsShining(true), 50);
    setTimeout(() => setIsShining(false), 1050);
  };

  return (
    <div
      onMouseEnter={handleShine}
      // Used the gradient colors and shimmer style
      className={`p-8 rounded-xl bg-gradient-to-r from-[#0096A6] to-[#00B3C4] text-white shimmer-card ${isShining ? "is-shining" : ""}`} 
    >
      <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
      <p className="mb-6 text-sm">Let’s discuss how we can help secure your SAP systems and transform your IT infrastructure.</p>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="inline-flex items-center py-2 px-4 bg-white text-[#0096A6] font-semibold rounded-lg shimmer-btn shadow-md hover:shadow-lg transition duration-300"
      >
        <ChevronUp className="w-4 h-4 mr-2" />
        Back to Top
      </button>
    </div>
  );
};

/* ----------------------------
   MAIN PAGE COMPONENT
----------------------------- */
const ContactPage = () => {
  return (
    <>
      {/* Inject shimmer CSS */}
      <style>{SHIMMER_CSS}</style>

      <div className="min-h-screen bg-[#F8F8F8] p-4 md:p-12 lg:p-16">
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <ContactHeader />

            {/* Grid for 50/50 split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"> 

                {/* LEFT SIDE: Contact Form (50% width) */}
                <div> 
                    <ContactForm />
                </div>

                {/* RIGHT SIDE: Locations and CTA (50% width) */}
                <div className="flex flex-col">
                    <LocationsCard /> 
                    <CTACard />       
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;