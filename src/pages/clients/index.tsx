import React, { useEffect, useState } from 'react';
import { getClients } from '../../services/routes/clientes/get-client';
import { Cliente } from '../../@types/cliente';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ClientsPage = () => {
  const [clients, setClients] = useState<Cliente[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getClients();
        setClients(data);
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Clientes</h1>
        <ul className="list-disc pl-5">
          {clients.map((cliente) => (
            <li key={cliente.id}>{cliente.nomeCompleto}</li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default ClientsPage;