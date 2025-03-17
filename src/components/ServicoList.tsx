import React, { useEffect, useState } from 'react';
import api from '../services/api';

const ServicoList = () => {
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    const fetchServicos = async () => {
      const response = await api.get('/servicos');
      setServicos(response.data);
    };

    fetchServicos();
  }, []);

  return (
    <div>
      <h1>Servicos</h1>
      <ul>
        {servicos.map((servico) => (
          <li key={servico.id}>{servico.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServicoList;