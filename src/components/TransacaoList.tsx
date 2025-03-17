import React, { useEffect, useState } from 'react';
import api from '../services/api';

const TransacaoList = () => {
  const [transacoes, setTransacoes] = useState([]);

  useEffect(() => {
    const fetchTransacoes = async () => {
      const response = await api.get('/transacoes');
      setTransacoes(response.data);
    };

    fetchTransacoes();
  }, []);

  return (
    <div>
      <h1>Transacoes</h1>
      <ul>
        {transacoes.map((transacao) => (
          <li key={transacao.id}>{transacao.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default TransacaoList;