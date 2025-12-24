import React, { useState, useEffect } from 'react';
import { X, Check, Loader2 } from 'lucide-react';
import { TicketType } from '../App';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTicket: TicketType | null;
}

export default function RegistrationModal({ isOpen, onClose, selectedTicket }: ModalProps) {
  const [step, setStep] = useState<'form' | 'processing' | 'success'>('form');

  useEffect(() => {
    if (isOpen) setStep('form');
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    // Simulate API call
    setTimeout(() => {
      setStep('success');
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal Content */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl w-full max-w-lg relative z-10 overflow-hidden shadow-2xl"
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-20"
        >
          <X size={24} />
        </button>

        <div className="bg-alqueria-red h-2 w-full" />

        <div className="p-8">
          <AnimatePresence mode="wait">
            {step === 'form' && (
              <motion.div 
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedTicket ? `Reserva: ${selectedTicket.name}` : 'Inscripción al Evento'}
                </h3>
                <p className="text-gray-600 mb-6">
                  Completa tus datos para iniciar el proceso de pago seguro.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                    <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-alqueria-red focus:border-transparent outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Correo Corporativo</label>
                    <input required type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-alqueria-red focus:border-transparent outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Empresa / Institución</label>
                    <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-alqueria-red focus:border-transparent outline-none" />
                  </div>
                  
                  {selectedTicket && (
                    <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center mt-4">
                      <span className="font-medium text-gray-700">Total a Pagar:</span>
                      <span className="font-bold text-xl text-alqueria-red">${selectedTicket.price.toLocaleString('es-CO')}</span>
                    </div>
                  )}

                  <button 
                    type="submit"
                    className="w-full bg-alqueria-green text-white font-bold py-3 rounded-xl mt-4 hover:bg-green-700 transition-colors shadow-md"
                  >
                    Continuar al Pago
                  </button>
                </form>
              </motion.div>
            )}

            {step === 'processing' && (
              <motion.div 
                key="processing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-10"
              >
                <Loader2 size={48} className="text-alqueria-red animate-spin mb-4" />
                <p className="text-lg font-medium text-gray-700">Procesando tu solicitud...</p>
                <p className="text-sm text-gray-500">Por favor espera un momento</p>
              </motion.div>
            )}

            {step === 'success' && (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-6 text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Check size={40} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Gracias por tu compra!</h3>
                <p className="text-gray-600 mb-6">
                  Te hemos enviado la confirmación y el código QR de acceso a tu correo electrónico.
                </p>
                <button 
                  onClick={onClose}
                  className="bg-gray-900 text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors"
                >
                  Cerrar
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}