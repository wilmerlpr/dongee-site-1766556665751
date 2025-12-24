import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { TicketType } from '../App';

interface PricingProps {
  onSelectPlan: (ticket: TicketType) => void;
}

const tickets: TicketType[] = [
  {
    id: 'student',
    name: 'Estudiantes',
    price: 60000,
    color: 'bg-blue-500',
    features: ['Acceso a formación', 'Networking general', 'Certificado digital']
  },
  {
    id: 'general',
    name: 'Entrada General',
    price: 120000,
    color: 'bg-alqueria-red',
    features: ['Todas las conferencias', 'Sesiones de networking', 'Material digital', 'Certificado de asistencia']
  },
  {
    id: 'business',
    name: 'Entrada Empresarial',
    price: 250000,
    color: 'bg-gray-800',
    features: ['Beneficios General', 'Zona VIP exclusiva', 'Kit de bienvenida Premium', 'Prioridad en mesas diálogo']
  },
  {
    id: 'provider',
    name: 'Proveedores',
    price: 300000,
    color: 'bg-alqueria-green',
    features: ['Acceso total', 'Stand de exhibición (2x2)', 'Acompañamiento comercial', 'Base de datos asistentes']
  },
  {
    id: 'corporate',
    name: 'Paquete Corporativo',
    price: 850000,
    color: 'bg-purple-700',
    features: ['Acceso para 4 personas', 'Beneficios VIP para todos', 'Reserva en actividades', 'Mención de marca']
  }
];

export default function Pricing({ onSelectPlan }: PricingProps) {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-alqueria-red font-bold uppercase tracking-wide mb-2">Inscripciones</h2>
          <h3 className="text-4xl font-bold text-gray-900">Elige tu Experiencia</h3>
          <p className="mt-4 text-gray-600">Cupos limitados. Asegura tu lugar en el evento del año.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch">
          {tickets.map((ticket, idx) => (
            <div 
              key={ticket.id}
              className={`relative group rounded-2xl border border-gray-200 p-8 flex flex-col transition-all duration-300 hover:shadow-2xl hover:border-transparent ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {ticket.id === 'general' && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-alqueria-red text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Más Popular
                </div>
              )}
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{ticket.name}</h4>
                <div className="flex items-baseline gap-1">
                   <span className="text-sm text-gray-500">$</span>
                   <span className="text-4xl font-bold text-gray-900">{ticket.price.toLocaleString('es-CO')}</span>
                   <span className="text-sm text-gray-500">COP</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {ticket.features.map((feat, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-alqueria-green mr-2 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => onSelectPlan(ticket)}
                className={`w-full py-3 rounded-xl font-bold text-white transition-colors duration-300 ${ticket.color} hover:opacity-90 shadow-md`}
              >
                Comprar Ahora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}