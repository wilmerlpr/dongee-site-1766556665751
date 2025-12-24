import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';

export type TicketType = {
  id: string;
  name: string;
  price: number;
  features: string[];
  color: string;
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<TicketType | null>(null);

  const handleOpenModal = (ticket?: TicketType) => {
    if (ticket) setSelectedTicket(ticket);
    else setSelectedTicket(null); // General contact or generic
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTicket(null);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      <Navbar onRegister={() => handleOpenModal()} />
      
      <main className="flex-grow">
        <Hero onCtaClick={() => handleOpenModal()} />
        <Features />
        <Pricing onSelectPlan={handleOpenModal} />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        selectedTicket={selectedTicket}
      />
    </div>
  );
}

export default App;