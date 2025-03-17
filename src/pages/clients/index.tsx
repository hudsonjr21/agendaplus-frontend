import React, { useEffect, useState } from 'react';
import { getClients } from '../../services/routes/client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ClientsPage = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getClients();
      setClients(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold">Clientes</h1>
        <ul>
          {clients.map((client) => (
            <li key={client.id}>{client.name}</li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default ClientsPage;