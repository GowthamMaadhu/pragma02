import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import HeroSection from "./HeroSection";
import AboutUsSection from"./AboutUsSection";
import WhatWeProvideSection from "./WhatWeProvideSection"
import CareerApplicationForm from"./CareerApplicationForm"
import ClientBox from"./ClientsSection"
import ContactForm from "./ContactPage"
import AppFooter from "./AppFooter";
import Ourservices from"./Ourservices";
import OurPartners from "./OurPartners";
import WhyBusinessesTrustUs from "./WhyBusinessesTrustUs"

const Home = () => {
             // Custom color definitions remain the same to match the original image
  const sectionBgColor = 'bg-[#f8faff]'; 
  const headingColor = 'text-[#252b46]';
    // Dynamically inject complex CSS rules
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            .accordion-wrapper:hover {
                border-color: #00BCD4 !important; /* ACCENT_CYAN */
                box-shadow: 0 0 10px rgba(0, 188, 212, 0.1) !important;
            }
        `;
        document.head.appendChild(style);
        
        document.body.className = 'bg-white font-sans text-gray-800';
        
        return () => {
            document.body.className = '';
            if (document.head.contains(style)) {
                 document.head.removeChild(style);
            }
        };
    }, []);

    return (
    
        <div className="min-h-screen">
            <Header />
            
            <main>
                {/* --- SECTION 1: HOME (Hero) --- */}
                <HeroSection />

               {/* {/* --- SECTION 2: ABOUT US --- */}
                <AboutUsSection />
                
                {/* --- SECTION 3: WHAT WE PROVIDE (Services) --- */}
                <WhatWeProvideSection /><br></br>
<WhyBusinessesTrustUs/><br></br>
                {/* --- SECTION 4: SAP CYBERSECURITY (Partners) --- */}
                <Ourservices/>
                
                {/* INTEGRATED SALESFORCE SERVICES SECTION */}
           
<OurPartners/>
                {/* --- SECTION 5: CLIENTS (Placeholder) --- */}
      
                <style>{`
        /* Define the keyframes for the continuous horizontal scroll */
        @keyframes scroll-logos {
          0% {
            transform: translateX(0%);
          }
          100% {
            /* This value needs to be precise based on the number of sets duplicated (3 sets -> move by 1/3 = 33.333%) */
            transform: translateX(calc(-100% / 3)); 
          }
        }
        
        /* Apply the custom animation to the class */
        .animate-logo-roll {
          animation: scroll-logos 30s linear infinite;
        }
      `}</style>

      {/* The entire section container */}
      <section className={`py-16 sm:py-24 ${sectionBgColor} border-t border-cyan-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Content */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl font-extrabold ${headingColor} mb-3`}>
              Our Clients
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 font-medium">
              Our Solution Partners
            </p>
          </div>
          
          {/* Client Logo Roll Container */}
          <div className="
            overflow-hidden 
            whitespace-nowrap 
            mask-image-right-left
          ">
            <div className="
              flex 
              w-max 
              animate-logo-roll
            ">
             
                <ClientBox/>
              
            </div>
          </div>
          
        </div>
      </section>
                
                {/* --- SECTION 6: CAREERS (Placeholder) --- */}
                <CareerApplicationForm id="careers" title="Join Our Team" color="bg-white" />
            </main>
            
            {/* --- SECTION 7: CONTACT (Footer) --- */}
             

      
          {/* Left Column: Contact Form */}
          <ContactForm />

          {/* Right Column: Info Panel */}
         
      
  
             <AppFooter />

            
        </div>
    );
};

export default Home;