import React from 'react';
import { Users, Lightbulb, Store, Coffee, Handshake, BadgeCheck, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Users className="w-8 h-8 text-alqueria-red" />,
    title: "Networking Estructurado",
    desc: "Rondas rápidas y efectivas para conectar con proveedores y aliados clave."
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-alqueria-green" />,
    title: "Talleres de Innovación",
    desc: "Expertos internacionales hablando de sostenibilidad y economía circular."
  },
  {
    icon: <Store className="w-8 h-8 text-alqueria-red" />,
    title: "Exhibición Empresarial",
    desc: "Espacios dedicados para mostrar lo mejor de tus productos y servicios."
  },
  {
    icon: <Handshake className="w-8 h-8 text-alqueria-green" />,
    title: "Citas de Negocios",
    desc: "Asesoría personalizada para conectarte con quien realmente te interesa."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-alqueria-red" />,
    title: "Directorio Digital",
    desc: "Acceso a nuestra app exclusiva para seguir conectados después del evento."
  },
  {
    icon: <Coffee className="w-8 h-8 text-alqueria-green" />,
    title: "Experiencia Gastronómica",
    desc: "Disfruta de una oferta culinaria con productos locales y de Alquería."
  },
  {
    icon: <BadgeCheck className="w-8 h-8 text-alqueria-red" />,
    title: "Certificación Oficial",
    desc: "Diploma avalado por Alquería por tu participación en los talleres."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-alqueria-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-alqueria-red font-bold uppercase tracking-wide mb-2">Valor Agregado</h2>
          <h3 className="text-4xl font-bold text-gray-900">¿Por qué asistir?</h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Hemos diseñado una experiencia integral donde el conocimiento se une con la oportunidad de negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="mb-6 p-4 bg-gray-50 rounded-full">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}