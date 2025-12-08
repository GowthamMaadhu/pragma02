import React, { useState, useEffect, useRef, useMemo } from 'react';
const Button = ({ children, className = "", onClick, variant = "default" }) => {
    let baseStyle = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none h-10 py-2";
    let variantStyle = "";

    switch (variant) {
        case 'outline':
            variantStyle = "border border-input bg-background hover:bg-gray-100 hover:text-accent-foreground";
            break;
        case 'ghost':
            variantStyle = "hover:bg-gray-100";
            break;
        case 'link':
            variantStyle = "text-primary underline-offset-4 hover:underline";
            break;
        case 'default':
        default:
            // Custom style from the header request
            variantStyle = "bg-cyan-600 hover:bg-cyan-700 text-white px-6 shadow-md shadow-cyan-500/50 focus-visible:ring-cyan-600";
            break;
    }

    return (
        <button
            className={`${baseStyle} ${variantStyle} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
export default Button;
