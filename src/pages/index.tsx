import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo ao AgendaPlus</h1>
        <p className="text-lg">Gerencie suas agendas, clientes e muito mais de forma eficiente.</p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;