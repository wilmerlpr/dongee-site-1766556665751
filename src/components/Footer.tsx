import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t-4 border-alqueria-green">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
             <div className="font-bold text-3xl mb-4 text-alqueria-red tracking-tight">Alquería</div>
             <p className="text-gray-400 mb-6 leading-relaxed">
               Fomentando el desarrollo sostenible y la conexión empresarial en Colombia desde hace más de 60 años.
             </p>
             <div className="flex space-x-4">
               {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-alqueria-red transition-colors">
                   <Icon size={20} />
                 </a>
               ))}
             </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Accesos Rápidos</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-alqueria-red transition-colors">Sobre el Evento</a></li>
              <li><a href="#" className="hover:text-alqueria-red transition-colors">Agenda Académica</a></li>
              <li><a href="#" className="hover:text-alqueria-red transition-colors">Patrocinadores</a></li>
              <li><a href="#" className="hover:text-alqueria-red transition-colors">Kit de Prensa</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contacto</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <MapPin className="mr-3 text-alqueria-green shrink-0" size={20} />
                <span>Km 5 Vía Cajicá - Zipaquirá,<br/>Cundinamarca, Colombia</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-alqueria-green shrink-0" size={20} />
                <span>+57 (1) 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-alqueria-green shrink-0" size={20} />
                <span>eventos@alqueria.com.co</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Boletín</h4>
            <p className="text-gray-400 mb-4">Recibe noticias sobre futuros eventos.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none w-full border border-gray-700 focus:border-alqueria-red"
              />
              <button className="bg-alqueria-red px-4 py-2 rounded-r-lg hover:bg-red-700 transition-colors font-bold">
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Alquería S.A. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}