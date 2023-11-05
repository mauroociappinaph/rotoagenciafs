import React from 'react';

// Importa tus imágenes de manera similar
import imagen1 from "../asset/fotosTrabajos/1.png"; // Asegúrate de que la ruta sea correcta

const trabajosData = [
  {
    titulo: "Página Web BlogDeCafé",
    foto: imagen1,
    descripcion: "Esta es una descripción del proyecto BlogDeCafé, una página web dedicada al mundo del café, que combina un diseño elegante con una experiencia de usuario excepcional.",
    tecnologias: "Desarrollado con HTML, CSS y JavaScript",
  },
  // Agrega el resto de objetos del array con las imágenes importadas
];

function CardsTrabajos() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {trabajosData.map((trabajo, index) => (
            <div key={index} className="bg-white rounded-lg border p-6"> {/* Aumenté el tamaño de la tarjeta */}
              <img
                src={trabajo.foto}
                alt={`Imagen de ${trabajo.titulo}`}
                className="w-full h-48 rounded-md object-cover"
              />
              <div className="px-2 py-4">
                <div className="font-bold text-2xl mb-2">{trabajo.titulo}</div> {/* Aumenté el tamaño del título */}
                <p className="text-gray-700 text-base">{trabajo.descripcion}</p>
                <p className="italic mt-4 text-blue-600">{trabajo.tecnologias}</p> {/* Tecnologías en cursiva y en un color diferente */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardsTrabajos;
