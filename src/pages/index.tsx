import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to AgendaPlus</h1>
      <nav>
        <ul>
          <li>
            <Link href="/agendas">Agendas</Link>
          </li>
          <li>
            <Link href="/atendimentos">Atendimentos</Link>
          </li>
          <li>
            <Link href="/caixas">Caixas</Link>
          </li>
          <li>
            <Link href="/clientes">Clientes</Link>
          </li>
          <li>
            <Link href="/despesas">Despesas</Link>
          </li>
          <li>
            <Link href="/funcionarios">Funcionarios</Link>
          </li>
          <li>
            <Link href="/servicos">Servicos</Link>
          </li>
          <li>
            <Link href="/transacoes">Transacoes</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;