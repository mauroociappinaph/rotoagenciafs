import React from 'react';
import trabajosData from '../trabajos.json';

export default function CardsTrabajos() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {trabajosData.map((trabajo, index) => (
            <div key={index} className="bg-white rounded-lg border p-4">
              <img src={trabajo.foto} alt={`Imagen de ${trabajo.titulo}`} className="w-full h-48 rounded-md object-cover" />
              <div className="px-1 py-4">
                <div className="font-bold text-xl mb-2">{trabajo.titulo}</div>
                <p className="text-gray-700 text-base">{trabajo.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}