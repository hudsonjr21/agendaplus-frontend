import React, { useEffect, useState } from 'react';
import api from '../services/api';

const AgendaList = () => {
  const [agendas, setAgendas] = useState([]);

  useEffect(() => {
    const fetchAgendas = async () => {
      const response = await api.get('/agendas');
      setAgendas(response.data);
    };

    fetchAgendas();
  }, []);

  return (
    <div>
      <h1>Agendas</h1>
      <ul>
        {agendas.map((agenda) => (
          <li key={agenda.id}>{agenda.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AgendaList;