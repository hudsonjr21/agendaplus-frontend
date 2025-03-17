import React, { useEffect, useState } from 'react';
import api from '../services/api';

const CaixaList = () => {
  const [caixas, setCaixas] = useState([]);

  useEffect(() => {
    const fetchCaixas = async () => {
      const response = await api.get('/caixas');
      setCaixas(response.data);
    };

    fetchCaixas();
  }, []);

  return (
    <div>
      <h1>Caixas</h1>
      <ul>
        {caixas.map((caixa) => (
          <li key={caixa.id}>{caixa.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default CaixaList;