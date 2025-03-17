import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md p-4">
      <nav className="container mx-auto">
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <a className="hover:underline">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/clients">
              <a className="hover:underline">Clientes</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;