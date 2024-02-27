import React from 'react'

export default function Button() {
  return (
    <div className="w-full text-center mx-auto">
      <button
        type="button"
        className="border bg-gray-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-700 focus:outline-none focus:shadow-outline"
      >
        Enviar
      </button>
    </div>
  );
}
