import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onRegister: () => void;
}

export default function Navbar({ onRegister }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`;
  const textClasses = scrolled ? 'text-gray-800' : 'text-gray-800 lg:text-white';
  const buttonClasses = scrolled 
    ? 'bg-alqueria-red text-white hover:bg-alqueria-darkRed' 
    : 'bg-white text-alqueria-red hover:bg-gray-100 lg:bg-alqueria-red lg:text-white lg:hover:bg-alqueria-darkRed';

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Text Placeholder - Simulating Alquería Logo */}
        <div className="flex items-center gap-2 font-bold text-2xl tracking-tight">
           <span className="text-alqueria-red">Alquería</span>
           <span className={`${scrolled ? 'text-gray-600' : 'text-gray-600 lg:text-gray-100'} font-light`}>| Eventos</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className={`${textClasses} hover:underline decoration-alqueria-red decoration-2 underline-offset-4 transition-all`}>Beneficios</a>
          <a href="#pricing" className={`${textClasses} hover:underline decoration-alqueria-red decoration-2 underline-offset-4 transition-all`}>Entradas</a>
          <a href="#faq" className={`${textClasses} hover:underline decoration-alqueria-red decoration-2 underline-offset-4 transition-all`}>Preguntas</a>
          <button 
            onClick={onRegister}
            className={`px-6 py-2 rounded-full font-semibold transition-all shadow-lg transform hover:-translate-y-0.5 ${buttonClasses}`}
          >
            Inscribirse
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-alqueria-red" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col items-center space-y-4 animate-fade-in">
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-gray-800 font-medium">Beneficios</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-gray-800 font-medium">Entradas</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-gray-800 font-medium">Preguntas</a>
          <button 
            onClick={() => { onRegister(); setMobileMenuOpen(false); }}
            className="bg-alqueria-red text-white px-8 py-2 rounded-full font-bold"
          >
            Inscribirse Ahora
          </button>
        </div>
      )}
    </nav>
  );
}