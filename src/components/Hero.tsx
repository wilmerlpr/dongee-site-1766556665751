import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-black/50 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="bg-alqueria-green text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider mb-4 inline-block">
            EVENTO CORPORATIVO 2024
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Networking y Sostenibilidad: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-200">
              El Futuro Lácteo
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light max-w-2xl">
            Una oportunidad única para conectar con líderes del sector, descubrir innovaciones de economía circular y hacer crecer tu red de aliados estratégicos.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <button 
              onClick={onCtaClick}
              className="bg-alqueria-red text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center hover:bg-red-600 transition-all shadow-[0_0_20px_rgba(227,6,19,0.5)] transform hover:scale-105"
            >
              Reservar mi Cupo
              <ArrowRight className="ml-2" />
            </button>
            <a 
              href="#features"
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all text-center flex items-center justify-center"
            >
              Saber Más
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-alqueria-cream"></path>
        </svg>
      </div>
    </section>
  );
}