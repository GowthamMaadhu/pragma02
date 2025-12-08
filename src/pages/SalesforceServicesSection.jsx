import React, { useState } from "react";
import { TrendingUp, Shield, Layers } from "lucide-react";

// --- CONSTANTS ---
const ACCENT_TEAL = '#00877a'; 
const TEAL_START = '#00c6c2';
const TEAL_END = ACCENT_TEAL;
const LINK_COLOR = '#00897b';
const LINK_HOVER_COLOR = '#00a090';

// --- PLACEHOLDER SECTION ---
const PlaceholderSection = ({ id, title, color }) => (
    <section id={id} className={`py-20 text-center ${color}`}>
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
            <p className="mt-4 text-gray-600">
                Content for the {title} section goes here.
            </p>
        </div>
    </section>
);

// --- SALESFORCE SERVICES MAIN SECTION ---
const SalesforceServicesSection = () => {
    
    const [expandedIndex, setExpandedIndex] = useState(null);

    const icons = [TrendingUp, Shield, Layers];

    const services = [
        {
            title: 'Salesforce Implementation',
            icon: icons[0],
            description:
                'Our certified experts provide end-to-end Salesforce implementation services, helping clients unlock their true revenue potential by harnessing the full power of the Salesforce platform. Whether implementing a new Salesforce solution or customizing an existing one, we enhance your capabilities and maximize the platform\'s value to meet your business goals.',
        },
        {
            title: 'Salesforce Consulting',
            icon: icons[1],
            description:
                'Our Salesforce Consulting services help clients leverage the power of Salesforce with customized solutions and industry best practices to enhance features and standardize processes. As a leading CRM, Salesforce can be complex and challenging, often leading to inconsistent outcomes. Our experts guide clients through a seamless implementation journey, delivering solutions tailored to their business needs whether on a turnkey basis or within a fixed timeline.',
        },
        {
            title: 'Salesforce Managed Services',
            icon: icons[2],
            description:
                'Our Salesforce Managed Services offer customized packages with on-demand resources and dedicated teams to meet your specific business needs. Designed for small, medium, and enterprise customers, our services provide the flexibility and support needed to foster long-term partnerships and drive success.',
        },
    ];

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        const shortened = text.substring(0, maxLength);
        const lastSpace = shortened.lastIndexOf(' ');
        return shortened.substring(0, lastSpace) + '...';
    };

    return (
        <section
            className="py-20 px-4 sm:px-6 lg:px-8 text-center font-inter"
            style={{ backgroundColor: '#f7fcff' }}
        >
            {/* Header */}
            <div className="mb-16">
                <h2 className="text-sm font-semibold text-cyan-600 uppercase tracking-wider mb-2">
                    Cloud Solutions
                </h2>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
                    Salesforce Services
                </h1>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                    Accelerate your business growth with our certified Salesforce
                    implementation, consulting, and managed services solutions.
                </p>
            </div>

            {/* Cards */}
            <div className="flex justify-center flex-wrap gap-8 max-w-7xl mx-auto items-stretch">
                {services.map((service, index) => {
                    const isExpanded = expandedIndex === index;
                    const defaultLength = 150;
                    const IconComponent = service.icon;

                    const displayDescription = isExpanded
                        ? service.description
                        : truncateText(service.description, defaultLength);

                    return (
                        <div
                            key={index}
                            className={`
                                bg-white p-6 rounded-xl border-t-4 border-cyan-500/0 shadow-lg flex-1 
                                min-w-[280px] max-w-sm text-left transition-all duration-500 
                                transform cursor-pointer flex flex-col 
                                hover:scale-[1.02] hover:shadow-2xl hover:border-cyan-500
                                ${isExpanded ? 'h-auto shadow-2xl' : 'h-[350px] shadow-xl'}
                            `}
                        >
                            {/* Card Header */}
                            <div className="flex items-center space-x-4 mb-4 flex-shrink-0">
                                <div className="p-3 bg-cyan-100 rounded-full">
                                    <IconComponent size={24} className="text-cyan-600" />
                                </div>
                                <h3 className="text-xl font-extrabold text-gray-800">
                                    {service.title}
                                </h3>
                            </div>

                            {/* Card Content */}
                            <div
                                className={`
                                    text-base leading-relaxed text-gray-700 relative flex-grow
                                    ${!isExpanded ? 'relative overflow-hidden' : 'h-auto'}
                                `}
                            >
                                {displayDescription}

                                {!isExpanded && (
                                    <div className="absolute inset-x-0 bottom-0 h-1/3 
                                    bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                                )}
                            </div>

                            {/* Button */}
                            <button
                                onClick={() => toggleExpand(index)}
                                className="mt-4 text-sm font-bold text-cyan-600 hover:text-cyan-800 transition duration-150 flex-shrink-0 self-start focus:outline-none"
                            >
                                {isExpanded ? 'Read Less' : 'Read More'}
                            </button>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default SalesforceServicesSection;
