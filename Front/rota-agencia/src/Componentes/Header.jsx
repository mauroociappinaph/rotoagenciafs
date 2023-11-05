import Logo from "../asset/ro-removebg-preview.png";

const Header = () => (
  <section className="py-24 flex items-center min-h-screen justify-center bg-white">
    <div className="mx-auto max-w-[43rem] px-4">
      <div className="text-center">
        <div className="flex justify-center items-center">
          <img src={Logo} alt="Rota Logo" className="w-164 h-164 mb-4" />
        </div>
        <p className="text-lg leading-relaxed text-black">
          Nos esforzamos por ser la brújula que guía a nuestros clientes hacia soluciones innovadoras. En un mundo en constante evolución, trabajamos incansablemente para transformar desafíos en oportunidades y ofrecer resultados que marcan la diferencia.
        </p>
      </div>
    </div>
  </section>
);

export default Header;
