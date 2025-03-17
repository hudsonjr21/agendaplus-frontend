import React, { useEffect, useState } from 'react';
import api from '../services/api';

const FuncionarioList = () => {
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    const fetchFuncionarios = async () => {
      const response = await api.get('/funcionarios');
      setFuncionarios(response.data);
    };

    fetchFuncionarios();
  }, []);

  return (
    <div>
      <h1>Funcionarios</h1>
      <ul>
        {funcionarios.map((funcionario) => (
          <li key={funcionario.id}>{funcionario.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FuncionarioList;