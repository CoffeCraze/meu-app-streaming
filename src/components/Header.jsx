import React from "react";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Meu Streaming</h1>
        <nav className="flex space-x-6">
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="hover:text-red-500">
                Início
              </a>
            </li>
            <li>
              <a href="#movies" className="hover:text-red-500">
                Filmes
              </a>
            </li>
            <li>
              <a href="#favorites" className="hover:text-red-500">
                Favoritos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
