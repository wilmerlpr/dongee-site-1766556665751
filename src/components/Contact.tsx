import React from 'react';

export default function Contact() {
  return (
    <section className="py-20 bg-alqueria-red text-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para transformar tu red de contactos?</h2>
        <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
          No te pierdas el evento más importante del sector. Los cupos son limitados y se agotan rápido.
        </p>
        
        <div className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-2xl">
          <h3 className="text-gray-800 text-2xl font-bold mb-6">Contáctanos Rápido</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Tu correo electrónico"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border-none text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-alqueria-red outline-none"
            />
            <textarea 
              placeholder="¿Tienes alguna duda específica?"
              rows={3}
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border-none text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-alqueria-red outline-none"
            ></textarea>
            <button className="w-full bg-alqueria-red text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors shadow-lg">
              Enviar Mensaje
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-4">
            Al enviar aceptas nuestra política de tratamiento de datos.
          </p>
        </div>
      </div>
    </section>
  );
}