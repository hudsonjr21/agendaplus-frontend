import React, { useEffect, useState } from 'react';
import api from '../services/api';

const DespesaList = () => {
  const [despesas, setDespesas] = useState([]);

  useEffect(() => {
    const fetchDespesas = async () => {
      const response = await api.get('/despesas');
      setDespesas(response.data);
    };

    fetchDespesas();
  }, []);

  return (
    <div>
      <h1>Despesas</h1>
      <ul>
        {despesas.map((despesa) => (
          <li key={despesa.id}>{despesa.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default DespesaList;