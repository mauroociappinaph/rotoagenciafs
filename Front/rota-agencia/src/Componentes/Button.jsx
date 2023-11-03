import React from 'react'

export default function Button() {
  return (
    <div class="w-full text-center mx-auto">
      <button
        type="button"
        class="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
      >
        Enviar
      </button>
    </div>
  )
}
