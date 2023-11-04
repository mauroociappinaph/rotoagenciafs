import React from 'react';
import CardsTrabajos from './CardsTrabajos';

export default function Trabajos() {
  return (
    <div className="bg-principal min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-6xl font-extrabold uppercase my-8">Trabajos</h1>
      <CardsTrabajos />
    </div>
  );
}
