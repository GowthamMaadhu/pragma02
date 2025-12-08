import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from"./Button";
import Icon from"./Icon";
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80; 
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsMobileMenuOpen(false);
        }
    };

    const navItems = [
        { label: 'Home', id: 'home' },
        { label: 'About Us', id: 'about' },
        { label: 'Services', id: 'services' },
        { label: 'Partners', id: 'partners' },
        { label: 'Clients', id: 'clients' },
        { label: 'Careers', id: 'careers' },
        { label: 'Contact', id: 'contact' }
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex items-center justify-between h-20">
                    
                    {/* Logo */}
                    <button onClick={() => scrollToSection('home')} className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center shadow-md">
                            <span className="text-white font-extrabold text-xl">P</span>
                        </div>
                        <div>
                            <div className="font-extrabold text-xl text-slate-900">Pragma</div>
                            <div className="text-xs text-slate-600 tracking-wider">IT Solutions</div>
                        </div>
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-slate-700 hover:text-cyan-600 font-medium transition-colors duration-200 relative group text-base"
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-200 group-hover:w-full"></span>
                            </button>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Button
                            onClick={() => scrollToSection('contact')}
                            className="text-white px-6 transition-all duration-200"
                        >
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden text-slate-900 p-2"
                    >
                        {isMobileMenuOpen ? <Icon name="X" className="w-6 h-6" /> : <Icon name="Menu" className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-slate-200 py-4 shadow-xl">
                        <nav className="flex flex-col space-y-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-slate-700 hover:text-cyan-600 font-medium text-left px-4 py-3 hover:bg-slate-50"
                                >
                                    {item.label}
                                </button>
                            ))}
                            <div className="px-4 pt-4">
                                <Button
                                    onClick={() => scrollToSection('contact')}
                                    className="w-full text-white"
                                >
                                    Get Started
                                </Button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};
export default Header;