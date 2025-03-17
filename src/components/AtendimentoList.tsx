import React, { useEffect, useState } from 'react';
import api from '../services/api';

const AtendimentoList = () => {
  const [atendimentos, setAtendimentos] = useState([]);

  useEffect(() => {
    const fetchAtendimentos = async () => {
      const response = await api.get('/atendimentos');
      setAtendimentos(response.data);
    };

    fetchAtendimentos();
  }, []);

  return (
    <div>
      <h1>Atendimentos</h1>
      <ul>
        {atendimentos.map((atendimento) => (
          <li key={atendimento.id}>{atendimento.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default AtendimentoList;