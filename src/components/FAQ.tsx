import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: "¿Cuáles son los métodos de pago?",
    a: "Aceptamos todas las tarjetas de crédito, débito PSE, y transferencias bancarias directas."
  },
  {
    q: "¿El evento incluye alimentación?",
    a: "Sí, todas las entradas incluyen acceso a la estación de café. La experiencia gastronómica completa (almuerzo) está incluida en entradas Empresarial, Proveedores y Corporativo."
  },
  {
    q: "¿Puedo transferir mi entrada a otra persona?",
    a: "Sí, puedes realizar el cambio de titularidad hasta 48 horas antes del evento enviando un correo a eventos@alqueria.com.co."
  },
  {
    q: "¿Dónde se realizará el evento?",
    a: "El evento se llevará a cabo en el Centro de Convenciones Ágora Bogotá. Enviaremos mapa y detalles de parqueadero en tu correo de confirmación."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 bg-alqueria-cream">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Preguntas Frecuentes</h2>
        
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-800">{item.q}</span>
                {openIndex === idx ? <ChevronUp className="text-alqueria-red" /> : <ChevronDown className="text-gray-400" />}
              </button>
              
              <div 
                className={`px-5 text-gray-600 bg-gray-50 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
              >
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}