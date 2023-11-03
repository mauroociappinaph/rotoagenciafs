import React from "react";

const Hacemos = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="text-center text-black">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-10">
            ¿Quiénes somos?
          </h3>
          <p className="mt-4 text-base sm:text-lg lg:text-xl leading-relaxed">
            Somos una agencia Full Stack comprometida con la innovación y la excelencia. Nuestra pasión es desarrollar soluciones digitales que marquen la diferencia en el mundo.
          </p>
        </div>
        <div className="text-center text-black">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-10">
            ¿Qué Hacemos?
          </h3>
          <p className="mt-4 text-base sm:text-lg lg:text-xl leading-relaxed">
            Ofrecemos una amplia gama de servicios, desde desarrollo web y aplicaciones móviles hasta consultoría en tecnología. Trabajamos en estrecha colaboración con nuestros clientes para llevar sus ideas al siguiente nivel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hacemos;
