import React from "react";

// Importa tus imágenes de manera similar
import imagen1 from "../asset/fotosTrabajos/1.png";
import imagen2 from "../asset/fotosTrabajos/2.png";
import imagen3 from "../asset/fotosTrabajos/3.png";
// import imagen4 from "../asset/fotosTrabajos/4.png";
import imagen5 from "../asset/fotosTrabajos/5.png";

const trabajosData = [
  {
    titulo: "Página Web BlogDeCafé",
    foto: imagen1,
    descripcion:
      "Una página web dedicada al mundo del café, que combina un diseño elegante con una experiencia de usuario excepcional.",
    tecnologias: "Desarrollado con HTML, CSS y JavaScript",
  },
  {
    titulo: "Buffete",
    foto: imagen2, // Asegúrate de que la ruta sea correcta
    descripcion:
      "Página web de un restaurant.Combina un diseño elegante con una experiencia de usuario excepcional.",
    tecnologias: "Desarrollado con HTML, CSS y JavaScript",
  },
  {
    titulo: "Rock and EDM Festival ",
    foto: imagen3, // Asegúrate de que la ruta sea correcta
    descripcion:
      "Proyecto que presenta un festival que combina lo mejor del rock. La página web ofrece información detallada sobre el evento, incluyendo horarios, artistas destacados y opciones de compra de boletos.",
    tecnologias: "Desarrollado con HTML, CSS, SASS , GULP y JavaScript",
  },
  {
    titulo: "ECOMMERCE",
    foto: imagen5, // Asegúrate de que la ruta sea correcta
    descripcion:
      "Es una plataforma de cursos en línea que permite a los usuarios explorar, comprar y gestionar. Los estudiantes pueden seleccionar cursos y agregarlos al carrito de compras, modificar y eliminar cursos.",
    tecnologias: "Desarrollado con HTML, TAILWIND y JavaScript",
  },
];

function CardsTrabajos() {
  return (
    <div className="flex-col items-center justify-center min-h-screen">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {trabajosData.map((trabajo) => (
            <div key={trabajo.id} className="bg-white rounded-lg border p-6">
              <img
                src={trabajo.foto}
                alt={`Imagen de ${trabajo.titulo}`}
                className="w-full h-48 rounded-md object-cover"
              />
              <div className="px-2 py-4">
                <div className="font-bold text-2xl mb-2">{trabajo.titulo}</div>
                <p className="text-gray-700 text-base">{trabajo.descripcion}</p>
                <p className="italic mt-4 text-blue-600">
                  {trabajo.tecnologias}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardsTrabajos;
