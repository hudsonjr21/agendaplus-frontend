import React, { useEffect, useState } from 'react';
import api from '../services/api';

const ClienteList = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchClientes = async () => {
      const response = await api.get('/clientes');
      setClientes(response.data);
    };

    fetchClientes();
  }, []);

  return (
    <div>
      <h1>Clientes</h1>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>{cliente.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClienteList;