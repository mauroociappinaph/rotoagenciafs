import React from "react";

const Header = () => {
  return (
    <section className="py-24 flex items-center min-h-screen justify-center bg-white">
      <div className="mx-auto max-w-[43rem]">
        <div className="text-center">
          <p className="text-lg font-medium leading-8 text-teal-400">
           Soluciones Full Stack
          </p>
          <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">
            Cambiando el rumbo hacia&nbsp;soluciones innovadoras.
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-slate-400">
            Specify helps you unify your brand identity by collecting, storing
            and distributing design tokens and assets — automatically.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
